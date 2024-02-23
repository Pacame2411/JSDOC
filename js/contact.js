/**
 * Este script maneja la lógica para el formulario de contacto.
 * Previene el envío predeterminado del formulario, valida la entrada del usuario,
 * y muestra un mensaje de agradecimiento o un aviso para completar todos los campos.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto por su ID.
    const contactForm = document.getElementById('contactForm');

    // Añade un evento de envío al formulario de contacto.
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página al enviar el formulario.

        // Obtiene los valores del formulario.
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje están llenos antes de proceder.
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`); // Muestra un mensaje de agradecimiento.
            contactForm.reset(); // Resetea el formulario después del envío.
        } else {
            alert('Por favor, completa todos los campos.'); // Avisa al usuario que complete todos los campos.
        }
    });
});
