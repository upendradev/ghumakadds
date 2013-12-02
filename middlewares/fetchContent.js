var content = require('../locales/en_US/home.json');

module.exports = function(req, res, next){
	req.content = content;
	next();
}