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

document.addEventListener('DOMContentLoaded', app.init);
