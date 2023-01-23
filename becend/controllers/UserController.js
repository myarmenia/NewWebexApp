const bcrypt = require('bcrypt');
const { User, UserLenguage, Lenguage, Firm, } = require('../models');
const jwt = require("jsonwebtoken");

class UserController {

    static addInfoTeacher = async (req, res) => {
        let url = req.file.filename
        const { address, phone, lenguage } = req.body
        console.log(req.body);
        await User.update({ address, phone, lenguage, url }, {
            where: {
                id: req.user.id
            }
        })
        let searchLenguage = await Lenguage.create({ name: lenguage })
        await UserLenguage.create({ userId: req.user.id, lenguageId: searchLenguage.id })
        res.redirect("back")
    }
    static profileTeacher = (req, res) => {
        res.render("profileTeacher")
    }
    static profileStudent = (req, res) => {
        res.render("profileStudent")
    }

    static addGet = (req, res) => {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const token = req.header(tokenHeaderKey);

            const verified = jwt.verify(token, jwtSecretKey);
            if (verified) {
                return res.send("Successfully Verified");
            } else {
                // Access Denied
                return res.status(401).send(error);
            }
        } catch (error) {
            // Access Denied
            return res.status(401).send(error);
        }
    }

    static add = async (req, res) => {
        let data = req.body
        // console.log(data);

        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data1 = {
            time: Date(),
            userId: 12,
        }

        const token = jwt.sign(data1, jwtSecretKey);
        console.log(token);
        let dataEmail = await User.findOne({
            where:
            {
                email: data.email
            }
        })
        // console.log(data1);
        try {
            if (data.password === data.repeatpassword && dataEmail == null) {
                delete data.repeatpassword
                data.password = bcrypt.hashSync(data.password, 10);
                await User.create({ name: data.name, email: data.email, password: data.password, firmId: data.firmId, teacherStudentId: data.teacherStudentId })
                console.log(token.body, "test");
                res.send({ token })
            } else {
                throw new Error("Password or Email does not match")
            }
        } catch (error) {
            res.send("Password or Email does not match!")
        }
    }
};

module.exports = UserController