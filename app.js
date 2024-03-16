// Medidas botón sí
let siAnchura = 0;
let siAltura = 0;

// Medidas botón sí
let noAltura = 0;
let noAnchura = 0;

// Botón Sí
function funcionSi() {
    let btnSi = document.getElementById('btnSi');
    let btnNo = document.getElementById('btnNo');

    // Agrandar boton Si
    /*
    siAnchura = btnSi.offsetWidth;
    siAltura = btnSi.offsetHeight;

    btnSi.style.height = (siAltura * 1.1) + 'px';
    btnSi.style.width = (siAnchura * 1.1) + 'px';

    console.log(`altura = ${siAltura}, anchura = ${siAnchura}`);
    */
}


// Botón No
function funcionNo() {
    // altura = 434, anchura = 1280
    let btnSi = document.getElementById('btnSi');
    let btnNo = document.getElementById('btnNo');

    const contenedor = btnSi.offsetParent;
    











    if (btnSi.offsetWidth < 1280) {
        siAltura = btnSi.offsetHeight;
        siAnchura = btnSi.offsetWidth;

        btnSi.style.height = (siAltura * 1.50) + "px";
        btnSi.style.width = (siAnchura * 1.50) + "px";
    } else {
        noAltura = btnNo.offsetHeight;
        noAnchura = btnNo.offsetWidth;

        console.log(noAltura);
        console.log(noAnchura);

        if (noAltura > 20) {
            btnNo.style.height = (noAltura * 0.9) + "px";
            btnNo.style.width = (noAnchura * 0.9) + "px";
        }
    }
}