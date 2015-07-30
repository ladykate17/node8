var mongoose = require('mongoose')

var appSchema = mongoose.Schema({
		name 		: { type : String, required : true },
		bio  		: { type : String },
		skills 		: { type : Array, default : [] },
		experience 	: { type : Number },
		reason 		: { type : String }
	});

var newApp = mongoose.model('applications', appSchema);

module.exports = newApp

