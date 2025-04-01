const mongoose = require('mongoose');



const workStationSchema = new mongoose.Schema({
    SlNo: {
        type: String,
      
        maxlength: [500, 'Name cannot exceed 500 characters']
    },
    Edit: {
        type: String,
      
    },
    workstationName: {
        type: String
      
    },
    IpAddress: {
        type: String
        
    },
    Status: {
        type: String
    }
});


const WorkStation = mongoose.model('WorkStation', workStationSchema);

module.exports = WorkStation;