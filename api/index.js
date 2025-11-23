var express = require('express');
var path = require('path');
var app = express();

// Use the parent directory for static files and views
var publicPath = path.join(__dirname, '..', 'public');
var viewsPath = path.join(__dirname, '..', 'views');

app.use(express.static(publicPath));

// views is directory for all template files
app.set('views', viewsPath);
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
  res.sendFile(path.join(__dirname, '..', 'public', 'pdf', 'srikanth_resume.pdf'));
});

// Export the Express app for Vercel
module.exports = app;

