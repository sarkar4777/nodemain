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
};
