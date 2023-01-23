const express = require("express");
const { User } = require("./models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const Auth = require("./middleware/Auth");
const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const upload = require("./middleware/Upload");
const dotenv = require("dotenv");
const cors = require("cors")


const app = express();

dotenv.config()

app.set("view engine", "hbs")
app.set("view options", {
    layout: "layout/main"
})


app.use(express.static(__dirname + "/static"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



//////////////////////////    LocalStrategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, AuthController.LoginCheck)
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    let user = await User.findByPk(id)
    return done(null, user)
});
//////////////////////////    LocalStrategy


app.use(
    cors({
        origin: "http://localhost:8000",
        credentials: true,
    })
);


//////////////////////////    Methods get
app.get("/", AuthController.index)
app.get("/validateToken", AuthController.index)
app.get("/login", AuthController.login)
app.get("/logout", Auth(), AuthController.logout)
app.get("/profileTeacher", Auth(), UserController.profileTeacher)
app.get("/profileStudent", Auth(), UserController.profileStudent)
//////////////////////////    Methods get

const uploadData = upload.fields([{
    name: 'picture'
}, {
    name: 'video'
}])

//////////////////////////    Methods posts
app.post("/addTeacherInfo", Auth(), upload.single("photo"), UserController.addInfoTeacher)
app.post("/addUser", UserController.add)
app.get("/addUser/validateToken", UserController.addGet)
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    AuthController.loginPost)
//////////////////////////    Methods posts


app.listen(8000, () => console.log("Listening on : 8000"));