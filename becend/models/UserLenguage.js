module.exports = (sequelize, Sequelize) => {
    const UserLenguage = sequelize.define("userlenguage", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "user",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        lenguageId: {
            type: Sequelize.INTEGER,
            references: {
                model: "lenguage",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return UserLenguage
}