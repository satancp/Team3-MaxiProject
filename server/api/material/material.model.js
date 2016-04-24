'use strict';

var Material = module.exports = function(sequelize, DataTypes) {
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
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    manufacturer_date: {
      type: DataTypes.DATE,
      allowNull: false,
      editable: true
    },
    use_by_date: {
      type: DataTypes.DATE,
      allowNull: false,
      editable: true
    },
    poster_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    fibre_class: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    fibre_code: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    resin_classification: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    resin_details: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    weave_pattern: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    fabric_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      editable: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      editable: true
    },
    qunantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      editable: true
    },
    stock_state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      editable: true
    }
  });
}
