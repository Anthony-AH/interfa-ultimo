body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
}

body {
    background-color: #f0e68c;
    min-height: 100vh;
}

.container, .screen2, .screen3 {
    display: none;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
}

.container.active, .screen2.active, .screen3.active {
    display: flex;
}

.panda {
    width: min(200px, 60vw);
    height: auto;
    margin: 10px 0;
}

h1 {
    font-size: clamp(1.2rem, 5vw, 2rem);
    margin: 10px;
    padding: 0 15px;
}

h2 {
    font-size: clamp(1rem, 4vw, 1.5rem);
    margin: 10px;
    padding: 0 15px;
}

.heart-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin: 10px 0;
}

.heart-button img {
    width: min(30px, 8vw);
    height: auto;
    transition: transform 0.3s ease;
}

.heart-button:hover img {
    transform: scale(1.1);
}

.alert {
    display: none;
    padding: 20px;
    background-color: pink;
    color: black;
    margin: 20px auto;
    border-radius: 5px;
    width: min(80%, 300px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.alert input {
    width: 90%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.alert button {
    padding: 8px 20px;
    margin-top: 10px;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.image-container {
    width: 90%;
    height: auto;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 10px auto;
}

.scaled-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.buttons {
    position: fixed;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 10;
    padding: 0 20px;
    box-sizing: border-box;
}

/* Media queries para dispositivos móviles */
@media (max-width: 480px) {
    .container, .screen2, .screen3 {
        padding: 10px;
    }

    .image-container {
        width: 95%;
        height: auto;
    }

    .buttons {
        bottom: 10px;
    }
}

/* Para pantallas muy pequeñas */
@media (max-height: 500px) {
    body {
        min-height: auto;
    }

    .container, .screen2, .screen3 {
        padding-top: 40px;
        padding-bottom: 60px;
    }

    .image-container {
        max-height: 60vh;
    }
}


/* sta pantalla sin scrooll */
el ultimo esta con esoi
Manejo mejorado del scroll:

Activación automática de barras de desplazamiento cuando sea necesario
Scroll suave en contenedores e imágenes
Mejor manejo de contenido en pantallas pequeñas


Ajustes de posicionamiento:

Botones ahora son "sticky" para mejor navegación
Contenedores principales permiten scroll
Mejor manejo de alturas mínimas


Mejoras en la accesibilidad:

Scroll disponible en el alert si es necesario
Mejor visibilidad de elementos en pantallas pequeñas
Fondo semi-transparente para los botones


Optimizaciones adicionales:

Mejor manejo de imágenes en diferentes tamaños de pantalla
Ajustes específicos para dispositivos muy pequeños
Soporte mejorado para orientación landscape



Para implementar:

Reemplaza tu CSS actual con este código
Prueba en diferentes dispositivos y orientaciones
Verifica que el scroll funcione correctamente en todas las pantallas

¿Necesitas que ajuste algo más o que explique alguna parte en particular?