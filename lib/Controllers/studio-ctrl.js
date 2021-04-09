const { Router } = require('express');
const Studio = require('../models/studio.js')

module.exports = Router()
    .post('/', (req, res, next) => {
        Studio.create(req.body)
        .then((studio) => res.send(studio))
        .catch(next);
      })
      
    .get('/', (req, res, next) => {
        Studio.findAll()
        .then((studio) => res.send(studio))
        .catch(next);
      })

    .get('/:id', (req, res, next) => {
        Studio.findByPk(req.params.id)
        .then((studio) => res.send(studio))
        .catch(next);
    })