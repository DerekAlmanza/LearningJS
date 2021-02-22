/**  Fetch API
Obtenemos recursos de la red con fetch().
Encapsula promesas, las crea automáticamente con solo poner fetch().
Métodos conocidos:  * arrayBuffer(): Para manipular el contenido del archivo, siendo (mp3, pdf, jpg, etc.).
                    * blob(): Cuando solo se va a trabajar con el archivo directamente, siendo (mp3, pdf, jpg, etc.). Binary Long OBject
                    * clone(): Crea un clon de unn objeto de respuesta 
                    * formData(): Se utiliza para leer los objetos formData.
                    * json(): Convierte json en JS. 
                    * text(): Se utiliza para leer archivos de texto. Codificado en UTF-8.
*/

const getData = document.getElementById('getData');
const sendData = document.getElementById('sendData');
const listaRecibir = document.getElementById('listaRecibir');
const listaEnviar = document.getElementById('listaEnviar');
const imagenBoton = document.getElementById('imagenBoton');
const pdfBoton = document.getElementById('pdfBoton');

/* Evento para obtener info */
getData.addEventListener('click', () => {

    // Promesas encapsuladas.
    console.time('Recibir info');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(info => info.ok ? Promise.resolve(info) : Promise.reject(info)) // Para verificar que todo bien.
        .then(info => info.json())
        .then(info => 
            {
            const fragment = document.createDocumentFragment();
                for (const usuarioInfo of info) {
                    const itemLista = document.createElement('li');
                    itemLista.innerHTML = `El ID del usuario es: <b>${usuarioInfo.id}</b>   
                    y su nombre es: <b>${usuarioInfo.name}</b>`;  
                    fragment.appendChild(itemLista);
                }
                listaRecibir.appendChild(fragment);
            })
    .catch(error => console.log(`${error} No sirve el link`))
    console.timeEnd('Recibir info');
})

/** Para hacer peticiones POST fetch admite un segundo parámetro: 
 fetch(url, {
     method: 'POST',
     body,
     headers: {Cabeceras de info sobre lo que eestamos enviando (imagen, audio, info, etc.)}
 })*/ 

/* Evento para mandar info */


sendData.addEventListener('click', () => {
    console.time('Enviar info');
    const persona = {
        nombre: 'Derek',
        edad: 34,
        hijos: ['Diego', 'María', 'Andrés']
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(persona),
        headers: {
            "Content-type": "application/json"
        }
    }).then(respuesta => respuesta.json()) // Aquí convetimos a json
    .then(info => console.log(info)) 

    console.log(persona);
    console.log(JSON.stringify(persona));
    console.timeEnd('Enviar info');
})

/** Visualizar imagen */
imagenBoton.addEventListener('click', () => {
    fetch('assets/jpg/dogo.jpeg')
    .then(imagen => imagen.blob())
    .then(imagen => {
        document.getElementById('imagen').src = URL.createObjectURL(imagen);
    })
})

/** Visualizar documento */
pdfBoton.addEventListener('click', () => {
    const msgExitoso = document.getElementById('msgExitoso');
    msgExitoso.innerHTML = `<i> Pulse descargar para descargar el pdf </i>`;
    fetch('assets/pdf/demo.pdf')
    .then(pdf => pdf.blob())
    .then(pdf => {
        document.getElementById('pdf').href = URL.createObjectURL(pdf);
    })
    
})

