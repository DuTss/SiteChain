const express = require('express');
const app = express()
const mysql = require('mysql');
const util = require('util');
const path = require('path');
const port = 4400
const methodOverride = require('method-override');

// .env
require('dotenv').config()

// Middleware - Parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// MYSQL
const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
database.connect((err) => {
    if(err) { throw err;}
    console.log('Connecté au serveur MySQL , tes un bon !');
});

// METHODE OVERRIDE
app.use(methodOverride('_method'))

// DECLARE LA VARIABLE GLOBALE QUERY SQL
global.querysql = util.promisify(database.query).bind(database)

// ROUTER 
const indexRoute = require('./routes/indexRoute');
const sourcesRoute = require('./routes/sourcesRoute');
const adminRoute = require('./routes/adminRoute');

// URL 
app.use('/', indexRoute);
app.use('/sources', sourcesRoute);
app.use('/admin', adminRoute);

// 404
app.get('*', function(req,res,next) {
    res.status(404);
    res.render('404.ejs');
});

// LISTEN
app.listen(port, () => {
    console.log(`Tourne sur le port : ${port}`);
});