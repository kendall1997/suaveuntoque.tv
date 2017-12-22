var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');


var app = express();


app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());
app.use(express.static(__dirname + '/webpage'));


var port = Number(process.env.PORT || 9000);
app.listen(port);
console.log('Listening on port ' + port + '...');
