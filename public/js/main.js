/*
 * NOTE: DO NOT DELETE
 * This file is required by both requireJs and r.js to properly manage
 * packaging and loading dependencies. If you would like to add a convenience
 * alias, include it in the 'paths' object below.
 *
 * Your application's main entry point must follow the convention of being named
 * 'app.js' to take advantage of this behavior.
 *
 * {@see http://requirejs.org/docs/api.html#config}
 */
(function(module) {
	"use strict";

	var config = module.exports = {
		// baseUrl: "",
		paths: {
			"text": "lib/requirejs-plugins/text",
			"json": (typeof JSON === "undefined") ? "lib/json2" : "empty:",
			"jquery": "vendor/jquery-1.10.1.min",
			"jqueryUI": "vendor/jquery-ui-1.10.3.min",
			"underscore": "lib/underscore-1.5.2",
			"backbone": "lib/backbone-1.1.0",
			"angularjs": "lib/angular-v1.2.3",
			"dust": "lib/dust-core-2.2.2",
			"dust-helpers" : "lib/dust-helpers",
			"bootstrap": "lib/bootstrap",
			"ajaxify": "lib/util/ajaxify",
			"callbacks": "lib/util/callbacks"
		},
		useStrict: true,
		shim: {
			"jqueryUI": {
				deps: ["jquery"]
			},
			"underscore": {
				exports: function() {
					return window._.noConflict();
				}
			},
			"backbone": {
				deps: ["underscore", "jquery"],
				exports: function() {
				//	Backbone.setDomLibrary(window.jQuery.noConflict());
					return window.Backbone.noConflict();
				}
			},
			"angularjs": {
				deps: [],
				exports: "angularjs"
			},
			"dust": {
				// Add any dust extensions as dependencies. Extensions should
				// expose a single function that accepts the `dust` object as an
				// argument. Extensions can modify the `dust` object as they
				// wish.
				//
				// IMPORTANT: Ensure the list of dependencies stays in sync with
				//            those in index.js.
				//
				deps: [],

				exports: function () {
					var extensions = Array.prototype.slice.call(arguments);
					while (extensions.length) {
						(extensions.shift())(window.dust);
					}

					// TODO: Unfortunately, dust requires it be in the global
					// scope. This sucks, but until we can build a fork with AMD
					// support we have to use it as-is.
					return window.dust;
				}
			},
			'bootstrap': ['jquery']
		}
	};

	if (typeof window !== "undefined" && navigator && document) {
		// Configure requires and bootstap app, conditionally loading JSON support
		require.config(config);
		if (config.paths.json !== "empty:") {
			require(["json"], function() {
				require(["app"]);
			});
		} else {
			require(["app"]);
		}
	}

/*global module:true*/
}(typeof module === "undefined" ? {} : module));
/*global module:false*/

