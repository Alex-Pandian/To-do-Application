const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb =  require('./config/db');

const app = express();
dotenv.config({path: path.join(__dirname, 'config', '.env')});

app.use(bodyParser.json());
app.use(cors({origin: process.env.ORIGIN, credentials: true}));
connectDb();

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening to the ${process.env.PORT}`);
})