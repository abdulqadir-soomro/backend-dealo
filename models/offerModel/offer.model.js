const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
   

     brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true

    },
     categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
        
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
    discountedPrice:{
        type: Number
    },
    link: {
        type: [String]
    },
    tags:{
        type: [String]
        
    },
    variants: [
        {
          label: { type: String },  // e.g., "Size", "Color"
          value: [{  type: String}], // e.g., ["40", "42"], ["XL", "XXL"], ["Red", "Blue"]
        },
        
      ]

}, { timestamps: true });

module.exports = mongoose.model("Offer", dealSchema);
