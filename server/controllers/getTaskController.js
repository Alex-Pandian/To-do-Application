const Task = require('../models/taskModel');

exports.getTask = async (req, res) => {
    console.log(req.body);
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch(error){
        res.status(500).send('Server error');
    }
};