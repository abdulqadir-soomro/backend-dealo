const mongoose = require("mongoose");

const userBookmarkSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    offerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer",
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("UserBookmark", userBookmarkSchema);