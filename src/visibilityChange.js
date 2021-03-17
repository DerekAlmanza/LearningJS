const video = document.getElementById('video');

/* Forma larga */

// window.addEventListener('visibilitychange', () => {
//     if (document.visibilityState == "visible") {
//         console.log('Se reproduce el vídeo');
//         video.play();
//     } else if (document.visibilityState == "hidden") {
//         console.log('Se pausa el vídeo');
//         video.pause();
//     }
// })

/* Forma corta */

window.addEventListener('visibilitychange', () => {
    (document.visibilityState == 'visible') ? video.play() : video.pause();
})