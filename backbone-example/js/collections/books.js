var app = app || {};

(function(){
	var Books = Backbone.Collection.extend({

		model: app.Book,

		localStorage: new Backbone.LocalStorage('my-books'),

		read: function(){
			return this.filter( function(book){
				return book.get('read');
			});
		},

		bigBooks: function(){
			return this.filter(function(book){
				return book.get('pages') > 300;
			});
		}
	});

	app.books = new Books();
})();