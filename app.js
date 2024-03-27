// Variables
let contador = 0;
const no = new Audio('resources/Pou-diciendo-no.mp3');

// Medidas botón sí
let siAnchura = 0;
let siAltura = 0;

// Medidas botón sí
let noAltura = 0;
let noAnchura = 0;

// Obtenemos todas las propiedades de los botones y el contenedor
let btnSi = document.getElementById('btnSi');
let btnNo = document.getElementById('btnNo');
const contenedor = document.getElementById('contenedorBotones');


// Botón Sí
function funcionSi() {
    
}


// Botón No
function funcionNo() {
    let intento = 0;

    if (contador < 7) {
        no.play();
        contador++;
        console.log(contador);
    } else {
        const tieneClickEvent = btnNo.onclick !== null;

        if (tieneClickEvent) {
            btnNo.removeEventListener('click', funcionNo);
            btnNo.addEventListener('mouseover', movimientoRandom);
        }      
    }


    // Agrandamos el boton Si hasta alcanzar el 90% de espacio del div
    /*
    if (btnSi.offsetWidth < (contenedor.offsetWidth * 0.90)) {
        siAltura = btnSi.offsetHeight;
        siAnchura = btnSi.offsetWidth;

        btnSi.style.height = (siAltura * 1.08) + 'px';
        btnSi.style.width = (siAnchura * 1.1) + 'px';
    } 
    // Lo ajustamos al 100% si sobrepasamos el 90% del espacio
    else {
        btnSi.style.width = '100%';
        console.log(btnSi.offsetWidth);

        if (btnSi.offsetWidth > (contenedor.offsetWidth * 0.92)) {
            btnNo.removeEventListener('click', funcionNo);
            btnNo.addEventListener('mouseover', movimientoRandom);

            //btnNo.addEventListener('mouseover', movimientoRandom());
            console.log('LLego hasta aqui')
        }
    }
    */
}


// Movimiento del botón
function movimientoRandom() {
    console.log('Ahi estas');
    let min = 150;
    btnNo.style.position = 'absolute';
    btnNo.style.left = (Math.random() * (window.screen.width - min)) + 'px';
    btnNo.style.top = (Math.random() * (window.screen.height - min)) + 'px';

    no.play();
    console.log('se activa');
}
