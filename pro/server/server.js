/**
 * @ Title: server.js
 * @ Description: express server
 * @ author Tantaiqiuyue@gmail.com
 * @ createDate Date
 * @ createTime: time
 * @ version V1.0
 **/

'use strict';


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user');

const app = express();

app.use(bodyParser());
app.use(cookieParser());
app.use('/user', userRouter);



app.listen(9093, function() {
  console.log('============ port: 9093,node.js server is runing =============');
});