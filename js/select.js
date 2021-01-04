/* Select */

function addSelect(elem, multiple = false) {
	let select_icon = document.querySelector('#' + elem.id + ' .select-icon'),
			select_list = document.querySelector('#' + elem.id + ' .select-list'),
			select_input = document.querySelectorAll('#' + elem.id + ' .select-list .select-input'),
			select_label = document.querySelectorAll('#' + elem.id + ' .select-list .select-label'),
			select_value = document.querySelector('#' + elem.id + ' .select-value'),
			select_title = document.querySelector('#' + elem.id + ' .select-title'),
			prevValue,
			countValue = 0;

	select_title.addEventListener('click', function(e) {
		select_list.classList.toggle('active');
		if (select_icon) {
			select_icon.classList.toggle('active');
		}
	});

	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('#' + elem.id)) {
			select_icon.classList.remove('active');
			select_list.classList.remove('active');
		}
	});

	if (multiple == false) {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				select_value.innerHTML = select_label[i].innerHTML;
				prevValue = i;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				select_value.innerHTML = select_label[i].innerHTML;
				select_label[i].classList.add('active');
				if (prevValue != undefined) {
					select_input[prevValue].checked = false;
					select_label[prevValue].classList.remove('active');
					if (prevValue == i) {
						select_input[prevValue].checked = true;
					}
				}
				prevValue = i;
			});
		}
	} else {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				if (select_value.innerHTML == '') {
					select_value.innerHTML = select_label[i].innerHTML;
				} else {
					select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
				}
				countValue = countValue + 1;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				if (select_input[i].checked == true) {
					select_label[i].classList.add('active');
					if (select_value.innerHTML == '') {
						select_value.innerHTML = select_label[i].innerHTML;
					} else {
						select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
					}
					countValue = countValue + 1;
				} else {
					select_label[i].classList.remove('active');
					let prevText = select_value.innerHTML;
					select_value.innerHTML = select_value.innerHTML.replace(', ' + select_label[i].innerHTML, '');
					if (prevText == select_value.innerHTML) {
						select_value.innerHTML = select_value.innerHTML.replace(select_label[i].innerHTML + ', ', '');
					}
					countValue = countValue - 1;
					if (countValue == 0) {
						select_input[i].checked = true;
						select_label[i].classList.add('active');
						countValue = countValue + 1;
					}
				}
			});
		}
	}
}

function addSelectMod_1(elem, multiple = false) {
	let select_icon = document.querySelector('#' + elem.id + ' .select-icon'),
			select_list = document.querySelector('#' + elem.id + ' .select-list'),
			select_input = document.querySelectorAll('#' + elem.id + ' .select-list .select-input'),
			select_label = document.querySelectorAll('#' + elem.id + ' .select-list .select-label'),
			select_value = document.querySelector('#' + elem.id + ' .select-value'),
			select_title = document.querySelector('#' + elem.id + ' .select-title'),
			prevValue,
			valueText = select_value.innerHTML,
			countValue = 0;

	select_title.addEventListener('click', function(e) {
		select_list.classList.toggle('active');
		if (select_icon) {
			select_icon.classList.toggle('active');
		}
	});

	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('#' + elem.id)) {
			select_icon.classList.remove('active');
			select_list.classList.remove('active');
		}
	});

	if (multiple == false) {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				select_value.innerHTML = select_label[i].innerHTML;
				prevValue = i;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				select_value.innerHTML = select_label[i].innerHTML;
				select_label[i].classList.add('active');
				if (prevValue != undefined) {
					select_input[prevValue].checked = false;
					select_label[prevValue].classList.remove('active');
					if (prevValue == i) {
						select_input[prevValue].checked = true;
					}
				}
				prevValue = i;
			});
		}
	} else {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				if (select_value.innerHTML == '' || select_value.innerHTML == valueText) {
					select_value.innerHTML = select_label[i].innerHTML;
				} else {
					select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
				}
				countValue = countValue + 1;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				if (select_input[i].checked == true) {
					select_label[i].classList.add('active');
					if (select_value.innerHTML == '' || select_value.innerHTML == valueText) {
						select_value.innerHTML = select_label[i].innerHTML;
					} else {
						select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
					}
					countValue = countValue + 1;
				} else {
					select_label[i].classList.remove('active');
					let prevText = select_value.innerHTML;
					select_value.innerHTML = select_value.innerHTML.replace(', ' + select_label[i].innerHTML, '');
					if (prevText == select_value.innerHTML) {
						select_value.innerHTML = select_value.innerHTML.replace(select_label[i].innerHTML + ', ', '');
					}
					countValue = countValue - 1;
					if (countValue == 0) {
						select_input[i].checked = true;
						select_label[i].classList.add('active');
						countValue = countValue + 1;
					}
				}
			});
		}
	}
}

if (document.getElementById('')) {
	addSelect(document.getElementById(''));
}