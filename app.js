// Variables
let contador = 0;
const imagenes = ['resources/gifs/gato-angry.gif', 'resources/gifs/gato-corazones.gif', 'resources/gifs/gato-crying.gif', 'resources/gifs/gato-dance.gif', 'resources/gifs/gato-happy.gif'];
const no = new Audio('resources/sounds/Pou-diciendo-no.mp3');

// Medidas botón sí
let siAnchura = 0;
let siAltura = 0;

// Medidas botón sí
let noAltura = 0;
let noAnchura = 0;

// Obtenemos todas las propiedades de los botones y el contenedor
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const contenedor = document.getElementById('contenedorBotones');

// Obtenemos la imagen 
let img = document.getElementById('gif');


//console.log(`contenedorWidth: ${contenedor.clientWidth}, contenedorHeight: ${contenedor.clientHeight}`);




// Botón Sí
function funcionSi() {
    img.src = imagenes[4];
}


// Botón No
function funcionNo() {
    console.log(contador + 1);
    no.play();

    if (contador < 2) {
        cambiarImagen(imagenes[2]);
    } else {
        if (btnNo.position !== 'absolute') {
            btnNo.style.position = 'absolute';
        }
        const posiciones = movimientoRandom();
        //console.log(`posicionX: ${posiciones[0]}, posicionY: ${}`)
        btnNo.style.left = posiciones[0] + 'px';
        btnNo.style.top = posiciones[1] + 'px';
    }
    contador++;
}


// Movimiento del botón
function movimientoRandom() {
    const maxX = contenedor.clientWidth - btnNo.clientWidth;
    const maxY = contenedor.clientHeight - btnNo.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    return [randomX, randomY];
}


function cambiarImagen(contador) {
    if (contador < 3) {
        img.src = imagenes[2];
        img.alt = "imagen-2";
    } else {
        img.src = imagenes[0];
        img.alt = "imagen-3";
    }
}