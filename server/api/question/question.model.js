'use strict';

var Question = module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    }
  });
}
