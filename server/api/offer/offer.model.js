'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Offer', {
    _id: {
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
        model: 'material',
        key: 'id',
      }
      editable: true
    },
    due_date: {
      DataTypes.DATE,
      allowNull: false
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
      editable: true
    },
    weight: {
      DataTypes.FLOAT,
      allowNull: false,
      editable: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      }
      editable: true
    },
    extraInfo: {
      DataTypes.TEXT,
      allowNull: true,
      editable: true
    }
    price: {
      DataTypes.FLOAT,
      allowNull: true,
      editable: true
    }
  });
}
