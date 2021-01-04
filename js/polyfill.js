/* Polyfill */

(function() {
	// Checking Support
	if (!Element.prototype.closest) {
		// Realize
		Element.prototype.closest = function(css) {
			var node = this;
			while (node) {
				if (node.matches(css)) {
					return node;
				} else {
					node = node.parentElement;
				}
				return null;
			}
		};
	}
})();

(function() {
	// Checking Support
	if (!Element.prototype.matches) {
		// Define Property
		Element.prototype.matches = Element.prototype.matchesSelector || 
			Element.prototype.webkitMatchesSelector || 
			Element.prototype.mozMatchesSelector || 
			Element.prototype.msMatchesSelector;
	}
})();