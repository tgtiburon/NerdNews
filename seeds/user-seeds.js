const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'bobby',
    password: 'password123'
  },
  {
    username: 'cindy',
    password: 'password123'
  },
  {
    username: 'marsha',
    password: 'password123'
  },
  {
    username: 'peter',
    password: 'password123'
  },
  {
    username: 'jan',
    password: 'password123'
  },
  {
    username: 'greg',
    password: 'password123'
  },
  {
    username: 'alice',
    password: 'password123'
  },
  {
    username: 'sam',
    password: 'password123'
  },
  {
    username: 'mike',
    password: 'password123'
  },
  {
    username: 'carol',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
