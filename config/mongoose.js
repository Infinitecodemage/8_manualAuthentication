const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/codeial_development');

// deprecated options in the MongoDB driver
mongoose.connect('mongodb://localhost/db_name', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;