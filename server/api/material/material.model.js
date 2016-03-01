'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Material', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    application: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    }
  });
}
