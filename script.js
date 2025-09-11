// Configuración de Supabase
const SUPABASE_URL = 'https://qudjjdrluspriezkbkjk.supabase.co'; // Reemplaza con tu URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1ZGpqZHJsdXNwcmllemtia2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTU4NjgsImV4cCI6MjA3MzA5MTg2OH0.eA8DbFJTDiTFU6-26mkAFHnWgjHliM83Xxh8hLQomc0'; // Reemplaza con tu anon key

// Inicializar cliente de Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Deshabilitar el botón mientras se envía
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    try {
        // Guardar en Supabase
        const { data: result, error } = await supabaseClient
            .from('Leads')
            .insert([{
                empresa: data.empresa,
                email: data.email,
                servicio: data.servicio,
                mensaje: data.mensaje
            }]);
        
        if (error) {
            throw error;
        }
        
        // Éxito
        alert('¡Gracias por tu interés! Te contactaremos en menos de 24 horas.');
        this.reset();
        console.log('Lead guardado exitosamente:', result);
        
    } catch (error) {
        // Error
        console.error('Error al guardar lead:', error);
        alert('Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente a northdyne.ai@gmail.com');
    } finally {
        // Rehabilitar el botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


