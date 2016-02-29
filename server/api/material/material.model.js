'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Material', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    name: {
      DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    type: {
      DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    application: {
      DataTypes.STRING,
      allowNull: false,
      editable: true
    }
  });
}
