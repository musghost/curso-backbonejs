var app = app || {};

(function ($) {

	app.AppView = Backbone.View.extend({

		el: '#main',

		optionsTemplate: _.template($('#options-template').html()),

		events: {
			'click #add-book': 'addMyBook'
		},

		initialize: function () {
			this.$title = this.$('#book-title');
			this.$pages = this.$('#book-pages');
			this.$read = $('#read');

			this.$options = this.$('#options');
			this.$list = $('#list');
			

			this.listenTo(app.books, 'add', this.addBookView);
			this.listenTo(app.books, 'reset', this.addBooks);
			this.listenTo(app.books, 'all', this.render);

			app.books.fetch({reset: true});
		},

		render: function () {
			if (app.books.length) {
				this.$options.html(this.optionsTemplate(
				{
					count: app.books.length
				}
				));
			}
		},

		addMyBook: function(){
			app.books.create(this.newAttributes());
		},

		addBookView: function (book) {
			var view = new app.BookView({ model: book });
			this.$list.append(view.render().el);
		},

		addBooks: function () {
			this.$list.html('');
			app.books.each(this.addBookView, this);
		},

		newAttributes: function () {
			return {
				title: this.$title.val().trim(),
				pages: this.$pages.val().trim(),
				read: this.$read.is(':checked')
			}
		}
	});
})(jQuery);
