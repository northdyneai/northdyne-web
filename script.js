// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Por ahora solo mostramos alerta
    alert('¡Gracias por tu interés! Te contactaremos en menos de 24 horas.');
    
    // Limpiar formulario
    this.reset();
    
    // Aquí conectaremos con Supabase después
    console.log('Datos del formulario:', data);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});