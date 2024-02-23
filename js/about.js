/**
 * Este script maneja la lógica para cambiar imágenes al hacer clic en ellas.
 * Se inicializa al cargar el documento, cargando la primera imagen del array `images` y
 * luego rotando a través de las imágenes en el array cada vez que se hace clic en la imagen actual.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Array de rutas de imágenes a mostrar.
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    let currentIndex = 0; // Índice actual de la imagen mostrada.

    // Crea un elemento de imagen y lo añade al DOM en la clase `.content`.
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex]; // Establece la imagen inicial.
    document.querySelector('.content').appendChild(imageElement);

    // Evento de clic para cambiar la imagen actual por la siguiente en el array.
    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Actualiza el índice circularmente.
        imageElement.src = images[currentIndex]; // Cambia la fuente de la imagen.
    });
});
