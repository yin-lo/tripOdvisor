/* -------------------------------------- */
/* ------exemple de fonctions fléchées--- */
/* -------------------------------------- */

/* const hello = () => {
	console.log(hello);
} */

/* si la fonction n'a qu'un paramètre et ne retourne qu'une instruction, on peut écrire : */
/* const double = (number) => number * 2;
console.log(double(5)); */

/* -------------------------------------- */
/* -----appeler les autres fichiers JS--- */
/* -------------------------------------- */

const app = {
	init: function () {
		newsletter.init();
		slider.init();
		filter.init();
	},
};

//* on utilise un event sur document pour lancer newsletter.init quand tout le DOM est chargé : (ça nous permet aussi de mettre la balise script dans le head)
document.addEventListener('DOMContentLoaded', app.init);
