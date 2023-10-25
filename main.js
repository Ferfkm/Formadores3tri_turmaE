function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = o;
while (contador < 9){
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador +1;
    console.log(contador);
}

