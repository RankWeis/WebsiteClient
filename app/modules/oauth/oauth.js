define(function() {
	"use strict";
	function getOauthUrl() {
		var oauthParams = {
			clientId: "0ZxbUUqE8Ada2g",
			clientSecret : "37TKRBWmMR1lrZXWeCxCeqt8uPU",
			state : "Xe8E",
			redirect_uri : "kiansamii.com",
			duration: "temporary",
			scope : "modposts, identity, edit, flair, history, modconfig, \
			modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, \
			read, report, save, submit, subscribe, vote, wikiedit, wikiread"
		}
		var sslRedditUrl = "https://ssl.reddit.com/api/v1/authorize?";
		oauthParams = $.param(oauthParams);
		console.log(url + oauthParams);
		this.oauthUrl = url + oauthParams;
		return this.oauthUrl;
	}
});