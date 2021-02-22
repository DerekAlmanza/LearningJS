const getData = document.getElementById('getData');
const sendData = document.getElementById('sendData');
const listaRecibir = document.getElementById('listaRecibir');

getData.addEventListener('click', () => {
    console.time('Recibir info');
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(info => {

        const fragment = document.createDocumentFragment();
        for (const usuarioInfo of info.data) {
            const itemLista = document.createElement('li');
            itemLista.innerHTML = `El ID del usuario es: <b>${usuarioInfo.id}</b>   
            y su nombre es: <b>${usuarioInfo.name}</b>`;  
            fragment.appendChild(itemLista);
        }
            listaRecibir.appendChild(fragment);

    })
    .catch(error => console.log(error))
    console.timeEnd('Recibir info');
})

sendData.addEventListener('click', () => {
    console.time('Enviar info');
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            nombre: 'Derek',
            edad: 34,
            hijos: ['Diego', 'María', 'Andrés']
        }
    }).then(info => console.log(info.data))
    .catch(error => console.log(error))
    console.timeEnd('Enviar info');
})