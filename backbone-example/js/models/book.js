var app = app || {};

(function(){
	app.Book = Backbone.Model.extend({
		defaults: {
			title: '',
			pages: 0,
			read: false
		},
		toogleRead: function(){
			this.save({
				read: !this.get('read')
			});
		}
	});
})();