// require('./lib/models/associations');
const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
});
