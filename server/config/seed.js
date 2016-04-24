/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var sqldb = require('../sqldb');
// var Question = sqldb.Question;
// var User = sqldb.User;

// Question.sync()
//   .then(() => Question.destroy({where:{}}))
//   .then(() => {
//     Question.bulkCreate([
//     {	
//       id:1,
//       question: 'Which place were you born?'
//     },
//     {	
//       id:2,
//       question: 'What is the name of your mother?'
//     },
//     {
//       id:3,
//       question: 'Which film do you like most?'
//     }]);
//   });

// User.sync()
//   .then(() => User.destroy({where:{}}))
//   .then(() => {
//     User.bulkCreate([
//     {
//       id:1,
//       name: 'Top_admin',
//       password: 'admin',
//       email: 'zx603852402@gmail.com',
//       phonenumber: '07821430609',
//       company: 'University of Sheffield',
//       question_id:1,
//       answer: 'Sheffield',
//       power:1
//     },
//     {
//       id:2,
//       name: 'Second_admin',
//       password: 'admin',
//       email: 'zx603852402@vip.qq.com',
//       phonenumber: '07821430609',
//       company: 'University of Sheffield',
//       question_id:1,
//       answer: 'Sheffield',
//       power:1
//     }]);
//   });

