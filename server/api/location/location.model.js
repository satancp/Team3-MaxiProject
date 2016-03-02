'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
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
    }
  });
}
