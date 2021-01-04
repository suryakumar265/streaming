/* Open Menu */

let menu_link = document.querySelectorAll('.menu__links');

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.menu__arrow');
	for(let i = 0, length = arrow.length; i < length; i++) {
		let subMenu = arrow[i].nextElementSibling;

		arrow[i].addEventListener('click', function(e) {
			subMenu.classList.toggle('open');
			arrow[i].classList.toggle('active');
		});

		for(let index = 0, length = menu_link.length; index < length; index++) {
			menu_link[index].addEventListener('click', function(e) {
				subMenu.classList.remove('open');
				arrow[i].classList.remove('active');
			});
		}

		document.documentElement.addEventListener('click', function(e) {
			if (!e.target.closest('.menu')) {
				subMenu.classList.remove('open');
				arrow[i].classList.remove('active');
			}
		});
	}
} else {
	body.classList.add('mouse');
}