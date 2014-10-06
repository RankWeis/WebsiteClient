define(function(require, exports, module) {
	"use strict";

	// External dependencies.
	var app = require("app");
	var $ = require("jquery");
	var Backbone = require("backbone");

	var Post = require("modules/posts/index");
	
	// 
	require("bootstrap");
	

	// Defining the application router.
	var Router = Backbone.Router.extend({
		initialize: function() {
			this.posts = new Post.Collection();

			var Layout = Backbone.Layout.extend({
				el: "main",
				template: require("ldsh!./templates/main"),
				views: {
					".submissions" : new Post.Views.List({ collection: this.posts}),
				}
			});
			new Layout().render();
		},

	routes: {
		"": "index",
		"posts": "get_posts"
	},

	index: function() {
		console.log("Welcome to your / route.");
		var url = this.getOauthUrl();
		$("#oauthUrl").append("<a href=" + url + ">Click here to sign in</a>");
	},

	get_posts: function() {
		console.log("Getting posts");
		this.posts.fetch();
	},

    // Shortcut for building a url.
    go: function() {
    	var redir = _.toArray(arguments).join("/");
    	console.log("Going to " + redir)
    	return this.navigate(redir, true);
    },

    getOauthUrl: function() {
		var oauthParams = {
			"client_id": "0ZxbUUqE8Ada2g",
			"clientSecret" : "37TKRBWmMR1lrZXWeCxCeqt8uPU",
			"state" : "Xe8E",
			"redirect_uri" : "http://kiansamii.com",
			"duration": "temporary",
			"response_type" : "code",
			"scope" : "identity,edit,history,mysubreddits,privatemessages,read,submit,subscribe,vote"

			// modposts,identity,edit,flair,history,modconfig\
			// modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,\
			// read,report,save,submit,subscribe,vote,wikiedit,wikiread",
		};
		var sslRedditUrl = "https://ssl.reddit.com/api/v1/authorize?";
		oauthParams = $.param(oauthParams);
		console.log(oauthParams);
		this.oauthUrl = sslRedditUrl + oauthParams;
		return this.oauthUrl;
	}

	});
	module.exports = Router;
});

