const express = require('express');

const path = require('path');

const port = 9223;

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

var ExpenesList = [
    {
        name : "Lunch",
        amount : "75"
    },
    {
        name : "Grocerry",
        amount : "150"
    },
    {
        name : "Dinner",
        amount : "90"
    },
]

app.get('/',function(req,res){
    return res.render('Expenses',
    {
        title : 'My Expense Tracker',
        expense_list : ExpenesList
    });
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server ${err}`);
        return;
    }
    console.log(`Your Server is Up and Running on the Port ${port}`);

});