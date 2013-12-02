var express = require('express')
  , http = require('http')
  , dust = require('dustjs-linkedin')
  , cons = require('consolidate') 
  ,path = require('path')
  ,util = require('util');

var app = express();

app.configure(function(){
	app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
	app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'dust');
	app.engine('dust', cons.dust);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	//app.use(express.cookieSession());
	app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 9000000 }}));

	app.use(app.router);
	app.use(require('less-middleware')({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
	});

	app.configure('development', function(){
	app.use(express.errorHandler());
});


app.listen(app.get('port'), app.get('ipaddress'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


require('./controllers')(app);

/*

app.get('/', function(req, res){
	res.render('index', {"name": "UD"});
});


*/