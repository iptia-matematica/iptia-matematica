
const mamparas = [{ id:"10",  grupo:"10° B", titulo:"Teorema de Thales", profesor:"Cecilia Rodríguez",  dise1:41, dise2:45, dise3:44, dise4:44, cont1:43, cont2:45, cont3:43, cont4:45, tota1:84, tota2:90, tota3:87, tota4:89, puntaje:350 },{ id:"9",  grupo:"10° D", titulo:"Teorema de Thales", profesor:"Cecilia Rodríguez",  dise1:36, dise2:42, dise3:42, dise4:39, cont1:41, cont2:44, cont3:45, cont4:43, tota1:77, tota2:86, tota3:87, tota4:82, puntaje:332 },{ id:"15",  grupo:"12° H", titulo:"Teorema de Pitágoras", profesor:"Moisés Quintero",  dise1:39, dise2:43, dise3:44, dise4:33, cont1:34, cont2:44, cont3:45, cont4:34, tota1:73, tota2:87, tota3:89, tota4:67, puntaje:316 },{ id:"4",  grupo:"12° H", titulo:"Teorema de Thales", profesor:"Moisés Quintero",  dise1:40, dise2:41, dise3:35, dise4:40, cont1:36, cont2:39, cont3:37, cont4:40, tota1:76, tota2:80, tota3:72, tota4:80, puntaje:308 },{ id:"33",  grupo:"10° L", titulo:"Teorema de Thales", profesor:"Cecilia Rodríguez",  dise1:44, dise2:42, dise3:37, dise4:38, cont1:37, cont2:42, cont3:32, cont4:32, tota1:81, tota2:84, tota3:69, tota4:70, puntaje:304 },{ id:"36",  grupo:"10° N", titulo:"Del Salón a la Vida Real (Teorema de Thales)", profesor:"Mitzela Barrera",  dise1:42, dise2:42, dise3:32, dise4:36, cont1:35, cont2:45, cont3:34, cont4:38, tota1:77, tota2:87, tota3:66, tota4:74, puntaje:304 },{ id:"17",  grupo:"12° N", titulo:"La Circunferencia, la forma perfecta de la geometría", profesor:"Moisés Quintero",  dise1:41, dise2:43, dise3:32, dise4:36, cont1:39, cont2:42, cont3:31, cont4:32, tota1:80, tota2:85, tota3:63, tota4:68, puntaje:296 },{ id:"34",  grupo:"10° L", titulo:"Teorema de Thales", profesor:"Cecilia Rodríguez",  dise1:42, dise2:45, dise3:29, dise4:35, cont1:30, cont2:43, cont3:32, cont4:35, tota1:72, tota2:88, tota3:61, tota4:70, puntaje:291 },{ id:"2",  grupo:"12° L", titulo:"Sólidos de Revolución", profesor:"Moisés Quintero",  dise1:33, dise2:39, dise3:41, dise4:30, cont1:31, cont2:41, cont3:36, cont4:38, tota1:64, tota2:80, tota3:77, tota4:68, puntaje:289 },{ id:"5",  grupo:"10° N", titulo:"El Teorema de Thales", profesor:"Mitzela Barrera",  dise1:29, dise2:41, dise3:38, dise4:39, cont1:30, cont2:35, cont3:40, cont4:34, tota1:59, tota2:76, tota3:78, tota4:73, puntaje:286 },{ id:"27",  grupo:"11° L", titulo:"Geometría que rueda", profesor:"Mileibys Sánchez",  dise1:36, dise2:41, dise3:34, dise4:29, cont1:34, cont2:42, cont3:36, cont4:33, tota1:70, tota2:83, tota3:70, tota4:62, puntaje:285 },{ id:"1",  grupo:"12° F", titulo:"La Circunferencia", profesor:"Moisés Quintero",  dise1:33, dise2:34, dise3:33, dise4:34, cont1:31, cont2:38, cont3:39, cont4:40, tota1:64, tota2:72, tota3:72, tota4:74, puntaje:282 },{ id:"26",  grupo:"11° L", titulo:"La Parábola", profesor:"Mileibys Sánchez",  dise1:37, dise2:36, dise3:28, dise4:36, cont1:33, cont2:43, cont3:30, cont4:39, tota1:70, tota2:79, tota3:58, tota4:75, puntaje:282 },{ id:"37",  grupo:"11° H", titulo:"Geometría ", profesor:"Mileibys Sánchez",  dise1:34, dise2:43, dise3:35, dise4:33, cont1:26, cont2:45, cont3:28, cont4:35, tota1:60, tota2:88, tota3:63, tota4:68, puntaje:279 },{ id:"30",  grupo:"10° J", titulo:"Figuras Planas Área y Perímetro", profesor:"Cecilia Rodríguez",  dise1:38, dise2:38, dise3:34, dise4:26, cont1:32, cont2:40, cont3:34, cont4:33, tota1:70, tota2:78, tota3:68, tota4:59, puntaje:275 },{ id:"38",  grupo:"10° F", titulo:"Triángulo", profesor:"Mileibys Sánchez",  dise1:33, dise2:36, dise3:37, dise4:30, cont1:28, cont2:43, cont3:35, cont4:32, tota1:61, tota2:79, tota3:72, tota4:62, puntaje:274 },{ id:"3",  grupo:"12° H", titulo:"La Simetría Axial", profesor:"Moisés Quintero",  dise1:28, dise2:34, dise3:33, dise4:35, cont1:23, cont2:41, cont3:37, cont4:40, tota1:51, tota2:75, tota3:70, tota4:75, puntaje:271 },{ id:"16",  grupo:"12° N", titulo:"Solidos de Revolución", profesor:"Moisés Quintero",  dise1:32, dise2:35, dise3:35, dise4:30, cont1:27, cont2:39, cont3:37, cont4:34, tota1:59, tota2:74, tota3:72, tota4:64, puntaje:269 },{ id:"28",  grupo:"11° L", titulo:"Parábola", profesor:"Mileibys Sánchez",  dise1:33, dise2:36, dise3:37, dise4:28, cont1:32, cont2:37, cont3:36, cont4:28, tota1:65, tota2:73, tota3:73, tota4:56, puntaje:267 },{ id:"22",  grupo:"12° G", titulo:"El Teorema de Thales", profesor:"Dalys Villarreal",  dise1:36, dise2:31, dise3:33, dise4:32, cont1:30, cont2:41, cont3:31, cont4:31, tota1:66, tota2:72, tota3:64, tota4:63, puntaje:265 },{ id:"31",  grupo:"10° J", titulo:"Figuras Planas Área y Perímetro", profesor:"Cecilia Rodríguez",  dise1:29, dise2:34, dise3:22, dise4:26, cont1:38, cont2:39, cont3:31, cont4:34, tota1:67, tota2:73, tota3:53, tota4:60, puntaje:253 },{ id:"6",  grupo:"12° M", titulo:"La Circunferencia", profesor:"Moisés Quintero",  dise1:21, dise2:34, dise3:34, dise4:31, cont1:22, cont2:36, cont3:37, cont4:35, tota1:43, tota2:70, tota3:71, tota4:66, puntaje:250 },{ id:"11",  grupo:"12° I", titulo:"Simetría Axial", profesor:"Dalys Villarreal",  dise1:28, dise2:31, dise3:30, dise4:28, cont1:25, cont2:38, cont3:38, cont4:32, tota1:53, tota2:69, tota3:68, tota4:60, puntaje:250 },{ id:"18",  grupo:"12° N", titulo:"Teorema de Pitágoras", profesor:"Moisés Quintero",  dise1:28, dise2:29, dise3:30, dise4:34, cont1:27, cont2:33, cont3:32, cont4:34, tota1:55, tota2:62, tota3:62, tota4:68, puntaje:247 },{ id:"29",  grupo:"11° J", titulo:"Tributo a la Geometría", profesor:"Cecilia Rodríguez",  dise1:28, dise2:30, dise3:36, dise4:24, cont1:26, cont2:36, cont3:31, cont4:31, tota1:54, tota2:66, tota3:67, tota4:55, puntaje:242 },{ id:"25",  grupo:"10° Ñ", titulo:"Los Teoremas de Thales", profesor:"Cecilia Rodríguez",  dise1:28, dise2:32, dise3:25, dise4:27, cont1:27, cont2:44, cont3:25, cont4:28, tota1:55, tota2:76, tota3:50, tota4:55, puntaje:236 },{ id:"21",  grupo:"12° N", titulo:"El Teorema de Thales", profesor:"Moisés Quintero",  dise1:28, dise2:33, dise3:28, dise4:27, cont1:24, cont2:41, cont3:23, cont4:31, tota1:52, tota2:74, tota3:51, tota4:58, puntaje:235 },{ id:"19",  grupo:"12° F", titulo:"Secciones Cónicas", profesor:"Moisés Quintero",  dise1:23, dise2:28, dise3:29, dise4:31, cont1:23, cont2:37, cont3:19, cont4:33, tota1:46, tota2:65, tota3:48, tota4:64, puntaje:223 },{ id:"8",  grupo:"12° F", titulo:"Sólidos de Revolución", profesor:"Moisés Quintero",  dise1:21, dise2:31, dise3:30, dise4:28, cont1:18, cont2:40, cont3:20, cont4:31, tota1:39, tota2:71, tota3:50, tota4:59, puntaje:219 },{ id:"32",  grupo:"11° C-B", titulo:"Las Cónicas", profesor:"Mileibys Sánchez",  dise1:27, dise2:31, dise3:22, dise4:26, cont1:26, cont2:35, cont3:22, cont4:30, tota1:53, tota2:66, tota3:44, tota4:56, puntaje:219 },{ id:"39",  grupo:"12° Ñ", titulo:"Geometría", profesor:"Dalys Villarreal",  dise1:22, dise2:30, dise3:27, dise4:24, cont1:24, cont2:37, cont3:24, cont4:30, tota1:46, tota2:67, tota3:51, tota4:54, puntaje:218 },{ id:"14",  grupo:"12° L", titulo:"La Circunferencia", profesor:"Moisés Quintero",  dise1:30, dise2:27, dise3:27, dise4:26, cont1:24, cont2:34, cont3:18, cont4:28, tota1:54, tota2:61, tota3:45, tota4:54, puntaje:214 },{ id:"12",  grupo:"12° F", titulo:"La Semejanza de Triángulos", profesor:"Moisés Quintero",  dise1:14, dise2:23, dise3:25, dise4:28, cont1:19, cont2:34, cont3:26, cont4:36, tota1:33, tota2:57, tota3:51, tota4:64, puntaje:205 },{ id:"24",  grupo:"12° H", titulo:"Solidos de Revolución", profesor:"Moisés Quintero",  dise1:23, dise2:30, dise3:20, dise4:25, cont1:19, cont2:33, cont3:19, cont4:28, tota1:42, tota2:63, tota3:39, tota4:53, puntaje:197 },{ id:"13",  grupo:"12° F", titulo:"La Simetría Axial", profesor:"Moisés Quintero",  dise1:20, dise2:25, dise3:22, dise4:22, cont1:20, cont2:34, cont3:23, cont4:30, tota1:40, tota2:59, tota3:45, tota4:52, puntaje:196 },{ id:"7",  grupo:"12° C", titulo:"Teorema de Pitágoras", profesor:"Dalys Villarreal",  dise1:13, dise2:26, dise3:26, dise4:28, cont1:15, cont2:35, cont3:23, cont4:29, tota1:28, tota2:61, tota3:49, tota4:57, puntaje:195 },{ id:"35",  grupo:"10° C", titulo:"Las Cónicas", profesor:"Norma Centella",  dise1:15, dise2:29, dise3:22, dise4:22, cont1:18, cont2:40, cont3:20, cont4:28, tota1:33, tota2:69, tota3:42, tota4:50, puntaje:194 },{ id:"23",  grupo:"12° H", titulo:"La Circunferencia", profesor:"Moisés Quintero",  dise1:20, dise2:23, dise3:19, dise4:24, cont1:22, cont2:31, cont3:19, cont4:30, tota1:42, tota2:54, tota3:38, tota4:54, puntaje:188 },{ id:"20",  grupo:"12° N", titulo:"Simetría Axial", profesor:"Moisés Quintero",  dise1:15, dise2:24, dise3:22, dise4:24, cont1:14, cont2:27, cont3:12, cont4:22, tota1:29, tota2:51, tota3:34, tota4:46, puntaje:160 }];


