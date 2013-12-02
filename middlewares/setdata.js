var destinations = require('../model/destinations.json');
module.exports = function(req, res, next){

					req.data = req.data || {};
					req.data = {
						"name": "UD",
						"destinations" : destinations
					};
					next();
				};