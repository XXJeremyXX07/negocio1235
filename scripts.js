document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrito
    let carrito = [];

    // Función para agregar productos al carrito
    window.agregarAlCarrito = function(producto, precio) {
        carrito.push({ nombre: producto, precio: parseFloat(precio) });
        actualizarCarrito();
    }

    // Función para actualizar el contenido del carrito en la página
    function actualizarCarrito() {
        const listaCarrito = document.querySelector('#carrito-items');
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carrito-item');
            itemDiv.innerHTML = `<span>${item.nombre} - $${item.precio.toFixed(2)}</span><button onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>`;
            listaCarrito.appendChild(itemDiv);
            total += item.precio;
        });

        // Actualizar el total
        document.getElementById('total-carrito').textContent = `Total: $${total.toFixed(2)}`;
    }

    // Función para eliminar un producto del carrito
    window.eliminarDelCarrito = function(nombreProducto) {
        carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
        actualizarCarrito();
    }

    // Función para vaciar el carrito
    document.querySelector('#vaciarCarrito')?.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // Mostrar la proforma
    document.getElementById('ver-proforma')?.addEventListener('click', () => {
        const carritoSection = document.getElementById('carrito');
        const proformaSection = document.getElementById('proforma');
        
        carritoSection.style.display = 'none';
        proformaSection.style.display = 'block';

        const proformaItems = document.getElementById('proforma-items');
        proformaItems.innerHTML = '';

        let total = 0;

        carrito.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('proforma-item');
            itemDiv.innerHTML = `<span>${item.nombre} - $${item.precio.toFixed(2)}</span>`;
            proformaItems.appendChild(itemDiv);
            total += item.precio;
        });

        // Actualizar el total a pagar
        document.getElementById('total-proforma').textContent = `Total a Pagar: $${total.toFixed(2)}`;
    });

    // Confirmar la compra y generar la proforma para WhatsApp
    document.getElementById('confirmar-compra')?.addEventListener('click', () => {
        let mensaje = 'Hola, estoy interesado en los siguientes productos:\n\n';
        let total = 0;
        
        carrito.forEach(item => {
            mensaje += `- ${item.nombre} - $${item.precio.toFixed(2)}\n`;
            total += item.precio;
        });
        
        mensaje += `\nTotal a pagar: $${total.toFixed(2)}`;
        mensaje += '\n\nPor favor, envíenme una proforma de compra.';

        // Encode the message to be used in the URL
        const mensajeEncoded = encodeURIComponent(mensaje);

        // WhatsApp phone number
        const telefono = '+51992754932'; // Cambia esto al número de WhatsApp adecuado

        // WhatsApp URL with the message
        const url = `https://wa.me/${telefono}?text=${mensajeEncoded}`;

        // Redirect to WhatsApp
        window.open(url, '_blank');
    });

    // Volver al carrito desde la proforma
    document.getElementById('volver-carrito')?.addEventListener('click', () => {
        document.getElementById('carrito').style.display = 'block';
        document.getElementById('proforma').style.display = 'none';
    });
});
