// Cambiar tema claro/oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carga tema guardado
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleThemeBtn.textContent = '☀️';
} else {
    toggleThemeBtn.textContent = '🌙';
}

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        toggleThemeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Enviar formulario con alert (aunque formsubmit hace el envío real)
document.querySelector('form').addEventListener('submit', function(e) {
    // Opcional: mostrar alerta
    alert('Mensaje enviado. ¡Gracias por contactarme!');
});
