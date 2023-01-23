module.exports = (sequelize, Sequelize) => {
    const TeacherStudent = sequelize.define("teacherstudent", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return TeacherStudent
}