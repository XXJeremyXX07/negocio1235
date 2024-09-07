document.addEventListener('DOMContentLoaded', () => {
    // Cargar idioma por defecto
    setLanguage('es');

    // Manejar cambio de idioma
    document.getElementById('language-selector').addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // Inicializar carrito
    let carrito = [];

    // Función para agregar productos al carrito
    window.agregarAlCarrito = function(producto) {
        carrito.push(producto);
        actualizarCarrito();
    }

    // Función para actualizar el contenido del carrito en la página
    function actualizarCarrito() {
        const listaCarrito = document.querySelector('#carrito ul');
        listaCarrito.innerHTML = '';
        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
    }

    // Función para vaciar el carrito
    document.querySelector('#vaciarCarrito')?.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // Función de validación de formulario
    document.getElementById('contact-form')?.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !mensaje) {
            alert('Todos los campos son obligatorios.');
            return false;
        }

        // Aquí podrías agregar validación adicional para el email
        return true;
    }
});
document.getElementById('whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var whatsappNumber = '1234567890'; // Reemplaza con tu número de WhatsApp
    var whatsappMessage = `Hola, soy ${name} (${email}). Quiero decir: ${message}`;

    var whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
});
document.getElementById('whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var userMessage = document.getElementById('message').value;

    // Mensaje automático predeterminado
    var autoMessage = "Este es un mensaje automático. Gracias por contactarnos.";

    // Combinamos el mensaje automático con el mensaje del usuario
    var fullMessage = `${autoMessage}\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${userMessage}`;

    var whatsappNumber = '1234567890'; // Reemplaza con tu número de WhatsApp
    var whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(whatsappLink, '_blank');
});
