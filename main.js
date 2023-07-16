const notificacionesContenedor = document.querySelectorAll(".notificaciones-preview");
const marcarLeido = document.getElementById("boton-leido");
const circulito = document.querySelectorAll("#circulito");
const numeritoNotificaciones = document.getElementById("numerito-notificaciones");
let notificacionSinLeer = document.querySelectorAll(".no-leido");


numeritoNotificaciones.innerText = notificacionSinLeer.length;

marcarLeido.addEventListener("click", () => {
    notificacionesContenedor.forEach(notificacion => notificacion.classList.add("leido"))
    notificacionesContenedor.forEach(notificacion => notificacion.classList.remove("no-leido"))
    circulito.forEach(circulito => circulito.style.display="none")
    cambiarNumerito();
})

function cambiarNumerito(){
    notificacionSinLeer = document.querySelectorAll(".no-leido");
    numeritoNotificaciones.innerText = notificacionSinLeer.length;
}

notificacionesContenedor.forEach(notificacion => {

    notificacion.addEventListener("click", (e) => {
        e.currentTarget.classList.add("leido")
        e.currentTarget.classList.remove("no-leido")
        cambiarNumerito();

        var circulo = e.currentTarget.querySelector('#circulito');
        // Obtener el elemento con el ID "circulito" dentro del elemento padre
        if (circulo) {
            circulo.remove();
          }
    })
})
