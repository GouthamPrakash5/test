const mongoose = require('mongoose');



const yrReportSchema = new mongoose.Schema({
    SlNo: {
        type: Number,
       
    },
    referralName: {
        type: String
    },
    jan: {
        type: String
    },
    feb: {
        type: String
    },
    mar: {
        type: String
    },
    apr: {
        type: String
    },
    may: {
        type: String
    },
    jun: {
        type: String
    },
    jul: {
        type: String
    },
    aug: {
        type: String
    },
    sep: {
        type: String
    },
    oct: {
        type: String
    },
    nov: {
        type: String
    },
    dec: {
        type: String
    },
    total: {
        type: String
    },
});


const YrReport = mongoose.model('YrReport', yrReportSchema);

module.exports = YrReport;