const { Sequelize } = require("sequelize")

const { DB, USER, HOST, PASSWORD, DIALECT } = require("../config")

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT
})

const User = require("./User")(sequelize, Sequelize)
const Firm = require("./Firm")(sequelize, Sequelize)
const TeacherStudent = require("./TeacherStudent")(sequelize, Sequelize)
const UserDas = require("./UserDas")(sequelize, Sequelize)
const Das = require("./Das")(sequelize, Sequelize)
const Lenguage = require("./Lenguages")(sequelize, Sequelize)
const UserLenguage = require("./UserLenguage")(sequelize, Sequelize)



User.belongsToMany(Das, { through: UserDas, foreignKey: "userId" })
Das.belongsToMany(User, { through: UserDas, foreignKey: "dasId", })
User.belongsToMany(Lenguage, { through: UserLenguage, foreignKey: "userId" })
Lenguage.belongsToMany(User, { through: UserLenguage, foreignKey: "lenguageId" })
Firm.hasMany(User, { foreignKey: "firmId" })

sequelize.sync()

module.exports = {
    User,
    Firm,
    TeacherStudent,
    Das,
    UserDas,
    Lenguage,
    UserLenguage
}