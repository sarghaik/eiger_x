// Uncomment the code below to use Sequelize ORM
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
// const mongoose = require('mongoose');


// Insert your model definition below


const trade = sequelize.define(
  'Trade',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.NUMBER,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    shares: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    timestamp: {
      type: DataTypes.NUMBER,
    }
  },
  {
    // Other model options go here
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

module.exports = sequelize.models.Trade;