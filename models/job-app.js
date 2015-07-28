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

var applicant = mongoose.model('job-app', createApplication)