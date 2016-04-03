// Liste des différents posts
var publications = [
	"Aujourd'hui j'ai décidé de poster un post avec Linux. VDH",
	"Aujourd'hui, j'ai entendu une blague suivante : c'est l'histoire d'un pinguin respirant par le cul; un jour il s'est assis et il est mort. Du coup je n'ose plus coder sous linux. VDH",
	"Aujourd'hui, on m'a obligé de sortir prendre le beau temps, un monde inexploré jusqu'à présent. VDH",
	"Aujourd'hui, j'ai pris une bonne résolution : la 4K. VDH",
	"Aujourd'hui, j'ai détruis mon propre système, et j'ai tout perdu. VDH",
	"Aujourd'hui, je suis encore sur un vieux pc d'avant 2000, mais on m'a dit que je ne pourrais pas aller très loin avec seulement 128Mo de RAM. VDH",
	"Aujourd'hui, en programmation web, on nous a demandé de faire ce site. VDH",
	"Aujourd'hui, maintenant pour poster sur un site, il faut faire un double clic sur un post déjà existant. Mais comment a pu faire le premier? VDH",
	"Aujourd'hui c'est une VDH..."
];

var posts = document.getElementById('posts');


// Fonction permettant d'afficher la zone de texte
function displayZone() {

	this.innerHTML = '';

	var textarea = document.createElement('textarea');
	textarea.placeholder = "Aujourd'hui... VDH";
	var button = document.createElement('button');
	button.innerHTML = 'Poster cette VDH (laisser vide pour annuler)';
	button.addEventListener('click', function () {
		if(textarea.value != '') publications.unshift(textarea.value);
		displayPosts();
		window.scrollTo(0, 0);
	});

	this.appendChild(textarea);
	this.appendChild(button);

	textarea.focus();
}

// Fonction permettant d'afficher les différentes publications
function displayPosts() {

	// On vérifie s'il y a des publications dans le tableau
	if (publications.length == 0) posts.innerHTML = 'Aucun post trouvé... Tant pis, tu ne pourras rien publier xD';
	else posts.innerHTML = '';

	// On affiche chaque publication
	for (var i = 0; i < publications.length; i++) {
		var post = document.createElement('p');
		post.className = 'post';
		post.innerHTML = publications[i];
		post.addEventListener('dblclick', displayZone);
		posts.appendChild(post);
	}

}

displayPosts();
