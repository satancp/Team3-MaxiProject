'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      editable: false,
      autoIncrement: true
    },
    username: {
      DataTypes.STRING,
      allowNull: false,
      editable: false
    },
    password: {
      DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      editable: true
    },
    user_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      editable: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business',
        key: 'id',
      }
      editable: true
    },
    question_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question_id3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    answer3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    power: DataTypes.BOOLEAN
  });
}