var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var exphbs = require('express3-handlebars');
var sessionStore = require('connect-mongo')(express);
var localStrategy = require('passport-local').Strategy;
var md5 = require('MD5');

var config = require('./config.js');

var mongoose = require('mongoose'),
    routes = require('./app/routes'),
    models = require('./app/models'),
    seeder = require('./app/seeder');
    
mongoose.connect(config.db);
mongoose.connection.on('open', function(error) {
	if (error) {
    console.log(error);
  }else{
		console.log("Connected to TokuMX...");
		seeder.check();
	}
});

var app = express();

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    console.log(email);
    console.log(md5(password));
    models.User.findOne({ $and: [{email: email, password: md5(password)}] }, function (err, user) {
				if (err) {
				  console.log(err);
					return done(err);
				}
				if (user == null) {
					return done(null, false, {message: "User does not exist"});
				} else {
					return done(null, user);
				}
		});
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(express.cookieParser());

app.use(express.session({
  store: new sessionStore({
    url: config.db
  }),
  maxAge  : new Date(Date.now() + 86400000),
  expires : new Date(Date.now() + 86400000),
  secret  : config.sessionsecret
}));   

// passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});

app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );     
app.use( bodyParser.urlencoded() );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes.initialize(app);

app.listen(process.env.PORT);
