
let TIPO_CAMBIO = 0.00025
let inputPesos = document.getElementById("pesos")
let inputDolares = document.getElementById("dolares")

let convertirPesosADolares = () => {
    let pesos = parseFloat(inputPesos.value) || 0
    let dolares = pesos * TIPO_CAMBIO
    inputDolares.value = dolares.toFixed(2); // Limitar a 2 decimales
};


let convertirDolaresAPesos = () => {
    let dolares = parseFloat(inputDolares.value) || 0
    let pesos = dolares / TIPO_CAMBIO
    inputPesos.value = pesos.toFixed(2); // Limitar a 2 decimales
}

inputPesos.addEventListener("input", convertirPesosADolares)
inputDolares.addEventListener("input", convertirDolaresAPesos)