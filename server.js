var express = require('express');
var path = require('path');
var server = express();

// const PORT = 3000;
var portNumber = server.listen(process.env.PORT);

server.use(express.static(path.join(__dirname, './')));

server.get('/', function(request, response) {
  response.render('index');
});

// server.listen(PORT, function() {
//   console.log(`Example app listening on port ${PORT}`);
// });

server.listen(portNumber);
