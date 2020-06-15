//obtener la referencia de los botones
const btnOcultar = document.getElementById("ocultar");
const btnMostrar = document.getElementById("mostrar");

//referencia de el div con la calse hworld
const hworld = document.querySelector("#hworld");

//objeto json de javascript
const lenguajes = [
    { nombre: "javascript", tipo: "web y backend con nodejs" },
    { nombre: "java", tipo: "proposito general" },
    { nombre: "python", tipo: "proposito general" }
];


function mostrarLenguajesEnConsola() {
    for (let i = 0; i < lenguajes.length; i++) {
        console.log(lenguajes[i]);
    }
}
mostrarLenguajesEnConsola();






//peticion http a una api para mostrar los datos en consola
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res => res.json()))
    .then((respuesta) => {
        console.log(respuesta);
    });


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