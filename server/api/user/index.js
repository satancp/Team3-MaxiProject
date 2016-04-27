'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/confirm/:content', controller.confirmation);
router.post('/', controller.create);
router.post('/login', controller.login);
router.put('/:id', controller.update);

module.exports = router;
