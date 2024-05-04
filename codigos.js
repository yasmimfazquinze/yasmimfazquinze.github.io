let fotos = [
	{
		nome: "yasmim.jpg",
		valor: 0,
		active: true
	},
	{
		nome: "interiorLimusine.jpg",
		valor: 1,
		active: false
	},
	{
		nome: "limusine.jpg",
		valor: 2,
		active: false
	},
]

const fotoDireita = () =>{

	let x = fotos.findIndex((item) => item.active == true);
	if(x == 0){
		$("#fotocarrossel").attr("src", fotos[1].nome)
		fotos[1].active = true;
		fotos[0].active = false;
	}
	if(x == 1){
		$("#fotocarrossel").attr("src", fotos[2].nome)
		fotos[2].active = true;
		fotos[1].active = false;
	}
	if(x == 2){
		$("#fotocarrossel").attr("src", fotos[0].nome)
		fotos[0].active = true;
		fotos[2].active = false;
	}
}

const fotoEsquerda = () =>{

	let x = fotos.findIndex((item) => item.active == true);
	if(x == 0){
		$("#fotocarrossel").attr("src", fotos[2].nome)
		fotos[2].active = true;
		fotos[0].active = false;
	}
	if(x == 1){
		$("#fotocarrossel").attr("src", fotos[0].nome)
		fotos[0].active = true;
		fotos[1].active = false;
	}
	if(x == 2){
		$("#fotocarrossel").attr("src", fotos[1].nome)
		fotos[1].active = true;
		fotos[2].active = false;
	}
}

