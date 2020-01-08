const http = require('http');
const express = require('express');
const nunjucks = require('nunjucks');

let handler = express();

nunjucks.configure('../frontend/views', {
  autoescape: true,
  express: handler
});

handler
  .use(express.static(`../frontend/public`))
  .get('/', (req, res) => {
    res.render('pages/index/index.html', {
      title: 'main page',
      msg: 'message from server'
    });
  });

http.createServer(handler)
  .listen(3000, () => console.log('run!'));