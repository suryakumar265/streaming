/* Smooth */

if (document.getElementById('nav')) {
	let nav = document.getElementById('nav');

	window.onload = function() {
		let anchors = document.querySelectorAll('[data-to="*"]');

		for(let i = 0, length = anchors.length; i < length; i++) {
			anchors[i].addEventListener('click', function(e) {
				let scroll;
				let anchorDataTo = anchors[i].getAttribute('data-to');
				if (hide != undefined) {
					function scrollValue() {
						if (document.getElementById(anchorDataTo).offsetTop > pageYOffset) {
							return document.getElementById(anchorDataTo).offsetTop;
						}

						if (document.getElementById(anchors[i].getAttribute('data-to')).offsetTop <= pageYOffset) {
							return document.getElementById(anchorDataTo).offsetTop - nav.offsetHeight;
						}
					}

					scroll = scrollValue();
				} else {
					scroll = document.getElementById(anchorDataTo).offsetTop;
				}

				window.scrollTo({
					top: scroll,
					behavior: 'smooth',
				});
			});
		}
	}
}