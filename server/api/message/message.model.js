'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Message', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      editable: false
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false,
      editable: false
    },
    date: {
      type: DataTypes.DATE,
      editable: false
    },
    sender_id:　{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      editable: false
    },
    receiver_id: {
      type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
      },
      editable: false
    },
    state: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    }
  });
}
