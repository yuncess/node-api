var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo1');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  alias: [String],
  publish: Date,
  create_date: { type: Date, default: Date.now },
  images: {
    coverSmall: String,
    coverBig: String,
  },
  source: [
    {
      source: String,
      link: String,
      swfLink: String,
      quality: String,
      version: String,
      lang: String,
      subtitle: String,
      create_date: { type: Date, default: Date.now },
    },
  ],
});
var Movie = mongoose.model('Moviee', MovieSchema);
var MovieDAO = function () {};

MovieDAO.prototype.save = function (obj, callback) {
  var instance = new Movie(obj);
  instance.save(function (err) {
    callback(err);
  });
};

MovieDAO.prototype.findByName = function (id, callback) {
  Movie.findOne({ _id: id }, function (err, obj) {
    callback(err, obj);
  });
};

module.exports = new MovieDAO();
