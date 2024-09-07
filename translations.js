const translations = {
    es: {
        "page-title": "Canaletas y Servicios de Instalación",
        "company-name": "Nombre de la Empresa",
        "welcome-heading": "Bienvenido a Nombre de la Empresa",
        "welcome-text": "Ofrecemos las mejores canaletas y servicios de instalación profesional.",
        "catalog-heading": "Catálogo de Canaletas",
        "product-name-1": "Canaleta Modelo 1",
        "product-price-1": "$100",
        "product-description-1": "Descripción breve del producto.",
        "add-to-cart": "Agregar al carrito",
        "services-heading": "Servicios de Instalación",
        "services-text": "Ofrecemos instalación profesional de canaletas con la mejor calidad y garantía.",
        "contact-heading": "Contacto",
        "label-name": "Nombre:",
        "label-email": "Email:",
        "label-message": "Mensaje:",
        "submit": "Enviar",
        "footer-text": "&copy; 2024 Nombre de la Empresa. Todos los derechos reservados."
    },
    en: {
        "page-title": "Gutters and Installation Services",
        "company-name": "Company Name",
        "welcome-heading": "Welcome to Company Name",
        "welcome-text": "We offer the best gutters and professional installation services.",
        "catalog-heading": "Gutter Catalog",
        "product-name-1": "Gutter Model 1",
        "product-price-1": "$100",
        "product-description-1": "Brief description of the product.",
        "add-to-cart": "Add to Cart",
        "services-heading": "Installation Services",
        "services-text": "We offer professional gutter installation with the best quality and warranty.",
        "contact-heading": "Contact",
        "label-name": "Name:",
        "label-email": "Email:",
        "label-message": "Message:",
        "submit": "Send",
        "footer-text": "&copy; 2024 Company Name. All rights reserved."
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[language][key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}
