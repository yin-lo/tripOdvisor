/* --------------------------------------- */
/* -----------------SLIDER---------------- */
/* --------------------------------------- */

const slider = {
	prevBtn: null,
	nextBtn: null,
	position: 0,
	init: function () {
		const buttons = document.querySelectorAll('.slider__btn');
		slider.prevBtn = buttons[0];
		slider.nextBtn = buttons[1];
		slider.imageElements = document.querySelectorAll('.slider__img');
		slider.nextBtn.addEventListener('click', slider.nextImage);
		slider.prevBtn.addEventListener('click', slider.previousImage);
		
	},
	nextImage: function () {
		// j'enregistre une nouvelle position basé sur la position actuelle
		let newPosition = slider.position;
		if(newPosition>= slider.imageElements.length - 1){
			newPosition = - 1;
		}
		newPosition++;
		slider.goToImage(newPosition);
		
	},
	previousImage: function () {
		let newPosition = slider.position;
		if(newPosition<= 0){
			newPosition = slider.imageElements.length;
		}
		newPosition--;
		slider.goToImage(newPosition);
		
	},
	goToImage: function (newPositionParams) {
		// recupere l'img actuellement visible (avec la class --current)
		const currentImage = slider.imageElements[slider.position];
		// enleve la class --current
		currentImage.classList.remove('slider__img--current');
		// newPosition aura la valeur 1
		// enregistre la valeur de la nouvelle position
		slider.position = newPositionParams;
		// ajoute la class current à la prochaine image - renvoie au 1er click slider.imageElements[1];
		const newCurrentImage = slider.imageElements[newPositionParams];
		newCurrentImage.classList.add('slider__img--current');
	},
};
