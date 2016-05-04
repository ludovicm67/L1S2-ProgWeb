// Les éléments auxquels on devra beaucoup avoir accès
var foo = document.getElementById('foo');
var bar = document.getElementById('bar');
var out = document.getElementById('out');

// Permet d'actualiser les indices des 'li'
function refreshIndices() {
	var li = bar.querySelectorAll('li');
	for (var i = 0; i < li.length; i++) {
		li[i].dataset.indice = i;
	}
}

// Permet de supprimer un item
function deleteItem() {
	alert(this.dataset.indice);
	this.parentNode.removeChild(this);
	out.innerHTML += '<br>' + this.innerHTML;
}

// On ajoute un cadre bleu au premier 'li' lors d'un clic sur #foo
foo.addEventListener('click', function () {
	bar.querySelector('li').style.border = "5px solid #2980b9";
});

// Si on passe a souris sur '#foo > em', on dupplique le second 'li'
foo.querySelector('em').addEventListener('mouseover', function () {
	var secondItem = bar.querySelectorAll('li')[1].cloneNode(true);
	secondItem.addEventListener('click', deleteItem);
	bar.insertBefore(secondItem, bar.querySelectorAll('li')[1]);
	refreshIndices();
});;

// On ajoute l'évènement en cas de clic sur tous les 'li' présents au départ
var li = bar.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
	li[i].dataset.indice = i;
	li[i].addEventListener('click', deleteItem);
}

// En cas d'appuie sur la touche 'a', on ajoute un nouvel item
document.onkeypress = function(e) {

	var key;

	if(window.event) key = e.keyCode;
	else if(e.which) key = e.which;

	// Si c'est bien la touche 'a'
	if(String.fromCharCode(key) == 'a') {
		var newItem = document.createElement('li');

		// Ajout de l'événement en cas de clic
		newItem.addEventListener('click', deleteItem);

		newItem.textContent = prompt('Nouvel item :');
		bar.appendChild(newItem);
		refreshIndices();
	}

}
