/*
Agregar animacion de ingreso al formulario
*/

let boton = document.getElementById("newTask")
let formulario = document.getElementById("formElement")

let cancelar = document.getElementById("reset")

let guardar = document.getElementById("saveTask")

boton.addEventListener("click", () => {
    formulario.classList.add("active")
})

cancelar.addEventListener("click", () => {
    formulario.classList.remove("active")
})

guardar.addEventListener("click", () => {
    //console.log(createData())
    post()
})