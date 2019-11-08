"use strict";

let mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = TodoSchema;
