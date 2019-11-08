"use strict";

const mongoose = require('mongoose');


exports.connect = async () =>  {
    const conn = await mongoose.createConnection(process.env.MONGO_URL,{"auth":
                {"authSource": "admin"},
                "useNewUrlParser": true,
                "useUnifiedTopology": true,
                "user": process.env.MONGO_USR,
                "pass": process.env.MONGO_PW});
    return conn;
}


    