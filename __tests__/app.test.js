const request = require('supertest');
const app = require('../lib/app');
const database = require('../sql/sequelize');

describe('team-sequelize-lab routes', () => {
  beforeEach(() => {
    return database.sync({ force: true})
  });
  
});
