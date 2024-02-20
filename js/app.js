//* création d'un écouteur sur la newsletter pour n'apparaitre que quand on clique sur "newsletter"
/* -------------------------------------------------------- */

// sélectionne le lien/bouton de la nav "Newsletter" :
const newsletterButton = document.querySelectorAll('.menu__item')[1];

// sélectionne la popUp Newsletter
const newsletterPop = document.querySelector('.newsletter');

// fonction de l'écoute au click
function handleOpenNewsletter() {
	newsletterPop.classList.remove('newsletter--hidden');
}
// l'évènement au click sur le lien
newsletterButton.addEventListener('click', function (event) {
	event.preventDefault();
	handleOpenNewsletter();
});

//* affichage de la popUp après un certains scroll
/* -------------------------------------------------------- */

//  la fonction est la même qu'à la ligne 10

// l'évènement au scroll
window.addEventListener('scroll', function () {
	if (window.scrollY > 500) {
		handleOpenNewsletter();
	}
});

//* fermeture de la popUp en appuyant sur le bouton
/* -------------------------------------------------------- */

// sélectionne la croix de fermeture de la nav "Newsletter" :
const closeButton = document.querySelector('.newsletter__close');

//  fonction de l'écoute au click
function handleCloseNewsletter(event) {
	newsletterPop.classList.add('newsletter--hidden');
}

// l'évènement au click sur la croix
closeButton.addEventListener('click', handleCloseNewsletter);

//* message d'erreur si l'utilisateur rentre une fausse adresse mail
/* -------------------------------------------------------- */
const form = document.querySelector('form');
const forbiddenDomains = ['@yopmail.com', '@yopmail.fr', '@yopmail.net', '@cool.fr.nf', '@jetable.fr.nf', '@courriel.fr.nf', '@moncourrier.fr.nf', '@monemail.fr.nf', '@monmail.fr.nf', '@hide.biz.st', '@mymail.infos.st'];

// fonction d'ajout du message d'erreur
function addErrorMessage() {
	const errorMessage = document.createElement('p');
	errorMessage.textContent = 'Veuilllez entrer une adresse mail valide';
	form.appendChild(errorMessage);
}

// écouteur sur le submit = vérifier si email valide
form.addEventListener('submit', function (event) {
	event.preventDefault();
	const userEmail = form['subscriber-email'].value;
	for (const forbiddenDomain of forbiddenDomains) {
		if (userEmail.includes(forbiddenDomain)) {
			addErrorMessage();
			break;
		}
	}
});

