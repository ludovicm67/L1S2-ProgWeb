// On initialise la calculatrice
var calto = document.getElementById('calto');
calto.innerHTML = '';

// On ajoute la zone d'affichage
var zone = document.createElement('input');
zone.type = 'number';
calto.appendChild(zone);
zone.focus();

// Variables pour plus tard
var op = false;
var tmp;

// On initialise la liste des boutons
var btn = [
	7, 			8, 			9, 			"+",
	4, 			5, 			6, 			"-",
	1, 			2, 			3, 			"*",
	0, 			"(-)", 		"=", 		"/"
];

// On ajoute les boutons, etc...
for (var i = 0; i < btn.length; i++) {

	// On créer le bouton
	var newBtn = document.createElement('button');
	newBtn.innerHTML = btn[i];
	newBtn.addEventListener('click', function () {

		// Si le bouton est un nombre entier
		if(Number.isInteger(parseInt(this.innerHTML))) zone.value += this.innerHTML;

		// Sinon il s'agit d'un opérateur
		else if(zone.value != '') {

			if(this.innerHTML == '(-)') zone.value = eval(parseInt(-1 * zone.value));
			else if(op && this.innerHTML == '=') {
				zone.value = eval(parseInt(tmp) + op + parseInt(zone.value));
				op = false;
				tmp = '';
			} else if(this.innerHTML != '=') {
				op = this.innerHTML;
				tmp = zone.value;
				zone.value = '';
			}

		}

		zone.focus();

	});
	calto.appendChild(newBtn);

}
