const { Router } = require('express');
const Review = require('../models/review')
const Reviewer = require('../models/reviewer')
const Film = require('../models/film')

/*
Should return this object
{
  rating: <rating number 1-5 RN>,
  reviewer: <review id RI>
  review: <review-text, max-length 140 chars RS>,
  film: <film-id RI>
}
*/

module.exports = Router()
    .post('/', async (req, res, next) => {
        const reviewer = await Reviewer.findOne({
          where: {name: req.body.reviewer}
        })
        const film = await Film.findOne({
          where: {title: req.body.title}
        })

        Review.create(req.body)
        .then((review) => {
          review.setReviewer(reviewer)
          review.setFilm(film)
          return review
        })
        .then((review) => res.send(review))
        .catch(next);
      })
     
    // limit to 100 max
    .get('/', (req, res, next) => {
        // Review.findAll({ include: Film })
        Review.findAll()
        .then((reviews) => res.send(reviews))
        .catch(next);
      })

    .delete('/:id', (req, res, next) => {
        Review.destroy({
          where: { id: req.params.id }
        })
        .then(() => res.send({ success: '👍' }))
        .catch(next);
      })

