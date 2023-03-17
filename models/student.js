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
      // Student.belongsToMany(models.ClassList, {
      //   as: 'classlists',
      //   through: models.ClassList
      // })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
