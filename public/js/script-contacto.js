
const formulario = document.getElementById("formulario");

formulario.onsubmit = (e) => {
    var nombre = e.target.nombre.value;
    var apellido = e.target.apellido.value;
    var correo = e.target.correo.value;
    var telefono = e.target.telefono.value;
    var comentario = e.target.comentario.value;
    alert(
        "Información de formulario: \n" +
        "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "Correo: " + correo + "\n" +
        "Teléfono: " + telefono + "\n" + 
        "Comentario: " + comentario
    );
}