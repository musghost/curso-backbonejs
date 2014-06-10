var app = app || {};

(function ($) {

	app.BookView = Backbone.View.extend({

		tagName:  'li',

		events: {
			'click .edit': 'edit',
			'click .save': 'saveEdit'
		},

		template: _.template($('#item').html()),

		initialize: function () {
			this.model.on('change', this.render, this); 
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
		saveEdit: function(){
			this.$el.find('.book-labels').toggle('.hide');
			this.$el.find('.book-form').addClass('hide');

			var titleEdit = this.$el.find('.title').val().trim();
			var pagesEdit = this.$el.find('.pages').val().trim();
			var readEdit = this.$el.find('.read').is(':checked');

			if(titleEdit) {
				this.model.save({title: titleEdit});
			}
			if(pagesEdit){
				this.model.save({pages: pagesEdit});
			}
			this.model.save({read: readEdit})
		}
	});
})(jQuery);