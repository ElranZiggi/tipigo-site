var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

const port = process.env.PORT || 3000;


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hello@tipigo.com',
    pass: 'sismatipigo1234'
  }
});


if (port == 3000){
  app.use(express.static('../views'));
} else {
  app.use(express.static('views'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/',(req,res) =>{
	res.render('index.html');
});

app.post('/submit',function(req,res){

  console.log(req.body);

  var user = {
    name: req.body.name ,
    email: req.body.email ,
    phone: req.body.phone ,
    company: req.body.company ,
    text: req.body.message ,
  }

  var mailOptions = {
    from: 'hello@tipigo.com',
    to: 'elran@tipigo.com, nechemia@tipigo.com, support@tipigo.com',
    subject: 'New contact us from Tipigo.com',
    text: 'name :' + req.body.name + ' ,email: ' + req.body.email + ' ,phone: ' + req.body.phone + ' ,company: ' + req.body.company + ' ,message: ' + req.body.message, 
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // var name=req.body.name;
  // var email=req.body.email;
  // var phone=req.body.phone;
  // var company=req.body.company;
  // var message = req.body.message;

  console.log(user);
  res.status(200).json({status:"ok"})
});

app.listen(port, () => {
  console.log(`Started at port ${port}`);
});

module.exports = {app};