const tablatonPre = [

];


function ordenarPorPuntajeDescendente(lista) {
  return lista.sort((a, b) => b.puntaje - a.puntaje);
}

// Aplicamos la función de ordenamiento
const rankingOrdenado = ordenarPorPuntajeDescendente(mamparas);

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
    
	document.getElementById('imgMampara').innerHTML = '<img src="img/'+mamparas[indice].id+'.png" class="mampara-img">';
    
	document.getElementById('grupo').value = mamparas[indice].grupo;
	document.getElementById('titulo').value = mamparas[indice].titulo;
	document.getElementById('profesor').value = mamparas[indice].profesor;
	
	document.getElementById('diseño1').value = mamparas[indice].dise1;
	document.getElementById('diseño2').value = mamparas[indice].dise2;
	document.getElementById('diseño3').value = mamparas[indice].dise3;
	document.getElementById('diseño4').value = mamparas[indice].dise4;
	
	document.getElementById('contenido1').value = mamparas[indice].cont1;
	document.getElementById('contenido2').value = mamparas[indice].cont2;
	document.getElementById('contenido3').value = mamparas[indice].cont3;
	document.getElementById('contenido4').value = mamparas[indice].cont4;
	
	document.getElementById('total1').value = mamparas[indice].tota1;
	document.getElementById('total2').value = mamparas[indice].tota2;
	document.getElementById('total3').value = mamparas[indice].tota3;
	document.getElementById('total4').value = mamparas[indice].tota4;
	
	document.getElementById('resultadoTotal').value = mamparas[indice].puntaje;	
	document.getElementById('popup').style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

cerrarPopup();




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




/*

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

*/