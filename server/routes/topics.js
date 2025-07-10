const express = require('express');
const router = express.Router();
const controller = require('../controllers/topicsController');

router.get('/', controller.getAllTopics);
router.post('/', controller.createTopic);
router.delete('/:id', controller.deleteTopic);
router.put('/:id/up', controller.voteUp);
router.put('/:id/down', controller.voteDown);

module.exports = router;
