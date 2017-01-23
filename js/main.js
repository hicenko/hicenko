$(document).ready(function() {
    "use strict";

    // Vertical tab 
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Skills
    $('.staff-skills').appear(function() {
        $(".skill-bar span").removeClass("hide-skill")
    }, {
        accX: 0,
        accY: -200
    });

    // Team Slider

    $("#team-slider2").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        singleItem: true
    });

    // Quote Slider
    var owl = $("#quote-slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 2],
            [1200, 2],
            [1400, 2],
            [1600, 2]
        ],
        navigation: true,
        pagination: false

    });

    // Client Slider
    var owl = $("#client-slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 2],
            [450, 2],
            [600, 3],
            [700, 3],
            [1000, 5],
            [1200, 7],
            [1400, 7],
            [1600, 7]
        ],

        autoplay: 3000,
        navigation: false,
        pagination: false

    });

    // Home Slider
    var owl = $("#home-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        singleItem: true,
        transitionStyle: "fade",
	   autoplay:true,
	   autoplayTimeout:4000,
	   autoplayHoverPause:true
    });

    // Big Slider
    $("#big-slider").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        singleItem: true

    });

});

// Flickrfeed
$('#flickr').jflickrfeed({
    limit: 6,
    qstrings: {
        id: '52617155@N08'
    },
    itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
});

// Scrollspy
$('body').scrollspy({
    target: '#spy'
});

// Toggle
$(".toogle-sub").on('click', function() {
    $(this).toggleClass("active");
    $(".toggle-content").slideToggle("slow", function() {});
    $(".arrow-ico1").toggleClass("arrow_carrot-up arrow_carrot-down");
});

$(".sidebar-nav li a").on('click', function() {
    $("#sidebar-wrapper").toggleClass("active");
});

// Nav Scroll
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top + 5)
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

// Header Scroll
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 380)
        $(".header-hz").css("height", "93px");
    else
        $(".header-hz").css("height", "150px");
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 380)
        $(".top-bar").css("margin-top", "-57px");
    else
        $(".top-bar").css("margin-top", "0px");
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 380)
        $(".header-hz .logo h1").css("margin-top", "38px");
    else
        $(".header-hz .logo h1").css("margin-top", "65px");
});

// Onscroll Menu
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 350)
        $(".header").css("padding", "30px 0px");
    else
        $(".header").css("padding", "80px 0px");
});

if (document.body.clientWidth <= 767) {

// Header Scroll mobile
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 380)
        $(".header-hz").css("height", "93px");
    else
        $(".header-hz").css("height", "120px");
});

$(".mobile-nav").on('click', function() {
    $("#spy").slideToggle("slow", function() {});
});

$("#spy a").on('click', function() {
    $("#spy").css({"display":"none"}); 
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 380)
        $(".header-hz .logo h1").css("margin-top", "38px");
    else
        $(".header-hz .logo h1").css("margin-top", "70px");
});

}

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 350)
        $(".header").css("background", "rgba(54,75,94,0.8)");
    else
        $(".header").css("background", "transparent");
});

// Parallax 
$.stellar({
    horizontalOffset: 50
});

// Prettyphoto
$("a[class^='prettyPhoto']").prettyPhoto({
    theme: 'pp_default'
});

// Isotope
$(window).load(function() {
    "use strict";
    var $container = $('#folio');
    $container.isotope({
        layoutMode: "masonry",
        masonry: {
            columnWidth: 5
        },
        itemSelector: '.folio-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('#portfolio-wrap .folio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});