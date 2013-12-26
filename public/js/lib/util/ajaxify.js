define(['jquery','callbacks'], function($, callbacks){
	var ajaxify = function(){
		var button = $('.ajaxify');
		button.each(function(){
			$(this).on('click', function(e){
				e.preventDefault();
				var that = this;
				var form = $(this).closest('form');

				$.ajax({
					url : form.attr('action'),
					type: form.attr('method'),
					data: form.serialize(),
					dataType: 'json'
				})
				.done(function(response){
					callbacks[$(that).data('callback')](response);
				})
				.fail(function(){

				})
				.always(function(){
					$('.modal').modal('hide');
				});
			});

		});
	}
	return ajaxify;
});