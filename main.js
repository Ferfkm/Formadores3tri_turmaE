function tocaSomAplausos(){
    document.querySelector("#som_tecla_apalusos").play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");
listadeTeclas[0].onclick = tocaSomAplausos;