'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Class, {
        as: 'classes',
        through: models.ClassList,
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gpa: DataTypes.INTEGER
    },

    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
