'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Class, { foreignKey: 'classId' })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gpa: DataTypes.INTEGER,
      classId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'classes',
          key: 'id'
        }
      }
    },

    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
