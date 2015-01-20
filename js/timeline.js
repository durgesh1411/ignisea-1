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

function changeimg(name){
			var imgUrl= 'images/'+name+'.jpg';
			
			var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
			var h = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight; 
			if(w > 650){
			$('.background img').attr('src',imgUrl);
			
			$('.background img').attr('height',h);
			$('.background img').css('opacity',1);
			
}
}


function changeimg1(){
	var imgUrl= 'images/timeline1.jpg';
		$('.background img').css('opacity',0);
	}
