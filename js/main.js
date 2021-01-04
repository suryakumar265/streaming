'use strict';
let body = document.querySelector('body');
let fixed_padding = document.getElementsByClassName('fixed-padding');

/* IB */

function ib() {
	let ib = document.querySelectorAll(".ib");
	for (let i = 0; i < ib.length; i++) {
		if(ib[i].querySelector('.ib_use')) {
			ib[i].style.backgroundImage = ('url('+ib[i].querySelector('.ib_use').getAttribute('src')+')').replace(!'img/slide-l.jpg', '../');
		}
	}
}

ib();

/* Main Slider */

let mainSlider = new Swiper('.swiper-container', {});

/* Select */

function addSelect(elem, multiple = false) {
	if (elem) {
		document.addEventListener('DOMContentLoaded', function() {
			if (!elem.getAttribute('data-select-disable')) {
				let selectIcon = document.querySelector('#' + elem.id + ' .select__icon');
				let selectList = document.querySelector('#' + elem.id + ' .select__list');
				let selectInput = document.querySelectorAll('#' + elem.id + ' .select__list .select__input');
				let selectLabel = document.querySelectorAll('#' + elem.id + ' .select__list .select__label');
				let selectValue = document.querySelector('#' + elem.id + ' .select__value');
				let selectTitle = document.querySelector('#' + elem.id + ' .select__title');
				let prevValue;
				let countValue = 0;
				let mainTitle = selectValue.innerHTML;

				if (elem.getAttribute('data-select-size') > 0 && elem.getAttribute('data-select-size') <= selectLabel.length) {
					let heightSize = 0;
					for(let i = 0, length = elem.getAttribute('data-select-size'); i < length; i++) {
						heightSize += selectLabel[i].offsetHeight;
					}
					selectList.style.height = heightSize + 'px';
				}

				if (elem.getAttribute('data-select-autofocus')) {
					turnSelect();
				}

				function requiredCheck() {
					if (elem.getAttribute('data-select-required')) {
						let notEmpty;
						if (!selectList.classList.contains('active')) {
							for(let i = 0, length = selectInput.length; i < length; i++) {
								if (selectInput[i].checked) {
									notEmpty = true;
									break;
								}
							}
							if (notEmpty != true) {
								selectList.classList.toggle('active');
								selectIcon.classList.toggle('active');
								elem.classList.add('error');
								return false;
							} else {
								elem.classList.remove('error');
								return true;
							}
						}
					}
				}

				function turnSelect() {
					selectList.classList.toggle('active');
					selectIcon.classList.toggle('active');
					requiredCheck();
				}

				document.documentElement.addEventListener('click', function(e) {
					if (!e.target.closest('#' + elem.id)) {
						selectList.classList.remove('active');
						selectIcon.classList.remove('active');
						requiredCheck();
					}
				});

				selectTitle.addEventListener('click', function(e) {
					turnSelect();
				});

				if (!multiple) {
					for(let i = 0, length = selectInput.length; i < length; i++) {
						if (selectInput[i].checked) {
							selectValue.innerHTML = selectLabel[i].innerHTML;
							prevValue = i;
						}

						selectInput[i].addEventListener('change', function(e) {
							turnSelect();
							selectValue.innerHTML = selectLabel[i].innerHTML;
							if (prevValue !== undefined && prevValue !== i) {
								selectInput[prevValue].checked = false;
							}
							prevValue = i;
							if (prevValue === i && !elem.getAttribute('data-select-required') && mainTitle != '') {
								selectValue.innerHTML = mainTitle;
								prevValue = undefined;
							} else if (prevValue === i) {
								selectInput[prevValue].checked = true;
								prevValue = i;
							}
						});
					}
				} else {
					for(let i = 0, length = selectInput.length; i < length; i++) {
						if (selectInput[i].checked) {
							if (selectValue.innerHTML == '' || countValue == 0) {
								selectValue.innerHTML = selectLabel[i].innerHTML;
							} else {
								selectValue.innerHTML += ', ' + selectLabel[i].innerHTML;
							}
							countValue += 1;
						}

						selectInput[i].addEventListener('change', function(e) {
							turnSelect();
							if (selectInput[i].checked) {
								if (selectValue.innerHTML == '' || countValue == 0) {
									selectValue.innerHTML = selectLabel[i].innerHTML;
								} else {
									selectValue.innerHTML += ', ' + selectLabel[i].innerHTML;
								}
								countValue += 1;
							} else {
								let prevText = selectValue.innerHTML;
								selectValue.innerHTML = selectValue.innerHTML.replace(', ' + selectLabel[i].innerHTML, '');
								if (prevText == selectValue.innerHTML) {
									selectValue.innerHTML = selectValue.innerHTML.replace(selectLabel[i].innerHTML + ', ', '');
								}
								countValue -= 1;
							}

							if (countValue == 0 && !elem.getAttribute('data-select-required') && mainTitle != '') {
								selectValue.innerHTML = mainTitle;
							} else if (countValue == 0) {
								selectInput[i].checked = true;
								countValue += 1;
							}
						});
					}
				}
			} else {
				elem.classList.add('disable');
			}
		});
	}
}

if (document.getElementById('films-select')) {
	addSelect(document.getElementById('films-select'), true);
}

if (document.getElementById('sort-select')) {
	addSelect(document.getElementById('sort-select'));
}

/* Ui Slider */

let filmsRange = document.getElementById('films-range');

noUiSlider.create(filmsRange, {
	start: [1888, 2012],
	connect: true,
	tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
	range: {
		'min': 1888,
		'max': 2021,
	},
});

/* Tabs */

function addTab(tabControl, items) {
	if (tabControl && items) {
		let prevTab;

		document.addEventListener('DOMContentLoaded', function(e) {
			for(let i = 0, length = tabControl.length; i < length; i++) {
				if (tabControl[i].classList.contains('active')) {
					items[i].classList.add('active');
					prevTab = i;
				}

				if (!items[i]) {
					tabControl[i].classList.add('disable');
				}

				tabControl[i].addEventListener('click', function(e) {
					if (items[i]) {
						items[i].classList.add('active');
						tabControl[i].classList.add('active');

						if (prevTab !== undefined && prevTab !== i) {
							items[prevTab].classList.remove('active');
							tabControl[prevTab].classList.remove('active');
						}
						prevTab = i;
					}
				});
			}
		});
	}
}

addTab(document.querySelectorAll('.films__tab'), document.querySelectorAll('.films__content'));