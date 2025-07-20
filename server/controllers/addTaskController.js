const Task = require('../models/taskModel');

exports.addTask = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    try{
        let task = new Task({ title, description });
        await task.save();
        res.status(201).json({message: 'Successfully added the task', task});
    }
    catch(error){
        res.status(500).send('Server error');
    }
};