(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slides").owlCarousel({
            items:1,
            nav:true,
            dots: true,
            autoplay: false,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            loop:true,
            animateOut: 'fadeOut',
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));