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
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    stock_state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      editable: true
    }
  });
}
