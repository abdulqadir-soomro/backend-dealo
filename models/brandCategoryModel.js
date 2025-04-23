const mongoose =require("mongoose")


const brandCategorySchema = new mongoose.Schema({
    
    brandId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand" 
    },
   categoryId:{
    type:[mongoose.Schema.Types.ObjectId],
    ref: "Category"

   }
    
}, { timestamps: true });
module.exports= mongoose.model("BrandCategory", brandCategorySchema);