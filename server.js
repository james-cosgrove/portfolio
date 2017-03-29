var express = require('express');
var path = require('path');
var server = express();

// const PORT = 3000;
var portNumber = process.env.PORT || 3000;

server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(request, response) {
  response.render('index');
});

server.listen(portNumber, function() {
  console.log(`App listening on port ${portNumber}`);
});
