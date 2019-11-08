"use strict";

const connect = require('./../db/connection').connect;
const TodoSchema = require('./../db/models/todo');


exports.handler = async (req, res) => {
    const conn = await connect();
    const Todo = conn.model('Todo', TodoSchema);
    const {
        text
    } = req.body;

    try {
        const todo = new Todo;
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

