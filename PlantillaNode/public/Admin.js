import { deleteUser } from "./services/llamados.js";
const boton = document.querySelector('.btn.aprobar');
const botonRechazar = document.querySelector('.btn.rechazar');


boton.addEventListener('click', function() {
  alert('¡Botón aprobado presionado!');
});

botonRechazar.addEventListener('click', function() {
  alert('¡Botón rechazado presionado!');
});
boton.addEventListener('click', function() {
    localStorage.setItem('botonAprobar', 'aprobado');
});

botonRechazar.addEventListener('click', function() {
    localStorage.setItem('botonRechazar', 'rechazado');
});

