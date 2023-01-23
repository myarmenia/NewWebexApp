module.exports = (sequelize, Sequelize) => {
    const Das = sequelize.define("das", {
        name:{
            type:Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Das
}