jQuery(document).ready(function($){
	
    var scroll_top_duration = 700,
        $back_to_top = $('.r13');
    
	   $back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
    
});