'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.belongsToMany(models.Student, {
        as: 'students',
        through: models.ClassList,
        foreignKey: 'classId'
      })
    }
  }
  Class.init(
    {
      name: DataTypes.STRING,
      grade: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Class',
      tableName: 'classes'
    }
  )
  return Class
}
