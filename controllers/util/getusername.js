
module.exports = function(app){
	app.post('/getusername', function(req, res){
		req.session.UserName = req.body.UserName;
		res.json({UserName: req.body.UserName});
	});
}