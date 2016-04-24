'use strict';

var User = module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      editable: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      editable: true
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    power: DataTypes.INTEGER
  });
}

