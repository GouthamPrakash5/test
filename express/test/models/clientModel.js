const mongoose = require('mongoose');




const clientSchema = new mongoose.Schema({
    SlNo: {
        type: Number,
    
    },
    ClientName: {
        type: String,
       
    },
    ClientCode: {
        type: String,
   },
    AdvancePaymentDate: {
        type: String,
   },
   CollectedDate: {
        type: String,
   },
   ReceiptNo: {
        type: Number,
   },
   PaymentMode: {
        type: String,
   },
});


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;