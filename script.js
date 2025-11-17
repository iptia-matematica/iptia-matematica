/*
const equipos = [
  { id:"tablaton",  grupo: "11°C", titulo: "Geometría Power", profesor:"Anthony Puentes",  dise1:25, dise2:30, dise3:16, dise4:32, cont1:47, cont2:16, cont3:11, cont4:38, tota1:24, tota2:36, tota3:41, tota4:39, puntaje: 212 },
  { id:2,  grupo: "12°B", titulo: "Los Matemáticos",   profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 198 },
  { id:3,  grupo: "10°B", titulo: "Los Cuadriláteros", profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 279 },
  { id:4,  grupo: "10°A", titulo: "Pi Team",           profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 189 },
  { id:5,  grupo: "9°B",  titulo: "Los Integrales",    profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 272 },
  { id:6,  grupo: "8°B",  titulo: "Potencia Team",     profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 165 },
  { id:7,  grupo: "11°B", titulo: "Ángulos Pro",       profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 283 },
  { id:8,  grupo: "12°A", titulo: "Raíz Cuadrada",     profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 185 },
  { id:9,  grupo: "8°A",  titulo: "Matemágicos",       profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 100 },
  { id:10, grupo: "9°A",  titulo: "Los Calculadores",  profesor:"Anthony Puentes", dise1:20, dise2:20, dise3:20, dise4:20, cont1:20, cont2:20, cont3:20, cont4:20, tota1:20, tota2:20, tota3:20, tota4:20, puntaje: 100 }
];


function ordenarPorPuntajeDescendente(lista) {
  return lista.sort((a, b) => b.puntaje - a.puntaje);
}

// Aplicamos la función de ordenamiento
const rankingOrdenado = ordenarPorPuntajeDescendente(equipos);

// Contenedor donde se mostrará el ranking
const contenedor = document.getElementById('ranking-container');

// Generar dinámicamente la lista ordenada
rankingOrdenado.forEach((equipo, index) => {
  const item = document.createElement('a');
  item.classList.add('ranking-item');

  // Marcar las primeras 5 posiciones con color especial
  
  item.innerHTML = '';
  
  if (index < 5) {
    item.classList.add(`top`);
	item.innerHTML = item.innerHTML + `<div class="selec on"> </div>`;
  }else{
	item.innerHTML = item.innerHTML + `<div class="selec"> </div>`;
  }

  item.innerHTML = item.innerHTML + `<div class="posicion"> ${index + 1}</div>
    <div class="detalles">
      <span class="grupo">${equipo.grupo}</span>
      <span class="titulo">${equipo.titulo}</span>
    </div>
    <div class="puntos"><p>${equipo.puntaje} pts </p></div>
  `;
  
  item.addEventListener("click", function() {
    abrirPopup(index);
  });

  contenedor.appendChild(item);
});

function abrirPopup(indice) {
    
	document.getElementById('imgMampara').innerHTML = '<img src="img/'+equipos[indice].id+'.png" class="mampara-img">';
    
	document.getElementById('grupo').value = equipos[indice].grupo;
	document.getElementById('titulo').value = equipos[indice].titulo;
	document.getElementById('profesor').value = equipos[indice].profesor;
	
	document.getElementById('diseño1').value = equipos[indice].dise1;
	document.getElementById('diseño2').value = equipos[indice].dise2;
	document.getElementById('diseño3').value = equipos[indice].dise3;
	document.getElementById('diseño4').value = equipos[indice].dise4;
	
	document.getElementById('contenido1').value = equipos[indice].cont1;
	document.getElementById('contenido2').value = equipos[indice].cont2;
	document.getElementById('contenido3').value = equipos[indice].cont3;
	document.getElementById('contenido4').value = equipos[indice].cont4;
	
	document.getElementById('total1').value = equipos[indice].tota1;
	document.getElementById('total2').value = equipos[indice].tota2;
	document.getElementById('total3').value = equipos[indice].tota3;
	document.getElementById('total4').value = equipos[indice].tota4;
	
	document.getElementById('resultadoTotal').value = equipos[indice].puntaje;	
	document.getElementById('popup').style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

cerrarPopup();
*/



function tab(index){
    let tab1 = document.getElementById("tab1");
	let tab2 = document.getElementById("tab2");
	
	let body1 = document.getElementById("tabBody1");
	let body2 = document.getElementById("tabBody2");
	
	if (tab1.classList.contains("active")) {
        tab1.classList.remove("active");
    }
	
	if (tab2.classList.contains("active")) {
        tab2.classList.remove("active");
    }
	
	if (body1.classList.contains("oculto")) {
        body1.classList.remove("oculto");
    }
	
	if (body2.classList.contains("oculto")) {
        body2.classList.remove("oculto");
    }
		
	switch(index){
		case 1: tab1.classList.add("active"); body2.classList.add("oculto"); break;
		case 2: tab2.classList.add("active"); body1.classList.add("oculto"); break;
	}
}






let target = new Date("Nov 18, 2025 07:00:00").getTime();
let countdown = document.getElementById("countdown");

setInterval(function () {
  let now = new Date().getTime();
  let diff = target - now;

  if (diff <= 0) {
    countdown.innerHTML = "¡Los resultados ya están disponibles!";
    return;
  }

  let d = Math.floor(diff / (1000*60*60*24));
  let h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  let m = Math.floor((diff % (1000*60*60)) / (1000*60));
  let s = Math.floor((diff % (1000*60)) / 1000);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

