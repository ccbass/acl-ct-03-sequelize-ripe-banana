const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/reviewers', require('./Controllers/reviewer-ctrl.js'));
app.use('/api/reviews', require('./Controllers/review-ctrl.js'));
app.use('/api/films', require('./Controllers/film-ctrl.js'));
app.use('/api/studios', require('./Controllers/studio-ctrl.js'));
app.use('/api/actors', require('./Controllers/actor-ctrl.js'));



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
