module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            validate: {
                is: /^[a-zA-Z]+$/,
                len: [2, 20]
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                is: /^[^@\s\t\r\n]+@[^@\s\t\r\n]+\.[^@\s\t\r\n]/
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                is: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{6,}/
            }
        },
        address: {
            type: Sequelize.STRING,

        },
        phone: {
            type: Sequelize.STRING,

        },
        url: {
            type: Sequelize.STRING,
        },
        firmId: {
            type: Sequelize.INTEGER,
            references: {
                model: "firm",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        teacherStudentId: {
            type: Sequelize.INTEGER,
            references: {
                model: "teacherstudent",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return User
}