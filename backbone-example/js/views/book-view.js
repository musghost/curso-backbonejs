var app = app || {};

(function ($) {

	app.BookView = Backbone.View.extend({

		tagName:  'li',

		events: {
			'click .edit': 'edit',
			'click .save': 'save'
		},

		template: _.template($('#item').html()),

		initialize: function () { 
			this.$title = this.$('#edit-title');
			this.$pages = this.$('#edit-pages');
			this.$read = $('#edit-read');
		},

		render: function () {
			if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		edit: function(){
			this.$el.find('.book-labels').toggle('.hide');
			this.$el.find('.book-form').removeClass('hide');
			this.$el.find('.title').first().focus();
		}
		save: function(){
			//Define model 
			var editBook=this.model;
			//Change value
			editBook.set('title',this.$title.val().trim());
			editBook.set('pages',this.$pages.val().trim());
			editBook.set('read',this.$read.is(':checked'));
			//Change View
			this.$el.find('.book-labels').removeClass('.hide');
			this.$el.find('.book-form').toggle('hide');
		}
	});
})(jQuery);