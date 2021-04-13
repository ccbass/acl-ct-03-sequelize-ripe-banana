
// sets up all tables, and drops/clears tables if they already exist.

const db = require('./sql/sequelize')
require('./lib/models/actor')
require('./lib/models/film')
require('./lib/models/review')
require('./lib/models/reviewer')
require('./lib/models/studio')
// sets up all tables, and drops/clears tables if they already exist.
const syncDb = async () => {
    console.log('===SYNCED ALL TABLES===')
    await db.sync()
    console.log('===SYNCED ALL TABLES===')
}
syncDb()

// database.sync({ force: true})

