"use strict";

const router = require('express').Router();

const postAddTodo = require('./controllers/addTodo');
const getTodos = require('./controllers/getTodos');
const deleteTodo = require('./controllers/deleteTodo');
const editTodo = require('./controllers/editTodo');

router.route('/')
  .get(function (req, res) { res.json({ message: 'Server live!' }); });

router.route('/addTodo').post(postAddTodo.handler);
router.route('/getTodos').get(getTodos.handler);
router.route('/deleteTodo/:id').delete(deleteTodo.handler);
router.route('/editTodo/:id').put(editTodo.handler);


module.exports = router;