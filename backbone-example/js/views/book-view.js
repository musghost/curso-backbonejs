var app = app || {};

(function ($) {

	app.BookView = Backbone.View.extend({

		tagName:  'li',

		events: {
			'click .edit': 'edit',
			'click .save': 'saveEdit',
			'click .delete': 'removeBook'
		},

		template: _.template($('#item').html()),

		initialize: function () { 
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
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
		},
		saveEdit:function () {
			var book = this.$('.form-control.title').val(),
				pages = this.$('.form-control.pages').val();
				read = this.$('.toggle').is(':checked');	    

		    this.model.save({
		    	title: book,
		    	pages: pages,
		    	read: read
		    });
		},
		removeBook: function () {
			this.model.destroy();
		}
	});
})(jQuery);