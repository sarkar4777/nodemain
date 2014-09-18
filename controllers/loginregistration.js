var mongoose = require('mongoose'),
    models = require('../app/models'),
    md5 = require('MD5'),
    common = require('../app/common');    

module.exports = {
    index: function (req, res) {
		res.render('login', '');
    },
    register: function (req, res) {
		res.render('register', '');
    },
    login: function(req, res) {
		if (req.body.email && req.body.password) {
			models.User.findOne({ email: req.body.email, password: md5(req.body.password) }, function (err, docs) {
				if (err) {
					res.render('login', { error :'DB Error'});
				}
				if (docs == null) {
					res.render('login', { error :'Invalid User'});
				} else {
					nav = common.navigation('dboard', 'admin');
					console.log(nav);
					res.render('dashboard', {navigation : nav});
				}
			});
		}
    },
    registration: function(req, res) {
		if (req.body.email && req.body.password) {
			models.User.findOne({ email: req.body.email, password: md5(req.body.password) }, function (err, docs) {
				if (err) {
					res.render('register', { error :'Missing Info or DB Error'});
				} else {
					if(docs == null){
						var adminid = '';
						models.User.findOne({ superadmin: 'true' }, function (err, adminuser) {
							if (err) {
								res.render('register', { error :'Missing Info or DB Error'});
							} else {
								adminid = adminuser._id;
							}
						});
						newUser = new models.User({
							email: req.body.email,
							fullname: req.body.name,
							phone: req.body.phone,
							password: md5(req.body.password),
							company: req.body.company,
							userrole: req.body.type,
							site: req.body.site,
							category: req.body.category,
							country: req.body.country,
							address: req.body.address,
							accountmanager: adminid
						});
						newUser.save(function(err, user) {
							console.log('successfully inserted ' + req.body.type + ': ' + user._id);
							res.render('login', '');
						});
					} else {
						res.render('register', { error :'User Exists!'});
					}
				}
			});
		}
    }
};
