document.getElementById("botonCalcular").addEventListener("click", function() {
    let estatura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    if (estatura && peso) {
        let heightInMeters = estatura / 100
        let imc = peso / (heightInMeters * heightInMeters)
        document.getElementById("resultado").value = imc.toFixed(2)

        let estado = ""
        if (imc < 18.5) {
            estado = "Bajo peso"
        } else if (imc >= 18.5 && imc < 24.9) {
            estado = "Normal"
        } else if (imc >= 25 && imc < 29.9) {
            estado = "Sobrepeso"
        } else {
            estado = "Obeso"
        }
        document.getElementById("categoria").value = estado
    }
})
