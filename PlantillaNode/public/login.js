import { getUsers } from "./services/llamados.js"

const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const login = document.getElementById("login")


login.addEventListener("click", async function () {


      const usuariosRegistrados = await getUsers()

      for (let index = 0; index < usuariosRegistrados.length; index++) {

          if (usuario.value === usuariosRegistrados[index].usuario && contraseña.value === usuariosRegistrados[index].contraseña) {



            if (usuariosRegistrados[index].tipo==="Admin") {

                window.location.href="AdminPage.html"  

            }else{
                  window.location.href="inicio.html"
            }

           

          }
            

      }
            
      

})



      