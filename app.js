var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});

// creates an applicant
app.post('/applicant', function(req, res){
	console.log(req.body)
	res.redirect('success')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/job-app')

var createApplication = mongoose.Schema({
		name 		: { type : String, required : true },
		bio  		: { type : String },
		skills 		: { type : Array, default : [] },
		experience 	: { type : Number },
		reason 		: { type : String }
	});

var newApp = new Application(createApplication);

newApp.save(function(err, doc) {
	if (err) {
		res.send("can't process request");
	}
	else{
		res.redirect('/');
	}
});
	// Here is where you need to get the data
	// from the post body and store it in the database
});

app.get('/success', function(req, res){
	res.render('success')
})

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
