'use strict';

var express = require('express');
var controller = require('./material.controller');

var router = express.Router();

router.get('/all/', controller.index);
router.get('/keyword/:content', controller.keywordSearch);
router.get('/:id', controller.show);
router.get('/', controller.search);
router.get('/:id/:state', controller.changeState);
router.post('/', controller.create);
router.put('/:id/', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
