const { getAllplaylistst, createplaylist, getplaylistById, updateplaylist, deleteplaylist } = require("../controllers/playlistController");

const playlistRoute = require("express").Router();

playlistRoute.get("/playlists", getAllplaylistst)
playlistRoute.post("/playlist", createplaylist)
playlistRoute.route("/playlist/:id")
        .get(getplaylistById)
        .put(updateplaylist)
        .delete(deleteplaylist)

module.exports = playlistRoute