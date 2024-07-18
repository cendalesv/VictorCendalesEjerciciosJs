let notas = [
    {
        id: 1,
        titulo: "Sacar basura",
        texto: "Mi mamá me va a pegar si no lo hago",
        realizada: false,
        tachada: false
    },
    {
        id: 2,
        titulo: "Comer",
        texto: "Quedó comida de ayer",
        realizada: true,
        tachada: false
    },
    {
        id: 3,
        titulo: "Estudiar eventos",
        texto: "Estoy flojo de papeles y no voy a aprobar la task 3",
        realizada: false,
        tachada: false
    },
    {
        id: 4,
        titulo: "Tomar agua",
        texto: "Debo hidratarme bien para no desmayarme",
        realizada: true,
        tachada: false
    }
];
let idGlobal = 4;

function pintarNotas(notasArray) {
    let notasContainer = document.getElementById("notasContainer");
    notasContainer.innerHTML = "";

    if (notasArray.length === 0) {
        notasContainer.innerHTML = "<p> NO HAY NOTAS </p>";
        return;
    }

    notasArray.forEach(nota => {
        let noteCard = document.createElement("div");
        noteCard.classList.add("note-card");
        if (nota.tachada) {
            noteCard.classList.add("tachada");
        }
        noteCard.innerHTML = `
            <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.tachada ? "checked" : ""}>
            <h3>${nota.titulo}</h3>
            <p>${nota.texto}</p>
            <button onClick="borrarNota(${nota.id})">Borrar nota</button>
        `;
        notasContainer.appendChild(noteCard);
    });
}

function agregarNota(titulo, texto) {
    let nuevaNota = {
        id: ++idGlobal,
        titulo,
        texto,
        realizada: false,
        tachada: false
    };
    notas.push(nuevaNota);
}

function aplicarFiltros() {
    let buscar = document.getElementById("buscar").value;
    let notasFiltradas = filtrarPorTexto(notas, buscar);
    notasFiltradas = filtrarPorRealizada(notasFiltradas);
    pintarNotas(notasFiltradas);
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    aplicarFiltros();
}

function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.tachada = !nota.tachada;
    }
    aplicarFiltros();
}

function filtrarPorRealizada(notasArray) {
    let completado = document.getElementById("completado").checked;
    if (completado) {
        return notasArray.filter(nota => nota.tachada);
    }
    return notasArray;
}

function filtrarPorTexto(notasArray, texto) {
    if (texto) {
        return notasArray.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
    }
    return notasArray;
}

document.getElementById("guardarButton").addEventListener("click", () => {
    let tituloInput = document.getElementById("tituloInput");
    let textInput = document.getElementById("textInput");
    let titulo = tituloInput.value;
    let texto = textInput.value;

    if (titulo && texto) {
        agregarNota(titulo, texto);
        aplicarFiltros();
        tituloInput.value = "";
        textInput.value = "";
    }
});

document.getElementById("borrarButton").addEventListener("click", () => {
    document.getElementById("tituloInput").value = "";
    document.getElementById("textInput").value = "";
});

document.getElementById("buscar").addEventListener("input", aplicarFiltros);
document.getElementById("completado").addEventListener("change", aplicarFiltros);

aplicarFiltros();
