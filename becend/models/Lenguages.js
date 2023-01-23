module.exports = (sequelize, Sequelize) => {
    const Lenguage = sequelize.define("lenguage", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Lenguage
}