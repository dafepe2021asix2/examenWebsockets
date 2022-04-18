window.addEventListener('load', carga);

function carga() {

    //var socket = io.connect('http://localhost:3000/');
    var socket = io();

    document.getElementById("inputUsuario").addEventListener("keypress", leerInput);

    function leerInput(e) {
        var x =document.getElementById( e.target.id);
        socket.emit('dadesDesDelClient', {valor:x.value.toUpperCase()});
    }
    socket.on('dadesDesDelServidor', (data) => {
        console.log(data.data);
    });
}

