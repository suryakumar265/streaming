/* Accrodion */

if (document.querySelector('.block-accordion__nav')) {
	let accordionNavs = document.querySelectorAll('.block-accordion__nav');
	let accordionItems = document.querySelectorAll('.block-accordion__content');
	let accordionArrow = document.querySelectorAll('.plus__line');

	for(let i = 0, length = accordionNavs.length; i < length; i++) {
		let accordionTap = true;

		accordionItems[i].style.marginTop = '-' + accordionItems[i].offsetHeight + 'px';
		accordionItems[i].classList.add('disable');
		setTimeout(helpFunction, 300);

		function helpFunction() {
			accordionItems[i].style.marginTop = '-' + accordionItems[i].offsetHeight + 'px';
			accordionItems[i].style.transition = '0.3s';
			accordionNavs[i].addEventListener('click', function(e) {
				if (accordionTap == false) {
					accordionItems[i].style.marginTop = '-' + accordionItems[i].offsetHeight + 'px';
					accordionItems[i].classList.add('disable');
					accordionArrow[i].classList.remove('hide');
					accordionTap = true;
				} else {
					accordionItems[i].style.marginTop = '0px';
					accordionItems[i].classList.remove('disable');
					accordionArrow[i].classList.add('hide');
					accordionTap = false;
				}
			});
		}
	}
}