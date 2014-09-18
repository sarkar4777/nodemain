var mongoose = require('mongoose'),
    models = require('../app/models'),
    md5 = require('MD5'),
    common = require('../app/common');   

exports.getUserDataTable = function getData (req, res) {
	  var pgCount = 1;
	  if(req.query.per_page != null){
		  pgCount = req.query.per_page
	  }

	  var sort = '{fullname : 1}';
	  if(req.query.order != null){
		  sort = req.query.order;
	  }

	  if(req.query.queries == null) {
		  models.User.paginate({}, req.query.page, pgCount, function(error, pageCount, paginatedResults, itemCount) {
				  if (error) {
						console.error(error);
				  } else {
						console.log('{"records":'  + JSON.stringify(paginatedResults) + ',"queryRecordCount": ' + paginatedResults.length + ',"totalRecordCount": ' + itemCount + '}');
						res.send('{"records":'  + JSON.stringify(paginatedResults) + ',"queryRecordCount": ' + paginatedResults.length + ',"totalRecordCount": ' + itemCount + '}');
				  }
		  }, { columns: 'fullname company userrole country', sortBy : sort} );
	  } else {
		  models.User.paginate({$or:[ {'fullname':req.query.queries.search}, {'country':req.query.queries.search}, {'company':req.query.queries.search} ]}, req.query.page, pgCount, function(error, pageCount, paginatedResults, itemCount) {
				  if (error) {
						console.error(error);
				  } else {
						console.log('{"records":'  + JSON.stringify(paginatedResults) + ',"queryRecordCount": ' + paginatedResults.length + ',"totalRecordCount": ' + itemCount + '}');
						res.send('{"records":'  + JSON.stringify(paginatedResults) + ',"queryRecordCount": ' + paginatedResults.length + ',"totalRecordCount": ' + itemCount + '}');
				  }
		  }, { columns: 'fullname company userrole country', sortBy : sort} );
	  }
};
