var express = require('express');
var bodyParser = require('body-parser');
var appController = require('./controllers/jobapp.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/8441')

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', appController.getApps)
// app.get('/applicants', function(req, res){
// 	res.render('applicants')
// });

// creates an applicant
app.post('/success', appController.createApp);

	

	// Here is where you need to get the data
	// from the post body and store it in the database

// app.get('/success', function(req, res){
// 	res.render('success')
// })

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
