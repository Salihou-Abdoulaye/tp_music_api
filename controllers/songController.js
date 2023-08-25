const Song = require("../models/songModel");

const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find()
        res.json(songs);
      } catch (error) {
        res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
      }
}

const createSong = async (req, res) => {
    try {
      const newSong = await new Song(req.body);
      newSong.save();
      res.json(newSong);
    } catch (error) {
      res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
    }
};

const getSongById = async (req, res) => {
    const id = req.params.id;
    try {
      const song = await Song.findOne({ _id: id});
      res.json(song);
    } catch (error) {
      res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
    }
};

const updateSong = async (req, res, next) => {
    const id = req.params.id;
    try {
      let song = await Song.findOneAndUpdate({ _id: id }, req.body);
      res.json(song);
    } catch (error) {
      next(error);
    }
};

const deleteSong = async (req, res, next) => {
    const id = req.params.id;
    try {
      const song = await Song.findOneAndRemove({ _id: id });
  
      res.json({ msg: "Le song a bien été supprimé !" });
    } catch (error) {
      next(error);
    }
  };

module.exports = {getAllSongs, createSong, getSongById, updateSong, deleteSong}