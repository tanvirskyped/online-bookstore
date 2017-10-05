var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

// to access from all file
var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get Genres
module.exports.getGenres = function(callback, limit) {
	Genre.find(callback).limit(limit);
}

// get Single genre Find By ID
module.exports.getGenreById = function(id, callback) {
	Genre.findById(id, callback);
}

//add New Genre
module.exports.addGenre = function(genre, callback) {
	Genre.create(genre, callback);
}
//update genre by id
module.exports.updateGenre = function(id, genre, options, callback) {
	var query = {_id: id};
	var update = {
		name: genre.name
	};
	Genre.findOneAndUpdate(query, update, options, callback);
}

//delete Genre
module.exports.deleteGenre = function(id, callback) {
	var query = {_id: id};
	Genre.remove(query, callback);
}