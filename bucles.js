

// PUNTO 1
//Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos). 
/*
var numero = 4
    for (var i = 1; i <= 10; i++) {
                console.log(numero * i);
    }*/

// PUNTO 2
//Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0. 
/*
let suma = 0
let numero

do {
    numero = parseInt(prompt("Ingresa un número:"), 10)
    if (numero !== 0) {
        suma += numero
    }
} while (numero !== 0)

alert("La suma acumulada es: " + suma)*/

// PUNTO 3
//Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado. 
/*
let numeroSecreto = 42

alert("¡Bienvenido al juego de adivinar el número!")
alert("He pensado en un número entre 1 y 100. ¡Intenta adivinarlo!")

let intentos = 0
let adivinado = false

for (let i = 0; i < 10; i++) {
    let intento = parseInt(prompt("Ingresa tu intento:"))
    intentos++

    if (intento === numeroSecreto) {
        adivinado = true
        alert("¡Correcto! Lo has adivinado en " + intentos + " intentos.")
        break
    } else if (intento < numeroSecreto) {
        alert("Intenta de nuevo. El número que ingresaste es menor.")
    } else {
        alert("Intenta de nuevo. El número que ingresaste es mayor.")
    }
}*/

// PUNTO 4
//Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el numero ya no es primo. 
/*
function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

let numero = 8
if (esPrimo(numero)) {
    console.log(numero + " es primo.")
} else {
    console.log(numero + " no es primo.")
}*/

// PUNTO 5
//Realizar un programa que permita dado un numero, mostrar todos sus divisores
/*
let numero = parseInt(prompt("Ingrese un número:"))

alert("Los divisores de " + numero + " son:")

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        alert(i)
    }
}*/

// PUNTO 6
// Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array. 
// Array de ejemplo con 10 elementos
/*
let miArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log("Recorriendo el array y mostrando cada elemento:")

for (let i = 0; i < miArray.length; i++) {
    console.log("Elemento " + (i + 1) + "= " + miArray[i])
}*/

// PUNTO 7
//Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos. 
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {

    let doble = numeros[i] * 2
    
    console.log("El doble de " + numeros[i] + " es " + doble)
}*/

// punto 8
//Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array. 
/*
let grupoFamiliar = [
    { nombre: "Juan",  edad: 50, relacion: "Padre", ocupacion: "Ingeniero" },
    { nombre: "María", edad: 38, relacion: "Madre", ocupacion: "Doctora" },
    { nombre: "Luis", edad: 16, relacion: "Hijo", ocupacion: "Estudiante" },
    { nombre: "Ana", edad: 14, relacion: "Hija", ocupacion: "Estudiante" },
    { nombre: "Carlos", edad: 70, relacion: "Abuelo", ocupacion: "Jubilado"}
]

for (let i = 0; i < grupoFamiliar.length; i++) {
    
    let persona = grupoFamiliar[i]
    let mensaje = "Hola, mi nombre es " + persona.nombre + ". Tengo " + persona.edad + " años, soy el/la " + persona.relacion + " y mi ocupación es " + persona.ocupacion + "."
    console.log(mensaje)
}*/

// PUNTO 9
//Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares. 
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
    
    let esImpar = (numeros[i] % 2 !== 0)
    
    if (esImpar) {
        console.log(numeros[i])
    }
}*/

// PUNTO 10
//Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0. 
/*
let numero
let sumaPares = 0
let sumaImpares = 0

while (true) {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"))

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        sumaPares += numero
    } else {
        sumaImpares += numero
    }
}

alert("La suma de los números pares es: " + sumaPares)
alert("La suma de los números impares es: " + sumaImpares)*/

// PUNTO 11
//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande. 
/*
let numeros = [15, 2, 7, 10, 45, 23, 1, 8, 32, 9]

let numeroMasGrande = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i]
    }
}
alert("El número más grande en el array es: " + numeroMasGrande)*/

// PUNTO 12
//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico. 
/*
let numeros = [25, 17, 8, 42, 13, 6, 19, 31, 55, 10]

let menor = numeros[0]


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}
console.log("El número más pequeño es:", menor)
alert("El número más pequeño es: " + menor)*/

// PUNTO 13
//Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora. 
/*
let ganador = false

while (ganador == false) {
    juegoJugador1 = parseInt(prompt("Ingrese la opcion jugador1 (1- piedra, 2- papel, 3- tijera) ingresa la opcion en numero"))
    juegoJugador2 = parseInt(prompt("Ingrese la opcion jugador2 (1- piedra, 2- papel, 3- tijera) ingresa la opcion en numero"))

    if (juegoJugador1 == 1 && juegoJugador2 == 3 || juegoJugador1 == 2 && juegoJugador2 == 1 || juegoJugador1 == 3 && juegoJugador2 == 2) {
        ganador = true
        console.log("Felicitaciones gano el jugador 1")    
    } else if (juegoJugador2 == 1 && juegoJugador1 == 3 || juegoJugador2 == 2 && juegoJugador1 == 1 || juegoJugador2 == 3 && juegoJugador1 == 2) {
        ganador = true
        console.log("Felicitaciones gano el jugador 2")
    } else {
        console.log("Empataron los jugadores vuelva a intentarlo")
    }    
}*/

// PUNTO 14
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
/*
let fila = 1;

while (fila <= 5) {
  let linea = ''
  let contadorAsteriscos = 0
  while (contadorAsteriscos < fila) {
    linea += '* '
    contadorAsteriscos++
  }
  console.log(linea)
  fila++
}*/

// punto 15
//.Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido
/*
let asterisco = "* * * * *"
for (let i = 5; i >= 1; i--) {
    console.log(asterisco);
    
    asterisco = asterisco.substring(0, asterisco.length -2)
    
}*/

// Puto 16

let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
//let lista = [389, 247, 703, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
let cantidadElementos = lista.length
console.log(lista);
console.log(cantidadElementos);
for (let i = 0; i < cantidadElementos; i++) {
    for (let j = 0; j < cantidadElementos-i; j++) {
        if (lista[j] > lista[j+1] ) {
            let temp = lista[j] // 703
            lista[j] = lista[j+1] // 703 remplamelo por 247
            lista[j+1] = temp
        }  
    }
}
console.log(lista);

