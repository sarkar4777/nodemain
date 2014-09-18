var mongoose = require('mongoose'),
    models = require('../app/models');   
var common = require('../app/common');
    
module.exports = {
    index: function (req, res) {
		models.User.paginate({}, req.query.p, 1, function(error, pageCount, paginatedResults, itemCount) {
			  if (error) {
					console.error(error);
			  } else {
					console.log(paginatedResults);
					res.render('testpager', {paging: common.paginate(req.query.p,1,itemCount, 'test').render()});
			  }
		});
    },
    table : function (req, res) {
		nav = common.navigation('dboard', 'admin');
		res.render('userlist', {navigation : nav});
	}
};

