const express = require('express');

const path = require('path');

const db = require('./config/mongoose');

const Expense = require('./model/Expense');

const port = 9223;

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

var ExpenesList = [
    {
        name1: "Lunch",
        amount: "75"
    },
    {
        name1: "Grocerry",
        amount: "150"
    },
    {
        name1: "Dinner",
        amount: "90"
    },
]

app.get('/', function (req, res) {

    Expense.find({}, function (err, expenses) {
        if (err) {
            console.log(`Error ${err}`);
            return;
        }
        return res.render('Expenses',
            {
                title: 'My Expense Tracker',
                expense_list: expenses
            });
    });
});

app.post('/create_expense',function(req,res){
    Expense.create({
        name1: req.body.name1,
        amount: req.body.amount
    },function(err,newExpense){
        if(err){
            console.log('Error in adding the new Expense');
            return;
        }
        console.log(newExpense);
        res.redirect('back');
    })
})

app.get('/delete-expense',function(req,res){
    let id = req.query.id;

    Expense.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`Error in Finding the Document from the Database`);
            return;
        }
        return res.redirect('back');
    })
})

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the Server ${err}`);
        return;
    }
    console.log(`Your Server is Up and Running on the Port ${port}`);

});