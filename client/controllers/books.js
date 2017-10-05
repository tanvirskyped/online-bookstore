var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	console.log('BooksController loaded....');

	$scope.getBooks = function() {
		$http.get('/api/books').then(function(response) {
			$scope.books = response.data;
			// console.log(response);
		}, function(error) {
			console.log(error);
		});
	}

	$scope.getBook = function() {
		console.log("getBook function initiated...");
		var id = $routeParams.id;
		console.log(id);
		$http.get('/api/books/' + id).then(function(response) {
			$scope.book = response.data;
			console.log(response);
		}, function(error) {
			console.log(error);
		});
	}

	$scope.addBook = function() {
		$http.post('/api/books', $scope.book).then(function(response) {
			window.location.href = '#!/books';
		}, function(error) {
			console.log(error);
		});
	}

	$scope.updateBook = function() {
		console.log("updateBook function initiated...");
		var id = $routeParams.id;
		$http.put('/api/books/' + id, $scope.book).then(function(response) {
			window.location.href = '#!/books';
		}, function(error) {
			console.log(error);
		});
	}

	$scope.deleteBook = function(bookId) {
		console.log("deleteBook function initiated...");
		console.log(bookId);
		$http.delete('/api/books/' + bookId).then(function(response) {
			window.location.href = '#!/books';
		}, function(error) {
			console.log(error);
		});
	}
}]);