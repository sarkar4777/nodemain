var mongoose = require('mongoose'),
    models = require('../app/models');    

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
    getByEmail: function(req, res) {
		if (req.params.email) {
			models.User.findOne({ email: req.params.email }, function (err, docs) {
				if (err) {
					throw Error;
				}
				res.render('user', docs);
			});
		}
    }
    /*add: function(req, res) {
        var newContact = new models.Contact(req.body);
        newContact.gravatar = md5(newContact.email);
        newContact.save(function(err, contact) {
            if (err) {
                res.json({error: 'Error adding contact.'});
            } else {
                res.json(contact);
            }
        });
    },*/
    // update: function(req, res) {
    //     console.log(req.body);
    //     models.Contact.update({ _id: req.body.id }, req.body, function(err, updated) {
    //         if (err) {
    //             res.json({error: 'Contact not found.'});
    //         } else {
    //             res.json(updated);
    //         }
    //     })
    // },
    /*delete: function(req, res) {
        models.Contact.findOne({ _id: req.params.id }, function(err, contact) {
            if (err) {
                res.json({error: 'Contact not found.'});
            } else {
                contact.remove(function(err, contact){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }*/
};
