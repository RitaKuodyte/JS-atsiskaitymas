let formaReg = document.querySelector("form");
let listas = [];
formaReg.addEventListener("submit", function (e) {
	e.preventDefault();
	let vardas = formaReg["vardas"].value;
	let pavarde = formaReg["pavarde"].value;
	let mokykla = formaReg["mokykla"].value;
	let miestas = formaReg["miestas"].value;
	let sritis = formaReg["sritis"].value;
	let user = { vardas, pavarde, mokykla, miestas, sritis };
	console.log(user);
	listas.push(user);
});

let spausdintiBtn = document.querySelector("#btn-list");
let list = document.querySelector("#list");
spausdintiBtn.addEventListener("click", function(e){
	let sarasas = listas.map(function(user){
		return `<li>${user.vardas} ${user.pavarde} ${user.mokykla} ${user.miestas} ${user.sritis}</li>`;
	});
	list.innerHTML = sarasas.join("");
});

