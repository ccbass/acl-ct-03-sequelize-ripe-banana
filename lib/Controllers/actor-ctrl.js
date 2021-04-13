const { Router } = require('express');
const Actor = require('../models/actor.js')

module.exports = Router()
    .post('/', (req, res, next) => {
      Actor.create(req.body)
        .then((actor) => res.send(actor))
        .catch(next);
      })
      
    .get('/', (req, res, next) => {
      Actor.findAll()
        .then((actors) => res.send(actors))
        .catch(next);
      })

    .get('/:id', (req, res, next) => {
      Actor.findByPk(req.params.id)
        .then((actor) => res.send(actor))
        .catch(next);
    })