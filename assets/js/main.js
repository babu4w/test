(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


//		$(".embed-responsive iframe").addClass("embed-responsive-item");
//		$(".carousel-inner .item:first-child").addClass("active");
//
//		$('[data-toggle="tooltip"]').tooltip();

		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 30,
			dots:true,
						responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				}
			}

		});



	});


	jQuery(window).load(function () {


	});


}(jQuery));