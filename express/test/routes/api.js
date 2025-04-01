var express = require('express');
var router = express.Router();

const WorkStation = require("../models/workStationModel");
const YrReport =require("../models/yrReportModel");
const Client = require("../models/clientModel");
const Transaction=require("../models/transactionModel")

router.get('/workstation', (req, res) => {
    WorkStation.find()
        .then(data => {
            const serializedData = data.map(work => ({
                SlNo:work.SlNo,
                Edit: work.Edit,
                workstationName: work.workstationName,
                IpAddress: work.IpAddress,
                Status: work.Status
                
            }));
            res.status(200).json({ data: serializedData });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
  });






  router.get('/yrreport', (req, res) => {
    YrReport.find()
        .then(data => {
            const serializedData = data.map(yr => ({
                SlNo:yr.SlNo,
                referralName: yr.referralName,
                jan: yr.jan,
                feb: yr.feb,
                mar: yr.mar,
                apr: yr.apr,
                may: yr.may,
                jun: yr.jun,
                jul: yr.jul,
                aug: yr.aug,
                sep: yr.sep,
                oct: yr.oct,
                nov: yr.nov,
                dec: yr.dec,
                total: yr.total,
                
            }));
            res.status(200).json({ data: serializedData });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
  });


  router.get('/client', (req, res) => {
    Client.find()
        .then(data => {
            const serializedData = data.map(client => ({
                SlNo:client.SlNo,
                ClientName:client.clientName,
                ClientCode:client.ClientCode,
                AdvancePaymentDate:client.AdvancePaymentDate,
                CollectedDate:client.CollectedDate,
                ReceiptNo:client.ReceiptNo,
                PaymentMode:client.PaymentMode,
              
                
            }));
            res.status(200).json({ data: serializedData });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
  });


  router.get('/transaction', (req, res) => {
    Transaction.find()
        .then(data => {
            const serializedData = data.map(tran => ({
                SlNo:tran.SlNo,
                CustomerListName:tran.CustomerListName,
                EncounterDTTM:tran.EncounterDTTM,
                BillAmount:tran.BillAmount,
              
            }));
            res.status(200).json({ data: serializedData });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
  });









  module.exports = router;