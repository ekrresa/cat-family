let catFamily = [
				{name: 'tiger', url: "img/tiger.png"}, {name: 'ocelot', url: "img/ocelot.jpg"},
				{name: 'leopard', url: "img/leopard.jpg"}, {name: 'cheetah', url: "img/cheetah.jpg"},
				{name: 'jaguar', url: "img/jaguar.jpg"}, {name: 'lion', url: "img/lion.jpg"},
				{name: 'lynx', url: "img/lynx.jpg"}, {name: 'cougar', url: "img/cougar.jpg"},
				{name: 'panther', url: "img/panther.jpg"}, {name: 'cat', url: "img/cat.jpg"},
				{name: 'liger', url: "img/liger.jpg"}, {name: 'tigon', url: "img/tigon.jpg"},
				{name: 'puma', url: "img/puma.jpg"}
				];


let input = document.querySelector('input');
let gallery = document.querySelector('.gallery');
let img = document.createElement("img");
let btn = document.querySelector("button");

window.addEventListener("load", input.focus());
input.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		if (e.target.value === "" || e.target.value === null) {
			alert('Please enter a cat specie');
			return;
		}
		gallery.innerHTML = "";
		findCat(e.target.value);
		e.target.value = "";
	}
});
btn.addEventListener('click', function () {
	if (input.value === "" || input.value === null) {
		alert('Please enter a cat specie');
		input.focus();
		return;
	}
	gallery.innerHTML = "";
	findCat(input.value);
	input.value = "";
})


function findCat (arg) {
	let present = false;

	for (const cat of catFamily) {
		if(arg.toLowerCase() === cat.name) {
			img.src = cat.url;
			gallery.style.opacity = 1;
			present = true;
			break;
		}
	}
	if (present === false) {
		alert(`Awww!!! ${arg} does not belong to the Cat Family!!!`);
		gallery.style.boxShadow = 'none';
	}

	gallery.appendChild(img);

}