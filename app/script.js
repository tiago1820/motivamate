const texto = document.getElementById('texto');
const nextButton = document.getElementById('next-btn');

let mensajes = [];

function cargarMensajes() {
    fetch('/datos/mensajes.json')// conviertes la respuesta en formato JSON 
        .then(respuesta => respuesta.json())// conviertes la respuesta en formato JSON 
        .then(datos => {//obtienes los datos JSON y los asignas a la variable 
            mensajes = datos.mensajes;
            siguienteMsj();
        })
        .catch(error => console.log('Error al cargar los mensajes:', error));
}

function siguienteMsj() {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    const mensaje = mensajes[randomIndex];
    texto.innerHTML = `<h1>${mensaje}</h1>`;
}

nextButton.addEventListener('click', siguienteMsj);

cargarMensajes();