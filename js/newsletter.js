/* --------------------------------------- */
/* ---------------NEWSLETTER-------------- */
/* --------------------------------------- */
const newsletter = {
	element: document.querySelector('.newsletter'),

	init: function () {
		newsletter.hide();
		newsletter.newsletterHandle();
	},

	/* fonction qui permet de cacher la pop up */
	hide: function () {
		newsletter.element.classList.add('newsletter--hidden');
	},

	/* fonction qui permet de faire apparaitre la pop up*/
	show: function (event) {
		// si if n'a qu'une instruction, on ne met pas d'accolade :
		if (event) event.preventDefault();
		newsletter.element.classList.remove('newsletter--hidden');
	},

	/* fonction qui permet l'affichage de la pop up après un scroll */
	handleScroll: function () {
		// console.log(window.scrollY);
		if (window.scrollY > 300) {
			newsletter.show();
			// retirer l'écouteur une fois qu'il est exécuté
			document.removeEventListener('scroll', newsletter.handleScroll);
		}
	},

	/* fonction globale de la newsletter avec tous les écouteurs, quoi faire ? */
	newsletterHandle: function () {
		//sélectionne le lien dans la navigation
		const linksMenu = document.querySelectorAll('.menu__item');
		// autre méthode :
		/* const linksMenu = document.querySelector(
		'.menu .menu__item:nth-child(2)'
	  ); */
		const linkNewsletter = linksMenu[1];
		// fait afficher la pop up
		linkNewsletter.addEventListener('click', newsletter.show);

		// sélectionne la croix de la pop pu
		const closeNewsletter = document.querySelector('.newsletter__close');
		// ferme la pop up
		closeNewsletter.addEventListener('click', newsletter.hide);

		/* pour le scroll */
		document.addEventListener('scroll', newsletter.handleScroll);
	},
};

