
var setUpdata = require('../middlewares/setdata');
var fetchContent = require('../middlewares/fetchContent');


module.exports = function (app){
	app.get('/', setUpdata, fetchContent, function(req, res){
		res.render('index', {"data": req.data, "content": req.content});
	});
};