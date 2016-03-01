'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Offer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      editable: false,
      autoIncrement: true
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
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      editable: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      editable: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id'
      },
      editable: true
    },
    extraInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      editable: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      editable: true
    }
  });
}
