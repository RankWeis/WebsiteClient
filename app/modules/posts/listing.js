define(function(require, exports, module) {
	"use strict";

	var app = require("app");

	var Collection = Backbone.Collection.extend({
		url: function() {
			return app.api + "hot.json";
		},

		parse: function(response) {
			return response.data;
		}

	});

	module.exports = Collection;
});