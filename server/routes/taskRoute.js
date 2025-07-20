const exporess = require('express');
const { addTask } = require('../controllers/addTaskController');
const { deleteTask } = require('../controllers/deleteTaskController');
const { getTask } =  require('../controllers/getTaskController');
const router = exporess.Router();

router.post('/add', addTask);
router.delete('/delete', deleteTask);
router.get('/get', getTask);

module.exports = router;