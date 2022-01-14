const { Post } = require('../models');

const postdata = [
  {
    title: 'Title 1',
    post_content: 'Post content 1',
    user_id: 1
  },
  {
    title: 'Title 2',
    post_content: 'Post content 2',
    user_id: 2
  },
  {
    title: 'Title 3',
    post_content: 'Post content 3',
    user_id: 3
  },
  {
    title: 'Title 4',
    post_content: 'Post content 4',
    user_id: 4
  },
  {
    title: 'Title 5',
    post_content: 'Post content 5',
    user_id: 5
  },
  {
    title: 'Title 6',
    post_content: 'Post content 6',
    user_id: 6
  },
  {
    title: 'Title 7',
    post_content: 'Post content 7',
    user_id: 7
  },
  {
    title: 'Title 8',
    post_content: 'Post content 8',
    user_id: 8
  },
  {
    title: 'Title 9',
    post_content: 'Post content 9',
    user_id: 9
  },
  {
    title: 'Title 10',
    post_content: 'Post content 10',
    user_id: 10
  },
  {
    title: 'Title 11',
    post_content: 'Post content 11',
    user_id: 10
  },
  {
    title: 'Title 12',
    post_content: 'Post content 12',
    user_id: 9
  },
  {
    title: 'Title 13',
    post_content: 'Post content 13',
    user_id: 8
  },
  {
    title: 'Title 14',
    post_content: 'Post content 14',
    user_id: 7
  },
  {
    title: 'Title 15',
    post_content: 'Post content 15',
    user_id: 6
  },
  {
    title: 'Title 16',
    post_content: 'Post content 16',
    user_id: 5
  },
  {
    title: 'Title 17',
    post_content: 'Post content 17',
    user_id: 4
  },
  {
    title: 'Title 18',
    post_content: 'Post content 18',
    user_id: 3
  },
  {
    title: 'Title 19',
    post_content: 'Post content 19',
    user_id: 2
  },
  {
    title: 'Title 20',
    post_content: 'Post content 20',
    user_id: 1
  },
  {
    title: 'Title 21',
    post_content: 'Post content 21',
    user_id: 2
  },
  {
    title: 'Title 22',
    post_content: 'Post content 22',
    user_id: 3
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
