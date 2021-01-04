/* Fixed Menu */

/*let nav = document.getElementById('nav');
let hide = false;
let prevScroll;

function fixedMenu() {
	if (pageYOffset <= 105) {
		nav.classList.remove('fixed-padding');
		nav.style.paddingRight = '0px';
		hide = false;
		nav.classList.remove('fixed');
	}

	if (pageYOffset > 105) {
		nav.classList.add('fixed');
		nav.classList.add('fixed-padding');
		nav.style.transform = 'translate(0, -110%)';
		nav.style.paddingRight = '20px';
	}

	if (pageYOffset > prevScroll && pageYOffset > 105) {
		if (hide == false) {
			nav.style.opacity = '0';
			hide = true;
		}
		nav.style.transform = 'translate(0, -110%)';
	}

	if (pageYOffset <= prevScroll) {
		nav.style.opacity = '1';
		nav.style.transform = 'none';
	}

	prevScroll = pageYOffset;
}

fixedMenu();

window.addEventListener('scroll', fixedMenu);*/

/* Fixed Menu */

let hide = false;

if (document.getElementById('nav')) {
	let nav = document.getElementById('nav');
	let prevScroll;
	let navHeight = nav.offsetHeight;

	function fixedMenu() {
		if (pageYOffset > prevScroll && pageYOffset > navHeight) {
			if (hide == false) {
				nav.style.opacity = '0';
				hide = true;
			}
			nav.style.transform = 'translate(0, -110%)';
		}

		if (pageYOffset <= prevScroll) {
			nav.style.opacity = '1';
			nav.style.transform = 'none';
		}

		prevScroll = pageYOffset;
	}

	fixedMenu();

	window.addEventListener('scroll', fixedMenu);
}