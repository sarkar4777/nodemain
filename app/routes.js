var user = require('../controllers/user');    
var logreg = require('../controllers/loginregistration');    
var test = require('../controllers/testpagination'); 
var ajax = require('../controllers/ajax'); 

module.exports.initialize = function(app) {
	app.get('/', logreg.index);
	app.get('/register', logreg.register);
	app.post('/login', logreg.login);
	app.post('/registeruser', logreg.registration);
	app.get('/test', test.index);
	app.get('/users', user.users);
	app.get('/useredit', user.useredit);
	app.post('/usersave', user.usersave);
	app.get('/get/user', ajax.getUserDataTable);
	
	app.get('/404', function(req, res, next){
		next();
	});
	app.get('/403', function(req, res, next){
		var err = new Error('Prohibited Material!!');
		err.status = 403;
		next(err);
	});
	app.get('/500', function(req, res, next){
		next(new Error('keyboard cat!'));
	});
	
	app.use(function(req, res, next){
		res.status(404);

		if (req.accepts('html')) {
			res.render('404', {});
			return;
		}

		if (req.accepts('json')) {
			res.send({ error: 'Not found' });
			return;
		}

		res.type('txt').send('Not found');
	});
	
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.render('500', {});
	});

};
