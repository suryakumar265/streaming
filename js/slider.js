/* Slider */

$(document).ready(function() {
	$('.-slider').on('init', function(slick) {

	});

	$('.-slider').slick({
		slidesToShow: 3,
		//arrows: false,
		//autoplay: true,
		/*responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},
		],*/
	});
});