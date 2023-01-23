const bcrypt = require('bcrypt');
const { User, Firm } = require("../models")
const jwt = require("jsonwebtoken");

class AuthController {
    static index = async (req, res) => {
        let firms = await Firm.findAll()
        res.render("index", { firms, title: "Index" })
    }

    static login = (req, res) => {

        res.render("login", { title: "Login" })
    }

    static logout = async (req, res) => {
        req.logOut(() => {
            res.redirect("/login")
        })
    }

    static loginPost = function (req, res) {
        if (req.user.teacherStudentId === 1) {

            res.redirect("profileTeacher")
        } else {
            res.redirect("profileStudent")
        }
        // res.redirect('/profile');
    }

    static add = async (req, res) => {
        let data = req.body
        // console.log(data);
        try {
            if (data.password === data.repeatpassword) {
                delete data.repeatpassword
                data.password = bcrypt.hashSync(data.password, 10);
                await User.create(data)
                res.redirect("/login")
            } else {
                throw new Error("Password does not match")
            }
        } catch (error) {
            res.send("Password does not match")
        }
    }

    static async LoginCheck(email, password, done) {
        let user = await User.findOne({ where: { email: email } });
        // console.log(user);
        if (!user) {
            return done(null, false);
        }
        let result = await bcrypt.compare(password, user.password);
        if (!result) {
            return done(null, false);
        }
        return done(null, user);
    }
}

module.exports = AuthController