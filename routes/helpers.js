/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { users } = require('../data/users');
const { cards } = require('../data/cards');

const getUsersList = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const currentUser = users.filter((user) => user._id === req.params.id);
  console.log(currentUser);
  if (currentUser == '') { res.send({ error: 'Нет пользователя с таким id' }); }
  res.send((currentUser));
};

const getCards = (req, res) => {
  res.send(cards);
};

const error = (req, res, err) => {
  if (err) { res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }); }
};

const timeLog = (req, res, next) => {
  const date = new Date();
  console.log(`${date}, URL:${req.url}, Method:${req.method}`);
  next();
};

module.exports = {
  getUsersList,
  getUser,
  getCards,
  error,
  timeLog,
};
