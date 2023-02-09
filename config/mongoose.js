const mongoose = require('mongoose');

mongoose.set("strictQuery",false);

mongoose.connect('mongodb://localhost/expense_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to Database'));

db.once('open',function(){
    console.log('Successfully Connected to the Database');
});