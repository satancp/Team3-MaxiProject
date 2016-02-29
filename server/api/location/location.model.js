'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    },
    locaiton_range: {
      DataTypes.STRING,
      allowNull: false,
      editable: true
    }
  });
}
