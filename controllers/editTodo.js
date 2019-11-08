"use strict";

const connect = require('./../db/connection').connect;
const TodoSchema = require('./../db/models/todo');
const { parse } = require("querystring");


exports.handler = async (req, res) => {
    const id = parse(req.params.id).id;
    const conn = await connect();
    const Todo = conn.model('Todo', TodoSchema);
    const {
        text
    } = req.body;

    try {
        const todo = await Todo.findOne({
            _id: id
        });
        todo.text = text;
        await todo.save();

        
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

