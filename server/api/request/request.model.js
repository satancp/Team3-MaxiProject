'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Request', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      editable: true
    },
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Materials',
        key: 'id'
      },
      editable: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
}
