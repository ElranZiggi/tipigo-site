const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const compression = require('compression');
const path = require('path');
const request = require('request');
const app = express();
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

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
	res.render('index.html');
});


app.get('/opportunity',(req,res) => {
  // 5c19568115b95664728b4575
  console.log("farams:  " + req.query.id);
  getAlertbyId(req.query.id).then(alert => {
    if (alert.error_code) {
      // res.render(`<h1>Not Found</h1>`)
      res.redirect('/')
    } else {
      // {"symbol":"gpn","upside":"9.22","analyst":"Nomura","success_percentage":96,"success_month_back":6,"sector":"Financials","bullbear":"bearish"}
      alert.symbol = alert.symbol.toUpperCase();
      alert['month'] = alert.success_month_back > 1 ? "months" : "month"
      alert['bullbear_text'] = alert.bullbear.replace("b", "B")
      alert['id'] = req.query.id
      res.render(path.join(__dirname, '../views/opportunity.html'), alert);
    }
  })
  // res.render(path.join(__dirname, '../views/opportunity.html'),{omg: 'ooo my fucking god'});
});

const getAlertbyId = (id) => {
  return new Promise(resolve => {
    request({
      url: 'https://app.tipigo.com/finance/get_alert_for_tizer',
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      json: {id: id}
      //  body: JSON.stringify(requestData)
    }, (error, resp, body) => {
      console.log(JSON.stringify(body));
      resolve(body)
    })
  })
} 

app.post('/submit',function(req,res) {
  verifyRecaptcha(req.body.g_recaptcha_response).then(captcha_res => {
    if (captcha_res.success) {
      var user = {
        name: req.body.name ,
        email: req.body.email ,
        phone: req.body.phone ,
        company: req.body.company ,
        text: req.body.message ,
        g_recaptcha_response: req.body.g_recaptcha_response,
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

      // app.post('https://www.google.com/recaptcha/api/siteverify?secret=6LftaYIUAAAAALC91xtYZuSuyDLMTN9jRdt8m1CD&response=' + user.g_recaptcha_response + '&remoteip=' + req.connection.remoteAddress, function(request,response){
      //   console.log("secret: " + request.secret);
      //   console.log("response: " + request.response);
      //   console.log("remoteip: " + request.remoteip);
      // });

      res.status(200).json({status:"ok"})
    } else {
      res.status(401).json({status:"01101110 01101111 00100000 01110111 01100001 01111001"})
    }
  })
});

const verifyRecaptcha = token => new Promise(resolve => {
  console.log(`\n${token}\n`)
  request({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `secret=6Ld-Zp0UAAAAAMH-oQm4qPnDv5k8oGLotE3EbMJg&response=${token}`
  }, (error, resp, body) => {
    resolve(body)
  })
})

app.listen(port, () => {
  console.log(`Started at port ${port}`);
});

module.exports = {app};