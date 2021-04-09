const database = require('./sql/sequelize')


// sets up all tables, and drops/clears tables if they already exist.

database.sync({ force: true})