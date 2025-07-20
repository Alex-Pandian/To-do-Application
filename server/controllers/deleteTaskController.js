const Task = require('../models/taskModel');

exports.deleteTask = async (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    try{
        await Task.findOneAndDelete(title);
        res.status(204).end();
    }
    catch(error){
        res.status(500).send('Server error');
    }
};