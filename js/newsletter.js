/* --------------------------------------- */
/* ---------------NEWSLETTER-------------- */
/* --------------------------------------- */
const newsletter = {
	element: document.querySelector('.newsletter'),
	forbiddenDomains: ['@yopmail.com', '@yopmail.fr', '@yopmail.net', '@cool.fr.nf', '@jetable.fr.nf', '@courriel.fr.nf', '@moncourrier.fr.nf', '@monemail.fr.nf', '@monmail.fr.nf', '@hide.biz.st', '@mymail.infos.st'],

	init: function () {
		newsletter.hide();
		newsletter.newsletterHandle();
		newsletter.formListener();
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
		if (window.scrollY > 500) {
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

		// sélectionne la croix de la pop up
		const closeNewsletter = document.querySelector('.newsletter__close');
		// ferme la pop up
		closeNewsletter.addEventListener('click', newsletter.hide);

		/* pour le scroll */
		document.addEventListener('scroll', newsletter.handleScroll);
	},

  addErrorMessage: function () {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Veuillez entrer une adresse email valide';
    document.querySelector('form').appendChild(errorMessage);
  },

	handleForm: function (event) {
		event.preventDefault();
		// récupérer la valeur de l'input :
		const email = event.target[0].value;
		/* console.log(event.target[0].value); */
		// event.target => recup le form
		// event.target[0] => recup input 1 du form
		// event.target[0].value => recup la valeur saisie par l'utilisateur
		if (newsletter.checkBadEmail(email)) {
			newsletter.addErrorMessage();
		} else {
			newsletter.hide();
			alert('Email enregistré');
		}
	},

	/* fonction pour vérifier si mauvais email */
	checkBadEmail: function (emailParams) {
		for (const domain of newsletter.forbiddenDomains) {
			if (emailParams.includes(domain)) {
				return true;
			}
		}
		return false;
	},

	/* fonction qui écouter les adresse mail au submit */
	formListener: function () {
		const form = document.querySelector('.newsletter form');
		form.addEventListener('submit', newsletter.handleForm);
	},
};
