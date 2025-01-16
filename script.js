function showAlert() {
    document.getElementById('alert').style.display = 'block';
}

function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verifica las credenciales
    if (username === 'angelita' && password === '1234') {
        // Login exitoso
        document.getElementById('alert').style.display = 'none';
        navigateTo('screen2.html');
    } else {
        // Login fallido
        alert('Usuario o contraseña incorrectos');
    }
}

function navigateTo(page) {
    window.location.href = page;
}

function closePage() {
    window.close();
}