const { Router } = require('express');
const Film = require('../models/film.js')


module.exports = Router()
    .post('/', (req, res , next) => {
      Film.create(req.body)
      .then((film) => res.send(film))
      .catch(next);
    })

    .get('/', (req, res, next) => {
      Film.findAll()
        .then((film) => res.send(film))
        .catch(next);
    })

    .get('/:id', (req, res, next) => {
      Film.findByPk(req.params.id)
        .then((film) => res.send(film))
        .catch(next);
    })