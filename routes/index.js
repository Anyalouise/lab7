var projects = require('../projects.json');

/*
 * GET home page.
 */
data = true
exports.view = function(request, response){
	projects["viewAlt"] = false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
  	response.render('index', projects);
};