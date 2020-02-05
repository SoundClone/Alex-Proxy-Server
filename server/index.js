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
  axios.get('http://localhost:8000/api/comments')
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

app.get('/buttons/4e6f865c81aa54f9e778e35e7ac3ed73.mp3', (req, res) => {
  axios.get('http://localhost:9000/4e6f865c81aa54f9e778e35e7ac3ed73.mp3')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/heart.png', (req, res) => {
  axios.get('http://localhost:8000/img/heart.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/repost.png', (req, res) => {
  axios.get('http://localhost:8000/img/repost.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/share.png', (req, res) => {
  axios.get('http://localhost:8000/img/share.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/addToList.png', (req, res) => {
  axios.get('http://localhost:8000/img/addToList.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/more.png', (req, res) => {
  axios.get('http://localhost:8000/img/more.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/addToPlayList.png', (req, res) => {
  axios.get('http://localhost:8000img/addToPlayList.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/Station.png', (req, res) => {
  axios.get('http://localhost:8000/img/Station.png')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/img/play.png', (req, res) => {
  axios.get('http://localhost:8000/img/play.png')
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