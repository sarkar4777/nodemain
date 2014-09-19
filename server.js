var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express3-handlebars');
var sessionStore = require('connect-mongo')(express);

var mongoose = require('mongoose'),
    routes = require('./app/routes'),
    models = require('./app/models'),
    seeder = require('./app/seeder');
    
mongoose.connect('mongodb://localhost/adserv');
mongoose.connection.on('open', function(error) {
	if (error) {
        console.log(error);
    }else{
		console.log("Connected to Mongoose...");
		seeder.check();
	}
});

var app = express();
app.use(express.cookieParser());
app.use(express.session({
  store: new sessionStore({
    url: 'mongodb://localhost/adserv'
  }),
  maxAge  : new Date(Date.now() + 86400000),
  expires : new Date(Date.now() + 86400000),
  secret: '124777511TYROO'
}));   

app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );     
app.use( bodyParser.urlencoded() );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes.initialize(app);

app.listen(process.env.PORT);
