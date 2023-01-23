module.exports = (sequelize, Sequelize) => {
    const UserDas = sequelize.define("userdas", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "user",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        dasId: {
            type: Sequelize.INTEGER,
            references: {
                model: "das",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return UserDas
}