// Notre élément à colorier
var colors = document.getElementById('colors');

// Lors d'un clic sur la div#colors, on colorie !
// Note: on a choisit de colorier en utilisant hsl; c'est fait en un rien de temps ;)
colors.addEventListener('click', function (e) {

	// La couleur du texte dépend de la position horizontale du clic
	colors.style.color           = 'hsl(' + e.clientX + ', 50%, 50%)';

	// La couleur de fond dépend de la position verticale du clic
	colors.style.backgroundColor = 'hsl(' + e.clientY + ', 50%, 50%)';

});
