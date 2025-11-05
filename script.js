
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


let target = new Date("Nov 18, 2025 00:00:00").getTime();
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

  countdown.innerHTML = ` ${d}d ${h}h ${m}m ${s}s`;
}, 1000);