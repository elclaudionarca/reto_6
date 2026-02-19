// Cambiar el contenido según la sección
function cambiarContenido(botonPulsado) {
    let textos = document.getElementById("viewContenido");
    
    if(botonPulsado.id === "btnInformacion1"){
        textos.innerHTML = "Cambio 1";
    }else {
        textos.innerHTML = "Cambio 2";
    }
}