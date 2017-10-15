var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname+ '/client'));
app.use(bodyParser.json());

app.listen(port);
console.log('Running on ' + port+'...');

Genre = require('./models/genre');
Book = require('./models/book');
// connect to mongoose
mongoose.connect('mongodb://tanvir_blessed:Naz1bAAA@ds115085.mlab.com:15085/tanvirapp', {
	useMongoClient: true,
});
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use /api/books or use /api/genres');
});

app.get('/api/genres', function(req, res) {
	Genre.getGenres(function(err, genres) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(genres);
	});
});

app.get('/api/genres/:_id', function(req, res) {
	Genre.getGenreById(req.params._id, function(err, genre) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(genre);
	});
});

app.post('/api/genres', function(req, res) {
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', function(req, res) {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:_id', function(req, res) {
	Genre.deleteGenre(req.params._id, function(err, genre) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.send(genre);
	})
});

app.get('/api/books', function(req, res) {
	Book.getBooks(function(err, books) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', function(req, res) {
	Book.getBookById(req.params._id, function(err, book) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(book);
	})
});

app.post('/api/books', function(req, res) {
	var book = req.body;
	Book.addBook(book, function(err, book) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', function(req, res) {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req, res) {
	Book.deleteBook(req.params._id, function(err, book) {
		if(err) {
			throw err;
			console.log(err);
		}
		res.send(book);
	})
});


