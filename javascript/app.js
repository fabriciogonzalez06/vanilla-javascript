//obtener la referencia de los botones
const btnOcultar = document.getElementById("ocultar");
const btnMostrar = document.getElementById("mostrar");

//referencia de el div con la calse hworld
const hworld = document.querySelector("#hworld");



//escuchar evento click del boton ocultar
btnOcultar.addEventListener('click', function() {

    //removemos la clase mostrar en caso de que la tenga y le agregamos al elemento la clase ocultar
    hworld.classList.remove('mostrar');
    hworld.classList.add('ocultar');


});


//escuhar evento click del boton mostrar, se hace la funcion por aparte y se llama aqui, pero sin parentecis para no ejecutar la funcion
//cuando carge el navegador
btnMostrar.addEventListener('click', mostrarCaja);

//funcion que muestra el div con el elemento hworld
function mostrarCaja() {

    //removemos la clase ocultar y agregamos la clase mostrar, las clases estan en el archivo css
    hworld.classList.remove('ocultar');
    hworld.classList.add('mostrar');

}