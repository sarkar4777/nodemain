var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    check: function() {
        models.User.find({}, function(err, users) {
            if (users.length === 0) {
				
                console.log('no users found, seeding...');
                var newUser = new models.User({
                    email: 'tathagata.s@tyroo.com',
                    fullname: 'Tathagata Sarkar',
                    phone: '9703219317',
                    password: md5('sarkar01'),
                    company: 'tyroo',
                    companytype: 'Firm',
                    userrole: 'admin',
                    site: 'www.tyroo.com',
                    category: 'Tickets',
                    country: 'IN',
                    address: 'SVG Media House',
                    superadmin: 'true'
                });
                newUser.save(function(err, user) {
					
                    console.log('successfully inserted admin: ' + user._id);
					var nUser = new models.User({
						email: 'sagu@tyroo.com',
						fullname: 'Saurabh Gupta',
						phone: '9703219317',
						password: md5('sarkar01'),
						company: 'tyroo',
						companytype: 'Firm',
						userrole: 'advertiser',
						site: 'www.tyroo.com',
						category: 'Tickets',
						country: 'IN',
						address: 'SVG Media House',
						accountmanager: user._id
					});
					nUser.save(function(err, user) {
						console.log('successfully inserted advertiser: ' + user._id);
					});
					
					nUser = new models.User({
						email: 'anil.g@tyroo.com',
						fullname: 'Anil Gupta',
						phone: '9703219317',
						password: md5('sarkar01'),
						company: 'tyroo',
						companytype: 'Firm',
						userrole: 'affiliate',
						site: 'www.tyroo.com',
						category: 'Tickets',
						country: 'IN',
						address: 'SVG Media House',
						accountmanager: user._id
					});
					nUser.save(function(err, user) {
						console.log('successfully inserted publisher: ' + user._id);
					});	
                });

                
            } else {
                console.log('found ' + users.length + ' existing users!');
            }
        });
    }
};
