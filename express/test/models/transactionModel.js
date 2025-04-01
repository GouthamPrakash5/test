const mongoose = require('mongoose');



const transactionSchema = new mongoose.Schema({
    SlNo: {
        type: String,
      
        maxlength: [500, 'Name cannot exceed 500 characters']
    },
    CustomerListName: {
        type: String,
      
    },
    EncounterDTTM: {
        type: String
      
    },
    BillAmount: {
        type: Number
        
    }
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;