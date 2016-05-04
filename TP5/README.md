# Voir le résultat

Pour voir le rendu de ce script, vous pouvez vous rendre sur la page suivante : https://rawgit.com/ludovicm67/L1S2-ProgWeb/master/TP5/index.html

# Formulaires et JavaScript

Dans cet exercice, vous allez réaliser un petit jeu de devinette en associant du JavaScript à un formulaire.

Le principe est le suivant : l'ordinateur choisit un nombre caché entre 0 et 1 000 et le joueur doit le trouver en un minimem de coups.
A chaque coup, le programme vous dira si votre réponse est inférieure, égale, ou supérieure à la réponse attendue.

Suivez les instructions suivantes pour réaliser ce programme :

 * Créez un formulaire contenant deux boutons
    - Le premier doit permettre de lancer une nouvelle partie
    - Le second doit permettre d'afficher la solution
 * Ajoutez à ce formulaire une zone de saisie de type `text` permettant de faire une devinette
 * Aoutez-y également une zone d'affichage de type `textarea` en lecture seule qui permettra au programme d'afficher des informations sur votre résultat. Est-il trop grand, trop petit, ou est-ce la bonne réponse?
 * Réalisez une fonction permettant de vérifier que l'entrée de l'utilisateur est bien un entier entre 0 et 1 000. Affichez une erreur si ce n'est pas le cas.
 * Si le nombre entré par l'utilisateur est le bon, un message de félicitations l'informant du nombre de coups que cela a pris doit être affiché. Réalisez la ou les fonctions nécessaires.

# Note personnelle concernant ma réalisation

J'ai choisis volontairement de faire un style minimaliste, en occupant tout l'espace. J'aurais encore pu ajuster les marges intérieures (padding), jouer avec les couleurs, la taille du texte, etc... Mais cela chacun peut le faire suivant ses propres goûts, et cela permet à toutes les personnes consultant ce code d'avoir un code propre et simple à comprendre. J'ai également pris soin de bien commenter mon JavaScript, donc normalement tout devrait être assez clair.
