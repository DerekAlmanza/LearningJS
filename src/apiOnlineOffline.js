const alerta = document.getElementById('alerta');

addEventListener('online', (evento) => {
    configurarAlerta(1);
})

addEventListener('offline', (evento) => {
    configurarAlerta(0);
})

const configurarAlerta = (status) => {
    alerta.classList.remove('alerta--online');
    alerta.classList.remove('alerta--offline');

    status == 0 ?
        setTimeout(() => {
            alerta.innerHTML = '<b> Parece que estás offline ): </b>';
            alerta.classList.add('alerta--offline')
        }, 100)
        :
        setTimeout(() => {
            alerta.innerHTML = '<b> Me alegra informarte que estás online :) </b>';
            alerta.classList.add('alerta--online')
        }, 100)
}
