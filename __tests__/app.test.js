const request = require('supertest');
const app = require('../lib/app');
const database = require('../sql/sequelize');
const Actor = require('../lib/models/actor.js');
const Studio = require('../lib/models/studio.js');
const Reviewer = require('../lib/models/reviewer.js');


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

//STUDIO ===
describe('All Studio routes for Studio Table', () => {
  beforeEach(() => {
    return database.sync({ force: true})
  });
  
  it('should add an actor to the the Actor table', () => {
    return request(app)
      .post('/api/studios')
      .send({
        name: 'Paramount',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Paramount',
          city: 'Los Angeles',
          state: 'California',
          country: 'United States'
      })
    })
  })

  it('should GET all actors from the Actor table', async () => {
    await Studio.bulkCreate([{
      name: 'Paramount',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States'
    },
    {
      name: 'Warner Brothers',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States'
    }])
    return request(app)
      .get('/api/studios')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array))
        expect(res.body.length).toEqual(2)
    })
  })

  it('should GET a single actor from the Actors table', async() => {
    await Studio.create({
      name: 'Warner Brothers',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States'
    });

  return request(app)
    .get('/api/studios/1')
    .then((res) => {
      expect(res.body).toEqual({
        id: 1,
        name: 'Warner Brothers',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States'
      })
    })
  })
});

//REVIEWERS===
describe('All Reviewers routes for Reviewers Table', () => {
  beforeEach(() => {
    return database.sync({ force: true})
  });
  
  it('should add an reviewer to the the reviwers table', () => {
    return request(app)
      .post('/api/reviewers')
      .send({
        name: 'Zeak Dasher',
        company: 'Gulp',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: 'Zeak Dasher',
          company: 'Gulp',
      })
    })
  })

  it('should GET all reviewers from the reviewers table', async () => {
    await Reviewer.bulkCreate([{
      name: 'Zeak Dasher',
      company: 'Gulp',
    },
    {
      name: 'Lily Collins',
      company: 'Fulp',
    }])
    return request(app)
      .get('/api/reviewers')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array))
        expect(res.body.length).toEqual(2)
    })
  })

  it('should GET a single reviewer from the Reviewer table', async() => {
    await Reviewer.create({
      name: 'Zeak Dasher',
      company: 'Gulp',
    });

  return request(app)
    .get('/api/reviewers/1')
    .then((res) => {
      expect(res.body).toEqual({
        id: 1,
        name: 'Zeak Dasher',
        company: 'Gulp',
      })
    })
  })

  it('should update a single reviewer from the reviewers table', async() => {
    await Reviewer.create({
      name: 'Zeak Dasher',
      company: 'Gulp',
    });

    return request(app)
    .patch('/api/reviewers/1')
    .send({ name: 'Zeak Dasher-Basher', company: 'Pulp' })
    .then((res) => {
      expect(res.body).toEqual({
        id: 1,
        name: 'Zeak Dasher-Basher',
        company: 'Pulp',
      })
    })
  })

  it('it should delete a reviewer from the reviewers table', async () => {
    await Reviewer.create({
      name: 'Zeak Dasher',
      company: 'Gulp',
    },
    );
    await Reviewer.create({
      name: 'Lily Collins',
      company: 'Fulp',
    },
    );

    return request(app)
      .delete('/api/reviewers/1')
      .then((res) => {
        expect(res.body).toEqual({ success: '👍' });
      });
  });

});
