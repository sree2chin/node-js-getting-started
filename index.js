var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/simulations', function(request, response) {
  response.render('pages/simulations');
});

app.get('/writes/unexpected-journey', function(request, response) {
  response.render('pages/unexpected_journey');
});

app.get('/writes/ayn-rand-atlas-shrugged-review', function(request, response) {
  response.render('pages/ayn_rand_atlas_shrugged');
});

app.get('/writes/psyche', function(request, response) {
  response.render('pages/psyche');
});

app.get('/arts', function(request, response) {
  response.render('pages/index');
});

app.get('/writes', function(request, response) {
  response.render('pages/index');
});
app.get('/whoami', function(request, response) {
  response.render('pages/index');
});

app.get('/travel', function(request, response) {
  response.render('pages/index');
});


// app.get('/tosolve', function(request, response) {
//   response.render('pages/index');
// });
app.get('/portfolio', function(request, response) {
  response.render('pages/index');
});
app.get('/resume', function(request, response) {
  response.render('pages/index');
});

app.get('/srikanth_resume', function(req, res) {
  res.sendFile(__dirname + "/public/pdf/srikanth_resume.pdf");
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


