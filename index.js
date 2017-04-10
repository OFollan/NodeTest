var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views/pages'))


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/pong', function(request, response) {
  response.render('pages/pong');
});
app.get('/a_fucking_life', function(request, response) {
  response.render('pages/lol');
});

app.get('/CV', function(request, response) {
  response.render('pages/CV');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


