const { mongoose, Schema } = require("mongoose");

const songSchema = new Schema({
    title: {type: String},
    url: {type: String},
    rating: {type: Number},
    artiste: {type: Object},
})

const Song = mongoose.model("Song", songSchema);
module.exports = Song;