// Enlève les balises html contenues dans un string
function strip_tags(html){
	if(arguments.length < 3) {
		html = html.replace(/<\/?(?!\!)[^>]*>/gi, '');
	} else {
		var allowed = arguments[1];
		var specified = eval("["+arguments[2]+"]");
		if(allowed){
			var regex = '</?(?!(' + specified.join('|') + '))\b[^>]*>';
			html = html.replace(new RegExp(regex, 'gi'), '');
		} else{
			var regex='</?(' + specified.join('|') + ')\b[^>]*>';
			html = html.replace(new RegExp(regex, 'gi'), '');
		}
	}
	var clean_string = html;
	return clean_string;
}

// On analise les différents éléments du formulaire
document.querySelector('form').addEventListener('submit', function (e) {

	// On bloque l'envoi du formulaire
	e.preventDefault();

	// On créer un tableau avec les éléments des inputs (name => value)
	var inputsList = document.querySelectorAll('input[name], select');
	var inputs = [];
	for (var i = 0; i < inputsList.length; i++) {
		var el = inputsList[i];
		if(el.type == 'checkbox') {
			inputs[el.name] = (el.checked) ? strip_tags(el.value) : 0;
		} else if(el.type == 'radio') {
			if(el.checked && !(el.name in inputs)) inputs[el.name] = strip_tags(el.value);
		} else {
			inputs[el.name] = strip_tags(el.value);
		}
	}

	// On vérifie si l'utilisateur a bien accepté les CGU
	if(inputs['cgu'] != 1) alert('Veuillez accepter les CGU !');
	else {
		var text = "Votre adresse mail est : " + inputs['mail']
				 + " et votre pseudo est : " + inputs['pseudo']
				 + " votre mot de passe ne sera pas affiché ici."
				 + " Votre numéro de téléphone est " + inputs['phone']
				 + " et l'abbréviation de votre pays est : " + inputs['country']
				 + ". Je sais également que votre sexe est " + inputs['sex']
				 + " (M=homme, F=femme, O=autre)."
				 + " De plus, vous avez acceptés les CGU et "
				 + inputs['newsletter'] + " (0=refusé, 1=accepté) la newsletter.";
		document.getElementById('result').innerHTML = text;
	}

});