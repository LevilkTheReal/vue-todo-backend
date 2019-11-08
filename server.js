"use strict";

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

const routes = require('./routes');
app.use('/', routes);

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;

httpServer.listen(port);
console.log('Server started successfully on port: ' + port);