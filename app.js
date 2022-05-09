const express = require('express');
const expressLayouts=require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require("body-parser");
const ejs = require("ejs");


var _ = require('lodash');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const app = express();
const moment = require('moment')
app.locals.moment = moment;
const port = process.env.PORT || 3000;

require('dotenv').config();

 // ---------------   middleware   ---------------------------

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('RajyaLoktantraSecure'));
app.use(session({
    secret: 'RajyaLoktantraSecretSession',
    saveUninitialized: true,
    resave: true
}));


app.use(flash());
app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: true}));
app.set('layout', './layouts/main');    
app.set('view engine', 'ejs');



const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '4u_qZIiQVy42iQcnCdMG7E3FK_jrO99LbqEk6KlXnOnxM980GFVESet6tVlZarPM',
  baseURL: 'http://localhost:3000',
  clientID: 'xUgZpdqKlhlQAu4hujZiWiT5IisM62qW',
  issuerBaseURL: 'https://dev--waikdxe.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router


// requiresAuth checks authentication.













//----------------- ROUTES --------------------------------------

const routes = require('./server/routes/newsRoutes.js');
app.use('/', routes);


app.listen(port, ()=> console.log(`Listening to dat port ${port}`));












const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sicksparky:Sicksparky*1@cluster0.ehwog.mongodb.net/RajyaLoktantra?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
