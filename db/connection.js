const Sequelize = require('sequelize');

const sequelize = new Sequelize.Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;
