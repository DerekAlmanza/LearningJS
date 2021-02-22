const getData = document.getElementById('getData');

getData.addEventListener('click', () => {
    let xhr;
    console.time('Recibir info');
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // Funciona a partir de v9.0
    else xhr = new ActiveXObject('Microsoft.XMLHTTP'); // Funciona para antes de v9.0

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // El link es una API fake

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        const lista = document.getElementById('lista');

        for (const usuarioInfo of dataJSON) {
            const itemLista = document.createElement('li');
            itemLista.innerHTML = `El ID del usuario es: <b>${usuarioInfo.id}</b> 
            y su nombre es: <b>${usuarioInfo.name}</b>`;
            lista.appendChild(itemLista);
        }
    })

    xhr.send();
    console.timeEnd('Recibir info');
})