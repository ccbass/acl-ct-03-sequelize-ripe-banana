const Actor = require('./actor')
const Film = require('./film')
const Review = require('./review')
const Reviewer = require('./reviewer')
const Studio = require('./studio')


Reviewer.hasMany(Review)
Review.hasOne(Reviewer)

Film.hasMany(Review)
Review.hasOne(Film)

Studio.hasMany(Film)
Film.hasOne(Studio)

Film.hasMany(Actor)
Actor.hasMany(Film)