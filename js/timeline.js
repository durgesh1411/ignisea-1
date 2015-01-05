jQuery(document).ready(function($){
	
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.85) {
			$(this).find('.timeline_time , .timeline-panel').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.85 && $(this).find('.timeline-panel').hasClass('is-hidden') ) {
				$(this).find('.timeline_time, .timeline-panel').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});