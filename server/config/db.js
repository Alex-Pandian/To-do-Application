const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MongoDB Connected to host:'+con.connection.host);
    })
};

module.exports = connectDb;