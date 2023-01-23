module.exports = (sequelize, Sequelize) => {
    const Firm = sequelize.define("firm", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Firm
}