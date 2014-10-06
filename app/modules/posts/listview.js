define(function(require,exports,module) {
	"use strict";

	var app = require("app");
	var Post = require("./postview")

	var Layout = Backbone.Layout.extend({
		template: require("ldsh!../../templates/post_list"),

		serialize: function() {
			return { posts: this.collection };
		},

		beforeRender: function() {
			var postList;
			if(this.collection && this.collection.models && this.collection.models.length == 1) {
				var postList = this.collection.models[0].attributes;
			this.before = postList.before;
			this.after = postList.after;
			this.modhash = postList.modhash;
			postList.children.forEach(function(post) {
				console.log(post)
				this.insertView(".post-list", new Post({model: post.data}));
			}, this);
		}
		},

		afterRender: function() {
			this.$("input.invalid").focus();
		},

		initialize: function() {
			this.listenTo(this.collection, "reset sync", this.render);
		},

		events: {
			"click #getPosts" : "updatePosts"
		},

		updatePosts: function(ev) {
			console.log("Button clicked");
			// app.router.go("posts");
			app.router.get_posts();
		}
	})
	module.exports = Layout;
})