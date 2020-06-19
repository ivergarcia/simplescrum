delete  Hammer.defaults.cssProps.userSelect

const body = document.getElementById("body")
const hammerJs = new Hammer(body)
hammerJs.on("panleft panright", ev => {
    if(ev.pointerType === "touch") {
        if(ev.type === "panleft" && ev.distance > 100) {
            formulario.classList.add("active")
        }
        if(ev.type === "panright" && ev.distance > 100) {
            formulario.classList.remove("active")
        }
    }   
})