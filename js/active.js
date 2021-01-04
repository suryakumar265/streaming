/* Active */

let menuLinks = document.querySelectorAll('.menu__link');
let bodyHeight = document.body.scrollHeight;
let scroll = [];
let max_scroll = [];

function getScrollValues() {
	for(let i = 0, length = menuLinks.length; i < length; i++) {
		if (menuLinks[i].hasAttribute('data-to')) {
			scroll[i] = document.getElementById(menuLinks[i].getAttribute('data-to')).offsetTop/* - nav.offsetHeight*/;
			max_scroll[i] = document.getElementById(menuLinks[i].getAttribute('data-to')).offsetHeight + scroll[i];
		} else {
			scroll[i] = null;
			max_scroll[i] = null;
		}
	}
}

function getScrollPosition() {
	for(let i = 0, length = menuLinks.length; i < length; i++) {
		if (scroll[i] != null && pageYOffset >= scroll[i] && pageYOffset < max_scroll[i]) {
			menuLinks[i].classList.add('active');
		} else {
			menuLinks[i].classList.remove('active');
		}
	}
}

getScrollValues();
getScrollPosition();

window.addEventListener('scroll', function(e) {
	if (document.body.scrollHeight == bodyHeight) {
		getScrollPosition();
	} else {
		bodyHeight = document.body.scrollHeight;
		getScrollValues();
		getScrollPosition();
	}
});