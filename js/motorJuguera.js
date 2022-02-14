//Declarar variable para saber si la juguera esta encendida o apagada

let estadoJuguera = "apagado";//1ro
let juguera = document.getElementById("blender");//2do
let sonidoJuguera = document.getElementById ("blender-sound");//3ro
let botonjuguera = document.getElementById("blender-button-sound");//4to



// vamos a crear una Function que lo que hara es cambiar el estado de la juguera (encendido/apagado)

function controlarJuguera () {
   // se fijara en que estado esta la juguera y lo cambiará
   if (estadoJuguera == "apagado") {
      estadoJuguera = "encendido";
      hacerSonido();
      console.log("Encendido");
      juguera.classList.add("active");// activarlos despues3
} else {
   estadoJuguera = "apagado"
   hacerSonido();
   console.log("apagado");
   juguera.classList.remove("active");//activarlos despues3
}
}

//integrar el onClick(html) con controlarJuguera(1ro declaramos (letjuguera))
//revisar los estilos en css de las img y vincular la actividad de boton con el cambio de img..gif


//vinculacion de audio con html dos archivos de audio

//se pregunta si el sonido esta en pausa y si esta en pausa comienza de cero y si esta en uso lo vuelve a poner en cero
function hacerSonido(){
   if(sonidoJuguera.paused) {
      botonjuguera.play();
      sonidoJuguera.play();
   } else {
      botonjuguera.play();
      sonidoJuguera.pause();
      sonidoJuguera.currentTime = 0;
   }
}



