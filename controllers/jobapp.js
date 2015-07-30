var applicant = require('../models/applications.js');

var appController = {

	getApps : function(req, res){
		applicant.find({}, function(err, app){
			if (err) {
				res.send({err : err});
			}
			else {
				res.send({data: app});
			}
		})
	},

	createApp : function(req, res){



		if (err) {
			res.send({err : "can't process request"});
		}
		else{
			console.log('Req Body : ', req.body);
			var newApp = new applicant(req.body);

			newApp.save(function(err, doc){
				res.send({data: doc});
			})
		}
		
	}

}

module.exports = appController;