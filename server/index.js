const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');


//serve files from dist
app.use(express.static(path.join(__dirname, '../client')));

//See all incoming requests
app.use(morgan('dev'));

//JSON requests
app.use(express.json());

app.get('/songs', (req, res) => {
  axios.get('http://localhost:9000/songs')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/api/comments', (req, res) => {
  axios.get('http://localhost:3001/api/comments')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/buttons/exit.svg', (req, res) => {
  axios.get('http://localhost:3000/buttons/exit.svg')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});



//notification on open server
app.listen(port, () => console.log(`listening on port ${port}!`));