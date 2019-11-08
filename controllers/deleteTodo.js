"use strict";

const connect = require('../db/connection').connect;
const TodoSchema = require('../db/models/todo');
const { parse } = require("querystring");


exports.handler = async (req, res) => {
    const id = parse(req.params.id).id;
    const conn = await connect();
    const Todo = conn.model('Todo', TodoSchema);


    try {
       await Todo.deleteOne({
            _id: id
        });

        res.json({
            status: 'successful',
        });
    } catch (err) {
        console.log(err.message);
        res.json({ status: err.message });
    } finally {
        conn.close();
    }
}

