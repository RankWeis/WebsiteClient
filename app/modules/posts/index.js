define(function(require, exports, module) {
	"use strict";

	module.exports = {
		Collection: require("./listing"),

		Views: {
			Item: require("./postview"),
			List: require("./listview")
		}
	};
});