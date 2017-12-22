const express = require('express') ,
      cookieParser = require('cookie-parser') ,
      bodyParser = require('body-parser') ,
      app = express();

const PORT = process.env.PORT || 5000

app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.urlencoded({
extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/webpage'));


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))