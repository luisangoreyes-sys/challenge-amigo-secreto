// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Crear un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // 2.1 Capturar el valor del campo de la entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios extra

    // 2.2 Validar la entrada
    if (nombre === "") {
        alert("Por favor, recuerda insertar un nombre.");
        return;
    }

    // 2.3 Actualizar el array de amigos
    amigos.push(nombre);

    // 2.4 Limpiar el campo de entrada
    input.value = "";

    // Actualizar lista en pantalla
    mostrarLista();
}

// 3. Función para mostrar la lista de amigos
function mostrarLista() {
    // 3.1 Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 3.2 Limpiar la lista existente
    lista.innerHTML = "";

    // 3.3 Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 3.4 Crear un nuevo <li>
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Función para sortear amigos
function sortearAmigo() {
    // 4.1 Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear, Recuerda ingresar a tus amigos.");
        return;
    }

    // 4.2 Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 4.3 Obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // 4.4 Mostrar el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSecreto}</strong>`;
}