/* -------------------------------------- */
/* ------exemple de fonctions fléchées--- */
/* -------------------------------------- */

/* const hello = () => {
	console.log(hello);
} */

/* si la fonction n'a qu'un paramètre et ne retourne qu'une instruction, on peut écrire : */
/* const double = (number) => number * 2;
console.log(double(5)); */

/* --------------------------------------- */
/* ---------------NEWSLETTER-------------- */
/* --------------------------------------- */

const newsletterElement = document.querySelector('.newsletter');

/* fonction qui permet de cacher la pop up */
const hide = () => {
	newsletterElement.classList.add('newsletter--hidden');
};

/* fonction qui permet de faire apparaitre la pop up*/
const show = (event) => {
	// si if n'a qu'une instruction, on ne met pas d'accolade :
	if (event) event.preventDefault();
	newsletterElement.classList.remove('newsletter--hidden');
};

/* fonction qui permet l'affichage de la pop up après un scroll */
const handleScroll = () => {
	console.log(window.scrollY);
	if (window.scrollY > 300) {
		show();
		// retirer l'écouteur une fois qu'il est exécuté
		document.removeEventListener('scroll', handleScroll);
	}
};

/* fonction globale de la newsletter avec tous les écouteurs, quoi faire ? */

const newsletterHandle = () => {
	//sélectionne le lien dans la navigation
	const linksMenu = document.querySelectorAll('.menu__item');
	// autre méthode :
	/* const linksMenu = document.querySelector(
		'.menu .menu__item:nth-child(2)'
	  ); */
	const linkNewsletter = linksMenu[1];
	// fait afficher la pop up
	linkNewsletter.addEventListener('click', show);

	// sélectionne la croix de la pop pu
	const closeNewsletter = document.querySelector('.newsletter__close');
	// ferme la pop up
	closeNewsletter.addEventListener('click', hide);

	/* pour le scroll */
	document.addEventListener('scroll', handleScroll);
};

hide();
newsletterHandle();
