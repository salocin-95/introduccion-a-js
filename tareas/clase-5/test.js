const bienvenido = document.querySelector("#bienvenido");
const botonIngresar = document.querySelector("#ingresar");

botonIngresar.onclick = function() {
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    bienvenido.innerText = `Bienvenido ${nombre} ${apellido}`
    return false
}