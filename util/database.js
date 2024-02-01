const Sequelize = require('sequelize');

// database이름, username, pw,
const sequelize = new Sequelize('node-complete', 'root', '0000', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
