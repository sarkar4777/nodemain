var mongoose = require('mongoose'),
    md5 = require('MD5'),
    models = require('../app/models');    
var common = require('../app/common');    

module.exports = {
    index: function (req, res) {
		var query = models.User.find({}).limit(10);
		query.exec(function (err, docs) {
			if (err) {
				throw Error;
			}
			res.render('home', {users: docs});
		});
    },
    
    users : function (req, res) {
		nav = common.navigation('users', 'admin');
		topStatus = common.topStatus(req.session.user);
		res.render('userlist', {navigation : nav, topstatus : topStatus});
	},
	
	useredit : function (req, res) {
		nav = common.navigation('users', 'admin');
		topStatus = common.topStatus(req.session.user);
		if(req.query.id != null){
		    models.User.findOne({ _id: req.query.id }, function (err, user) {
				if (err) {
					res.render('500', {});
				}
				if (user == null) {
					res.render('users', {navigation : nav, topstatus : topStatus});
				} else {
					res.render('useredit', {navigation : nav , data : user, topstatus : topStatus});
				}
			});
		}else{
		    res.render('users', {navigation : nav, topstatus : topStatus});    
		}
	},
	
	usersave : function (req, res) {
		nav = common.navigation('users', 'admin');
		topStatus = common.topStatus(req.session.user);
		
		if(req.body.password.trim() != ''){
		    models.User.findOne({ $and:[{ _id: req.query.id, password: req.body.password }]}, function (err, user) {
				if (err) {
					res.render('500', {});
				}
				if (user == null) {
				    models.User.findOne({ _id: req.query.id }, function (err, user) {
        				if (err) {
        					res.render('500', {});
        				}
        				if (user == null) {
        					res.render('users', { navigation : nav, topstatus : topStatus });
        				} else {
        					res.render('useredit', {navigation : nav, data : user, error : 'Password mismatch !', topstatus : topStatus});
        				}
        			});
				} else {
				    user.email = req.body.email;
					user.fullname = req.body.name;
					user.phone = req.body.phone;
					user.password =  md5(req.body.password2);
					user.company = req.body.company;
					user.companytype = req.body.companytype;
					user.userrole = req.body.userrole;
					user.site = req.body.site;
					user.category = req.body.category;
					user.country = req.body.country;
					user.address = req.body.address;
					user.save( function( err, saveduser) {
					    if(err){
					        res.render('500', {});
					    } else {
					        res.render('useredit', {navigation : nav, data : saveduser, message : 'User Updated.', topstatus : topStatus});
					    }
					});
				}
			});
		} else {
		    
		    models.User.findOne({ _id: req.query.id }, function (err, user) {
        		if (err) {
        			res.render('500', {});
        		}
        		if (user == null) {
        			res.render('users', {navigation : nav, topstatus : topStatus});
        		} else {
        		    user.email = req.body.email;
        			user.fullname = req.body.name;
        			user.phone = req.body.phone;
        			user.password =  md5(req.body.password2);
        			user.company = req.body.company;
        			user.companytype = req.body.companytype;
        			user.userrole = req.body.userrole;
        			user.site = req.body.site;
        			user.category = req.body.category;
        			user.country = req.body.country;
        			user.address = req.body.address;
        			user.save( function( err, saveduser) {
        			    if(err){
        				    res.render('500', {});
        				} else {
        				    res.render('useredit', {navigation : nav, data : saveduser, message : 'User Updated.', topstatus : topStatus});
        				}
        			});
        		}
        	});
		}
	}
};
