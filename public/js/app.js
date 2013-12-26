define(['jquery', 'underscore', 'backbone', 'angularjs', 'bootstrap', 'ajaxify'], function($, _, Backbone, ng){

	$(window).ready(function(){
		console.log($('.carousel'));
	//	$('.carousel').carousel();
		if($.trim($('.salutation .user-name').html()) === '')
			$('.homepage').modal('show');
		require('ajaxify')();
	});

});