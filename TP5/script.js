// Les variables que l'on aura besoin :
//    - number  : contiendra le nombre aléatoire
//    - started : booléen pour savoir si une partie a été lancée ou non
//    - coup    : nombre de tentatives
var number;
var started = false;
var coup;

// Les différents éléments que l'on aura besoin d'accéder régulièrement
var textarea = document.querySelector('textarea');
var input    = document.querySelector('input');


// On se créer une petite fonction pour écrire plus facilement dans le textarea
function writeText(text) {
	textarea.textContent += '\n' + text;
	textarea.scrollTop    = textarea.scrollHeight; // scroll en bas du textarea
}

// On démarre une partie
function start() {
	if(started) end();  // On arrête la partie précédente
	number  = Math.round(Math.random() * 1000); // On génère le nomre aléatoire
	started = true;
	coup    = 0;
	writeText('');
	writeText('════════════════════════════════════════════════');
	writeText('             NOUVELLE PARTIE DEMARREE');
	writeText('┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅');
	input.focus(); // On donne le focus à l'input (c'est + user-friendly ;) )
}

// On termine la partie
function end() {
	started = false;
	if(coup > 0) writeText('┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅');
	writeText('                 FIN DE LA PARTIE');
	writeText('════════════════════════════════════════════════');
}

// On affiche la solution
function solution() {
	if(started) {
		writeText('Solution = ' + number);
		end();
	}
}

// On ajoute les évènements pour les clics sur les boutons et le formulaire
document.getElementById('newPartie').addEventListener('click', start);
document.getElementById('showSolution').addEventListener('click', solution);
document.querySelector('form').addEventListener('submit', function (e) {

	e.preventDefault(); // On empêche l'envoi du formulaire

	// Si l'input possède bien une valeur
	if(input.value) {
		// Si aucune partie n'a été lancée
		if(!started) writeText('\n    ⚠ Veuillez d\'abord lancer une partie !');

		// Si ce n'est pas un nombre entier
		else if(!Number.isInteger(parseInt(input.value)))
			writeText('\n    ⚠ Veuillez entrer un nombre entier !');

		// Si le nombre entré n'est pas compris entre 0 et 1000
		else if(parseInt(input.value) < 0 || parseInt(input.value) > 1000)
			writeText('\n    ⚠ Veuillez entrez un nombre entre 0 et 1000');

		// Si c'est OK
		else {
			coup++; // On incrémente le nombre de tentatives
			if(input.value < number) writeText('   ' + input.value + ' est trop petit.');
			if(input.value > number) writeText('   ' + input.value + ' est trop grand !');
			if(input.value == number) {
				writeText('\n   ' + input.value + ' est la bonne réponse ! Bravo !');
				writeText('   Nombre de coups : ' + coup);
				end();
			}
		}
	}

	// On vide l'input et on lui redonne le focus
	input.value = '';
	input.focus();

});;
