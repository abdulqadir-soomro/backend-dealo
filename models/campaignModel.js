const mongoose= require("mongoose")


const campaignSchema = new mongoose.Schema({
    offerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Offer",
        required:true
    },
    campaignStartDate:{
        type:Date
    },

    campaignEndDate:{
        type:Date
    },


 }, { timestamps: true });
module.exports= mongoose.model("Campaign", campaignSchema);