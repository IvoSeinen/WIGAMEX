const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const login = require('./routes/login');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || '3000';
const server = http.createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WIGAMEX', { useMongoClient: true, promiseLibrary: Promise })
.then(() => console.log('connection successful'))
.catch((err) => console.error(err));

app.set('port', port);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);
app.use('/login', login);

server.listen(port, () => console.log(`API running on localhost:${port}`));