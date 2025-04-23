const mongoose =require("mongoose")


const brandSchema = new mongoose.Schema({
    brandName: {
        type: String
    },
    brandImgUrl:{
        type:String
    },
    websiteUrl: {
        type: String
    },
   categoryId:{
    type:[mongoose.Schema.Types.ObjectId],
    ref: "Category"

   }
    
}, { timestamps: true });
module.exports= mongoose.model("Brand", brandSchema);