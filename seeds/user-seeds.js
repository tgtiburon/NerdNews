const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'bobby',
    email: 'bobby@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'cindy',
    email: 'cindy@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'marsha',
    email: 'marsha@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'peter',
    email: 'peter@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'jan',
    email: 'jan@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'greg',
    email: 'greg@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'alice',
    email: 'alice@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'sam',
    email: 'sam@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'mike',
    email: 'mike@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'carol',
    email: 'carol@bradybunch.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
