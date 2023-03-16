'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.hasMany(models.Student, { foreignKey: 'classId' }) // define association here
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
