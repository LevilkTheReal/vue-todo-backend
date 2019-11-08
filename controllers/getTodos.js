"use strict";

const connect = require('./../db/connection').connect;
const TodoSchema = require('./../db/models/todo');


exports.handler = async (req, res) => {
    const conn = await connect();
    const Todo = conn.model('Todo', TodoSchema);

    try {
        const todoArr = [];
        await Todo.find({}, (err, todos) => {
            todos.forEach(todo => {
                todoArr.push({
                    id: todo.id,
                    text: todo.text,
                });
            });
        });

        res.json({
            status: 'successful',
            todos: todoArr,
        });
    } catch (err) {
        console.log(err.message);
        res.json({ status: err.message });
    } finally {
        conn.close();
    }
}

