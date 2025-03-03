import { postUsers } from "./services/llamados.js";

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const email = document.getElementById("email");
const registrar = document.getElementById("registrar");


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("usuario")) {
        usuario.value = localStorage.getItem("usuario");
    }
    if (localStorage.getItem("contraseña")) {
        contraseña.value = localStorage.getItem("contraseña");
    }
    if (localStorage.getItem("email")) {
        email.value = localStorage.getItem("email");
    }
});

registrar.addEventListener("click", function () {

    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("contraseña", contraseña.value);
    localStorage.setItem("email", email.value);


    postUsers(usuario.value, contraseña.value, email.value);
});
