const { Router } = require('express');
const Review = require('../models/review.js')

module.exports = Router()
    .post('/', (req, res, next) => {
        Review.create(req.body)
        .then((review) => res.send(review))
        .catch(next);
      })
      
    .get('/', (req, res, next) => {
        Review.findAll()
        .then((reviews) => res.send(reviews))
        .catch(next);
      })

    .get('/:id', (req, res, next) => {
        Review.findByPk(req.params.id)
        .then((review) => res.send(review))
        .catch(next);
    })