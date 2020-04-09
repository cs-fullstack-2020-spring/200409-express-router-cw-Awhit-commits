const express = require('express');

const port = 8000;

const app = express();

let api = require('./routes/api')

let admin = require('./routes/admin')



app.use('/api',api);

app.use('/admin',admin);
app.listen(port,console.log(`Listening on port ${port}`))

