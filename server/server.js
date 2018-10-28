var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

if (port == 3000){
  app.use(express.static('../views'));
} else {
  app.use(express.static('views'));
}

app.get('/',(req,res) =>{
	res.render('index.html');
});

app.listen(port, () => {
  console.log(`Started at port ${port}`);
});

module.exports = {app};