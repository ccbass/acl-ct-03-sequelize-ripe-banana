const Actor = require('./actor')
const Film = require('./film')
const Review = require('./review')
const Reviewer = require('./reviewer')
const Studio = require('./studio')


Reviewer.hasMany(Review)
Review.belongsTo(Reviewer)

Film.hasMany(Review)
Review.belongsTo(Film)

Studio.hasMany(Film)
Film.belongsTo(Studio)

Film.belongsToMany(Actor, {through: 'ActorFilms'})
Actor.belongsToMany(Film, {through: 'ActorFilms'})