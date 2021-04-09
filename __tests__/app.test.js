const request = require('supertest');
const app = require('../lib/app');
const database = require('../sql/sequelize');
const Actor = require('../lib/models/actor.js');

describe('All Actor routes for Actor Table', () => {
  beforeEach(() => {
    return database.sync({ force: true})
  });
  
  it('should add an actor to the the Actor table', () => {
    return request(app)
      .post('/api/actors')
      .send({
        name: 'Craig Jones',
        dob: '1970-02-18',
        pob: 'Johannesburg, South Africa'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Craig Jones',
          dob: expect.any(String),
          pob: 'Johannesburg, South Africa'
      })
    })
  })

  it('should GET all actors from the Actor table', async () => {
    await Actor.bulkCreate([{
      name: 'Lyle Eriksson',
      dob: '1912-08-04',
      pob: 'Scranton, Pennsylvania'
    },
    {
      name: 'Selena Gomez',
      dob: '1992-08-22',
      pob: 'Grand Prairie, Texas'
    }])
    return request(app)
      .get('/api/actors')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array))
        expect(res.body.length).toEqual(2)
    })
  })

  it('should GET a single actor from the Actors table', async() => {
    await Actor.create({
      name: 'Selena Gomez',
      dob: '1992-08-22',
      pob: 'Grand Prairie, Texas'
    });

  return request(app)
    .get('/api/actors/1')
    .then((res) => {
      expect(res.body).toEqual({
        id: 1,
        name: 'Selena Gomez',
        dob: expect.any(String),
        pob: 'Grand Prairie, Texas'
      })
    })
  })
});
