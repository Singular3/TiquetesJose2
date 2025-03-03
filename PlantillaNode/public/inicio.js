import { getUsers } from "./services/llamados.js"

const idUsuario = document.getElementById("idUsuario")
const sede = document.getElementById("sede")
const fechaInicio = document.getElementById("fechaInicio")
const fechaFin = document.getElementById("fechaFin")
const codigoComputadora = document.getElementById("codigoComputadora")
const condiciones = document.getElementById("condiciones")
const enviarSolicitud = document.getElementById("enviarSolicitud")


enviarSolicitud.addEventListener("click", async function (event) {
    event.preventDefault()  

    if (!condiciones.checked) {
        alert("Debe aceptar las condiciones para enviar la solicitud.");
        return;
    }


    if (idUsuario.value === "" || sede.value === "" || fechaInicio.value === "" || fechaFin.value === "" || codigoComputadora.value === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const usuariosRegistrados = await getUsers()

    for (let index = 0; index < usuariosRegistrados.length; index++) {
        if (idUsuario.value === usuariosRegistrados[index].usuario) {
            
            if (usuariosRegistrados[index].tipo === "Admin") {
                window.location.href = "AdminPage.html";
            } else {
                window.location.href = "inicio.html";
            }

            
            
            alert("Solicitud enviada correctamente.");
            return;
        }
    }

    
    alert("Usuario no encontrado.");
})
