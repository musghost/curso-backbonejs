var app = app || {};

(function ($) {

	app.BookView = Backbone.View.extend({

		tagName:  'li',

		events: {
			'click .edit': 'edit'
		},

		template: _.template($('#item').html()),

		initialize: function () { 
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
	});
})(jQuery);