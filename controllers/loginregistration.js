var mongoose = require('mongoose'),
    models = require('../app/models'),
    md5 = require('MD5'),
    common = require('../app/common');  
    
var express = require('express');
var router = express.Router();    
var passport = require('passport');  

module.exports = {
    index: function (req, res) {
		if(req.user){
		    res.redirect('/users');
        } else {
		    res.render('login', { message: req.session.messages });
		    req.session.messages = null;
        }
    },
    register: function (req, res) {
		res.render('register', '');
    },
    login: function(req, res, next) {
		if (req.body.email && req.body.password) {
			  passport.authenticate('local', function(err, user, info) {
			    if (err) {
			    	console.log(err);
			        return next(err);
			    }
			    
			    if (!user) {
			        req.session.messages = info.message;
			        return res.redirect('/');
			    }
			
			    req.logIn(user, function(err) {
			        if (err) {
			            req.session.messages = "Error";
			            return next(err);
			        }
			        req.session.user = user;
			        req.session.messages = "Login successfull";
			        return res.redirect('/users');
			    });
			    
			  })(req, res, next);
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
							companytype: req.body.companytype,
							userrole: req.body.userrole,
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
    },
    
    logout : function(req, res){
    	if(req.isAuthenticated()){
		    req.logout();
		    req.session.messages = "Logged out successfully";
		}
		res.redirect('/');
    }
};
