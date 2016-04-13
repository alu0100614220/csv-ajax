var express = require('express');
var cool = require('cool-ascii-faces');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/tests'));
app.use(express.static(__dirname + '/public/views'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});
app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});