const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/actors', require('./Controllers/actor-ctrl.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
