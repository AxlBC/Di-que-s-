// Variables
let contador = 0;
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


// Botón Sí
function funcionSi() {
    img.src = "resources/gifs/gato-happy.gif";
}


// Botón No
function funcionNo() {
    let intento = 0;

    cambiarImagen(contador);
    if (contador < 3) {
        no.play();
        contador++;
        console.log(contador);
    } else {
        const tieneClickEvent = btnNo.onclick !== null;

        if (tieneClickEvent) {
            btnNo.removeEventListener('click', funcionNo);
            btnNo.addEventListener('click', movimientoRandom);
        }      
    }
}


// Movimiento del botón
function movimientoRandom() {
    console.log('Ahi estas');

    btnNo.style.position = 'absolute';

    const maxX = contenedor.clientWidth;
    const maxY = contenedor.clientHeight;

    console.log(`width: ${maxX}, height: ${maxY}`);

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    console.log(`widthBtn: ${randomX}, heightBtn: ${randomY}`);

    if (randomX > maxX * 0.85) {
        randomX -= randomX * 0.15;
        btnNo.style.left = (randomX - (randomX * 0.15)) + 'px';
    } else {
        btnNo.style.left = randomX + 'px';
    }
    
    btnNo.style.top = randomY + 'px';

    /*
    let min = 50;

    btnNo.style.left = (Math.random() * (window.screen.width - min)) + min + 'px';
    btnNo.style.top = (Math.random() * (window.screen.height - min)) + min + 'px';
    */

    no.play();
    console.log('se activa');

}


function cambiarImagen(contador) {
    if (contador < 3) {
        img.src = "resources/gifs/gato-crying.gif";
        img.alt = "imagen-2";
    } else {
        img.src = "resources/gifs/gato-angry.gif";
        img.alt = "imagen-3";
    }
}