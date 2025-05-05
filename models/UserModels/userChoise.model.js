const mongoose= require("mongoose");

const userChoiceSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("UserChoice", userChoiceSchema);