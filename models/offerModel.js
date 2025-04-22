const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        
    },
    
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    imageUrl: {
        type: [String],
        required: true
    },
   
    actualPrice: {
        type: Number
    },
    discountPercentage: {
        type: Number
    },
    hasWebsite: {
        type: Boolean,
        default: false
    },
    isPhysical: {
        type: Boolean,
        default: false
    },
    promoCode: {
        type: String
    },
    brandId: {
        type: String
    },
    discountedPrice:{
        type: Number
    },
    link: {
        type: [String]
    },

}, { timestamps: true });

module.exports = mongoose.model("Offer", dealSchema);
