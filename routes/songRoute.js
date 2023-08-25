const { getAllSongs, createSong, updateSong, getSongById, deleteSong } = require("../controllers/songController");

const songRoute = require("express").Router();

songRoute.get("/songs", getAllSongs)
songRoute.post("/song", createSong)
songRoute.route("/song/:id")
        .get(getSongById)
        .put(updateSong)
        .delete(deleteSong)

module.exports = songRoute