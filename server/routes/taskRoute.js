const exporess = require('express');
const { addTask } = require('../controllers/addTaskController');
const { deleteTask } = require('../controllers/deleteTaskController');
const router = exporess.Router();

router.post('/add', addTask);
router.post('/delete', deleteTask);

module.exports = router;