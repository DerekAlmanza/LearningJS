/* 
API que devuelve un objeto Navigator.geolocation que permite acceder a la ubicación del dispositivo.
Mas info en:
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation}

Métodos: * geolocation.getCurrentPosition(): Usado para obtener ubicación actual.
         * geolocation.watchPosition(): Usado para dar un manejador de seguimiento a cualquier cambio de posición. 
         * geolocation.clearWatch(): Utilizado para eliminar un manejador de seguimiento
*/

const geolocalizacionBoton = document.getElementById('geolocalizacionBoton');

geolocalizacionBoton.addEventListener('click', () => {
    const geolocalizacion = navigator.geolocation;

    geolocalizacion.getCurrentPosition(obtenerPos, error, opciones);
    
})

const obtenerPos = (posicion) => {
    console.log(posicion);
}

const error = (error) => {
    console.log(error);
}

const opciones = {
    enableHightAccuracy: true, // Da todos los permisos disponibles para localizar disp.
    timeout: 5000, // Tiempo asignado para guardar la info.
    maximumAge: 0 // Cuánta información se puede guardar en caché
}