const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb =  require('./config/db');

const taskRoutes = require('./routes/taskRoute');

const app = express();
dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

app.use(bodyParser.json());
app.use(cors({origin: process.env.ORIGIN, credentials: true}));
connectDb();

app.use('/api/task', taskRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening to the ${process.env.PORT}`);
})