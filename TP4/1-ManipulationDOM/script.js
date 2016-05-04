var foo = document.getElementById('foo');
var bar = document.getElementById('bar');
var out = document.getElementById('out');

function refreshIndices() {
	var li = bar.querySelectorAll('li');
	for (var i = 0; i < li.length; i++) {
		li[i].dataset.indice = i;
	}
}

foo.addEventListener('click', function () {
	bar.querySelector('li').style.border = "5px solid #2980b9";
});

foo.querySelector('em').addEventListener('mouseover', function () {
	var secondItem = bar.querySelectorAll('li')[1].cloneNode(true);
	secondItem.addEventListener('click', function () {
		alert(this.dataset.indice);
		this.parentNode.removeChild(this);
		out.innerHTML += '<br>' + this.innerHTML;
	});
	bar.insertBefore(secondItem, bar.querySelectorAll('li')[1]);
	refreshIndices();
});;

var li = bar.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
	li[i].dataset.indice = i;
	li[i].addEventListener('click', function () {
		alert(this.dataset.indice);
		this.parentNode.removeChild(this);
		out.innerHTML += '<br>' + this.innerHTML;
	});
}

document.onkeypress = function(e) {
	var key;

	if(window.event) key = e.keyCode;
	else if(e.which) key = e.which;

	if(String.fromCharCode(key) == 'a') {
		var newItem = document.createElement('li');
		newItem.addEventListener('click', function () {
			alert(this.dataset.indice);
			this.parentNode.removeChild(this);
			out.innerHTML += '<br>' + this.innerHTML;
		});
		newItem.textContent = prompt('Nouvel item :');
		bar.appendChild(newItem);
		refreshIndices();
	}

}
