var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema({
    Payas : {
        type: String
    },
    Sushant : {
        type: String
    },
    Saksham : {
        type: String
    },
    Date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Team",TeamSchema);

