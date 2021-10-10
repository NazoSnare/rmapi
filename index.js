'use strict';

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
const config = require('config');


let port = config.get('server.port');
let log = console.log;

app.use(morgan('short'));
app.use(cors());

//app modules for cleaner code
const apiRouter = require('./routes/api');

app.use('/api/v1', apiRouter);

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use('/*', (req, res, next) => {


    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});


app.listen(port, () => {
    log(chalk.green(`server started on http://localhost:${port}`));
});