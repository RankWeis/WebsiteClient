define(function(require, exports, module) {
	"use strict";
	var app = require("app");

	var Layout = Backbone.Layout.extend({
		template: require("ldsh!../../templates/post_row_template"),

		tagName: "li",

		serialize: function() {
			return { model : this.model };
		},

		events: {
			'click .redditLink' : "goToPost"
		},

		goToPost: function(ev) {
			app.Router.navigate("http://www.reddit.com" + this.model.permalink);
		},

		initialize: function() {
			this.render
		}

	});
	module.exports = Layout;
})