define(function(require, exports, module) {
	"use strict";

	// External dependencies.
	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Layout = require("layoutmanager");
	var crossdomain = require("crossdomain");



	// Alias the module for easier identification.
	var app = module.exports;

	app.api = "http://www.reddit.com/";
	app.access_token = "jZEzKAW73XJIGJxplDAKB7oT8eU";

	var headers = { headers: {'Access-Control-Allow-Origin' : '*', 
	'Access-Control-Allow-Headers' : 'X-Requested-With',
	'Access-Control-Allow-Methods' : 'POST,GET,PUT,DELETE,OPTIONS'}};

	// The root path to run the application through.
	app.root = "/";


	_.extend(Backbone.Collection.prototype, {
		cache: false,

		initialize: function(models, options) {
			_.extend(this,options);

			this.on({
				request: function(xhr) {
					this.isRequest = true;
				},

				sync: function() {
					this.isRequest = false;
				}
			});

			// this.fetch( { headers: {'Access-Control-Allow-Origin': '*'}});
// header('Access-Control-Allow-Headers: X-Requested-With');
// header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');"}})

			this.isRequest = false;
		}
	});

	// var sync = Backbone.sync;
	// Backbone.sync = function(method, model, options) {
	// 	var beforeSend = options.beforeSend;
	// 	options.beforeSend = function(xhr) {
	// 		xhr.setRequestHeader('Access-Control-Allow-Origin','*');
	// 		if(beforeSend) return beforeSend.apply(this,arguments);
	// 	};
	// 	sync(method,model,options);
	// }


});