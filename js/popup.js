/* Popup */

let popup_btn = document.getElementsByClassName('popup-btn');
let unlock = true;
let timeout = 500;

if (popup_btn.length > 0) {
	for(let i = 0, length = popup_btn.length; i < length; i++) {
		popup_btn[i].addEventListener('click', function(e) {
			if (!check.checked) {
				let class_popup = popup_btn[i].className.split('');
				let popupid = '';

				for(let i = 0, length = class_popup.length; i < length; i++) {
					if (class_popup[i] == 'o' && class_popup[i + 1] == 'p' && class_popup[i + 2] == '-') {
						for(let index = i + 3, length = class_popup.length; index < length; index++) {
							if (class_popup[index] != '' && class_popup[index] != ' ') {
								popupid = popupid + class_popup[index];
							} else {
								break;
							}
						}
					}
				}

				openPopup(document.getElementById(popupid));
			}
		});
	}
}

let close_popup = document.getElementsByClassName('close-popup');

if (close_popup.length > 0) {
	for(let i = 0, length = close_popup.length; i < length; i++) {
		close_popup[i].addEventListener('click', function(e) {
			closePopup(close_popup[i].closest('.popup'));
		});
	}
}

function openPopup(elem) {
	if (elem && unlock && !check.checked) {
		let popupActive = document.querySelector('.popup.open');

		if (popupActive) {
			closePopup(popupActive, false);
		} else {
			bodyLock();
		}

		elem.classList.add('open');
		elem.addEventListener('click', function(e) {
			if (!e.target.closest('.popup-body')) {
				closePopup(e.target.closest('.popup'));
			}
		});
	}
}

function closePopup(elem, doUnlock = true) {
	if (unlock) {
		elem.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (fixed_padding.length > 0) {
		for(let i = 0, length = fixed_padding.length; i < length; i++) {
			fixed_padding[i].style.paddingRight = paddingValue;
		}
	}

	body.style.paddingRight = paddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		if (fixed_padding.length > 0) {
			for(let i = 0, length = fixed_padding.length; i < length; i++) {
				fixed_padding[i].style.paddingRight = '0px';
			}
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		closePopup(document.querySelector('.popup.open'));
	}
});