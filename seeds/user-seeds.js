const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Bobby',
    password: 'password123'
  },
  {
    username: 'Cindy',
    password: 'password123'
  },
  {
    username: 'Marsha',
    password: 'password123'
  },
  {
    username: 'Peter',
    password: 'password123'
  },
  {
    username: 'Jan',
    password: 'password123'
  },
  {
    username: 'Greg',
    password: 'password123'
  },
  {
    username: 'Alice',
    password: 'password123'
  },
  {
    username: 'Sam',
    password: 'password123'
  },
  {
    username: 'Mike',
    password: 'password123'
  },
  {
    username: 'Carol',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
