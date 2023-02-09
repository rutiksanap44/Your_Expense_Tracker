const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name1:{
        type : String,
        require : true
    },
    amount:{
        type : String,
        require : true
    }
});

const Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense;