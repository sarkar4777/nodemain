var pagination = require('pagination');
var htmlFactory = require('./dynamichtml');

module.exports = {
		paginate: function (curr, rowsperpage, totalresult, page) {
			var bootstrapPaginator = new pagination.TemplatePaginator({
			prelink:page, current: curr, rowsPerPage: rowsperpage,
			totalResult: totalresult, slashSeparator: true,
			template: function(result) {
				var i, len, prelink;
				var html = '<ul class="pagination">';
				if(result.pageCount < 2) {
					html += '</ul>';
					return html;
				}
				prelink = result.prelink + '?p=';
				if(result.previous) {
					html += '<li class="prev"><a href="' + prelink + result.previous + '">' + this.options.translator('PREVIOUS') + '</a></li>';
				}
				if(result.range.length) {
					for( i = 0, len = result.range.length; i < len; i++) {
						if(result.range[i] === result.current) {
							html += '<li class="active"><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
						} else {
							html += '<li><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
						}
					}
				}
				if(result.next) {
					html += '<li class="next"><a href="' + prelink + result.next + '" class="paginator-next">' + this.options.translator('NEXT') + '</a></li>';
				}
				html += '</ul>';
				return html;
			}
			
		});
		return bootstrapPaginator;
    },
    
    navigation: function(path, role){
		var str = '';
		switch(role) {
			case 'admin':
				str = htmlFactory.adminNavTemplate().replace('$' + path + '$', 'active');
				break;
			case 'advertiser':
				str = htmlFactory.advertiserNavTemplate().replace('$' + path + '$', 'active');
				break;
			case 'affiliate':
				str = htmlFactory.affiliateNavTemplate().replace('$' + path + '$', 'active');
				break;	
			default:
				str = htmlFactory.adminNavTemplate().replace('$' + path + '$', 'active');
		} 
		return str;
	}
};
