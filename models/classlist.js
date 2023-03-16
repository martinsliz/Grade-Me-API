'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ClassList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassList.init({
    classId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    },
    studentId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'classes',
        key: 'id'
      }
    },
    sequelize,
    modelName: 'ClassList',
    tableName: 'class_lists'
  })
  return ClassList
}
