var mongoose = require("mongoose");

var RecruitSchema = new mongoose.Schema({
    name : {
        type: String
    },
    message : {
        type: String
    },
    phone : {
        type: Number
    },
    gender : {
        type: String
    },
    roll : {
        type : Number
    },
    branch : {
        type : String
    },
    CG : {
        type: Number
    },
    place : {
        type: String
    },
    food : {
        type: String
    },
    timeDevote : {
        type : String
    },
    otherSocities : {
        type : String
    },
    Hobbies : {
        type : String
    },
    Date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Recruit",RecruitSchema);
