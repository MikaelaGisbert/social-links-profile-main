console.log("Hola Mundo")
function suma(x,y){
    let resultado;
    debugger;
    resultado = x+y;
    return resultado
}
let boton = document.querySelector("button")
boton.name = "otroNombre"
let facebook = document.createElement("button")
let texto = document.createTextNode("Facebook")
facebook.appendChild(texto)
let botones = document.querySelector(".botones")
botones.appendChild(facebook)