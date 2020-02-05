const express = require('express')
const app = express()
const port = 1000
const path = require('path');
const morgan = require('morgan');

//serve files from dist
app.use(express.static(path.join(__dirname, '../client')));

//See all incoming requests
app.use(morgan('dev'));

//JSON requests
app.use(express.json());

// //route all requests
// app.use('/', router);

//notification on open server
app.listen(port, () => console.log(`listening on port ${port}!`));