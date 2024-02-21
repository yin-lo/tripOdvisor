const filter = {
	init: function () {
		console.log('filter ok');
		const checkboxes = document.querySelectorAll('input[type = "checkbox"]');
		console.log(checkboxes);
		for (const checkbox of checkboxes) {
			checkbox.addEventListener('change', filter.handleCheckbox);
		}
	},
	handleCheckbox: function (event) {
		// console.dir(event.target);
		const checked = event.target.checked;
		const value = event.target.value;
		/* LA DESTRUCURATION D'UN OBJET (idem que ci-dessus): 
		const {checked, value} = event.target;
		*/
		const articles = document.querySelectorAll(`.review[data-rating='${value}']`);
		console.log(articles);

		for (const article of articles) {
			if (checked) {
				article.classList.remove('review--hidden');
			} else {
				article.classList.add('review--hidden');
			}
		}
	},
};
