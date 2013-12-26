define(['jquery'], function($){

	return {
		getUserName : function(response){
			return $('.salutation .user-name').html(response.UserName);
		}

	};
	
});