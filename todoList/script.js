// Variable qui va contenir l'ensemble des items
var items = [];

// Elements principaux
var input      = document.getElementById('noteInput');
var addBtn     = document.getElementById('noteAdd');
var noteList   = document.getElementById('noteList');
var noteRemove = document.getElementById('noteRemoveAllDone');

// Fonction qui permet d'afficher les différents items
function displayItems() {

  // On vide d'abord la liste
  noteList.innerHTML = '';

  // On boucle sur chaque élément...
  for (var i = 0; i < items.length; i++) {

    var item = document.createElement('div');
    item.className = 'note-item';
    item.className += (items[i].checked) ? ' note-green' : ' note-red';
    item.dataset.itemId = i;

    // On ajoute une action lors d'un clic
    item.addEventListener('click', function () {
      items[this.dataset.itemId].checked = (items[this.dataset.itemId].checked) ? false : true;
      displayItems();
    });

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if(items[i].checked) checkbox.checked = 'checked';
    item.appendChild(checkbox);

    if(i != 0) {
      var up = document.createElement('button');
      up.innerHTML = '↑';
      up.addEventListener('click', function (e) {
        e.stopPropagation();
        var currentItem = this.parentNode.dataset.itemId;
        var tmp = items[currentItem];
        items[currentItem] = items[currentItem-1];
        items[currentItem-1] = tmp;
        displayItems();
      });
      item.appendChild(up);
    }

    var content = document.createElement('p');
    content.innerHTML = items[i].title;
    item.appendChild(content);

    noteList.appendChild(item);

  }

  // On affiche un séparateur s'il y a des items
  if(items.length > 0) noteList.style.borderBottom = '5px solid #212121';
  else noteList.style.borderBottom = 'none';

  // On met le focus à nouveau sur l'input
  input.focus();

}

// Si on clique sur le bouton...
addBtn.addEventListener('click', function (e) {

  // On empêche l'envoi du formulaire
  e.preventDefault();

  // On exécute seulement si l'input n'est pas vide
  if(input.value != '') {
    items.push({
      title: input.value,
      checked: false
    });
    displayItems();
    input.value = '';
  }

});

// Pour supprimer les items checkés
noteRemove.addEventListener('click', function () {
  for (var i = items.length - 1; i >= 0; i--) {
    if(items[i].checked == true) items.splice(i, 1);
  }
  displayItems();
});

// On éxécute displayItems dans le cas où il y aurait déjà des items
// BONUS : On peut ajouter le stockage local (localStorage)
displayItems();
