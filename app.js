var express = require('express')
var cool = require('cool-ascii-faces')
var app = express();

var api = '77ts672cxn6wfk';
var secret = 'GKy8lzvzAUi7secM';
var callback = 'https://allison.herokuapp.com';

var Linkedin = require('node-linkedin')(api, secret, callback);

var linkedin = Linkedin.init('my_access_token');

app.get('/oauth/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.auth.authorize(res, ['r_fullprofile']);
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	var result = linkedin.people.me(function(err, $in) {
    // Loads the profile of access token owner.
});
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
