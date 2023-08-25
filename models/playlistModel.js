const {mongoose, Schema} = require("mongoose");

const playlistSchema = new Schema({
    name: {type: String},       
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
    user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;