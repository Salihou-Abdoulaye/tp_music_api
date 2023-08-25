const Playlist = require("../models/playlistModel");

const getAllplaylistst = async (req, res) => {
    try {
      const playlists = await Playlist.find({ user: req.user.id })
        .populate("user")
        .exec();

      if (!playlists) {
        return res.status(404).json({ msg: "Aucune playlist trouvée pour cet utilisateur." });
      }

      res.json(playlists);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Nous avons rencontré une erreur lors de la recherche des playlists." , error });
    }
};

const createplaylist = async (req, res) => {
    try {
      const newPlaylist = await new Playlist(req.body);
      newPlaylist.user = req.user.id;
      newPlaylist.save();
      res.json(newPlaylist);
    } catch (error) {
      res.status(500).json({ msg: "Nous avons rencontrer une erreur", error });
    }
};

const getplaylistById = async (req, res) => {
    const id = req.params.id;
    try {
      const playlist = await Playlist.findOne({ _id: id, user: req.user.id });
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
    }
};

const updateplaylist = async (req, res, next) => {
    const id = req.params.id;
    try {
      let playlist = await Playlist.findOneAndUpdate({ _id: id }, req.body);
      if (!playlist || playlist.user != req.user.id) {
        const error = new Error("Wrong request");
        throw error;
      }
      res.json({message: "votre playlist a bien été modifié"});
    } catch (error) {
      next(error);
    }
};

const deleteplaylist = async (req, res, next) => {
    const id = req.params.id;
    try {
      const playlist = await Playlist.findOneAndRemove({ _id: id });
      if (!playlist || playlist.user != req.user.id) {
        const error = new Error("Wrong request");
        throw error;
      }
      res.json({ msg: "Le playlist a bien été supprimé !" });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {getAllplaylistst, createplaylist, getplaylistById, updateplaylist, deleteplaylist}