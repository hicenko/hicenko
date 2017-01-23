$(document).ready(function($) {
	$('#staff-details').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".team-content2",
		controlNav: true,
		manualControls: ".staff-nav li"
	});

$('.flex-prev1').on('click', function(){
    $('#staff-details').flexslider('prev')
    return false;
})

$('.flex-next1').on('click', function(){
    $('#staff-details').flexslider('next')
    return false;
})

});

$(document).ready(function($) {
	$('#info-slider').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: false,
		controlsContainer: ".info-slides",
		controlNav: true,
		manualControls: ".is-nav li"
	});
});

$(document).ready(function($) {
	$('#client-quote').flexslider({
		animation: "fade",
		slideshow: true,  
slideshowSpeed: 3000,
    animationSpeed: 600,                          
		directionNav: false,
		controlsContainer: ".client-content",
		controlNav: true,
		manualControls: ".client-nav li"
	});
});

$(document).ready(function($) {
	$('#project-slider').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".portfolio-single",
		controlNav: true,
		manualControls: ".ps-nav li"
	});

$('.flex-prev2').on('click', function(){
    $('#project-slider').flexslider('prev')
    return false;
})

$('.flex-next2').on('click', function(){
    $('#project-slider').flexslider('next')
    return false;
})

});


