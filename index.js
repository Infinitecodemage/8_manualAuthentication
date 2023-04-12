const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

// express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//for post  middleware parses this data 
//and makes it available in the req.body object,
// app.use(express.urlencoded());

// Parse URL-encoded data with extended option
app.use(express.urlencoded({ extended: true }));


// use cookie-parser middle ware
app.use(cookieParser());

app.use(express.static('./assets'));

// using express.ejs.layouts express framework.
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
