'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('News', {
    _id: {
     type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      editable: false,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    content: DataTypes.TEXT
  });
}