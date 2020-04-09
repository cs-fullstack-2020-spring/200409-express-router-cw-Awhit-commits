//importing express files for the server
const express = require('express');

//storing port number in a variable
const port = 8000;

//Utilzing express module as needed
const app = express();


//Importing the api file
let api = require('./routes/api')

//Importing the Admin file
let admin = require('./routes/admin')


//Setting the api route
app.use('/api',api);

//Setting the admin route
app.use('/admin',admin);


app.listen(port,console.log(`Listening on port ${port}`))

