// Diccionario de explicaciones para las preguntas
const explicaciones = {
  "¿Cuál de las siguientes respuestas sería equivalente a 36 Quettabytes?":
    "Recuerda que Quetta es la unidad más grande actualmente definida en el SI y equivale a 10^30 bytes.",
  "Ordena de mayor a menor las siguientes secuencias de unidades":
    "En orden descendente: Quettabyte (10^30), Ronnabyte (10^27), Yottabyte (10^24), Zetabyte (10^21) y Exabyte (10^18).",
  "¿Cuál de los siguientes términos sería el equivalente a un grupo de 4 bits?":
    "Un nibble es la agrupación de 4 bits. Es la mitad de un byte (que son 8 bits).",
  "El número decimal 5 en Sistema BCD equivale a…":
    "En BCD (Binary-Coded Decimal), cada dígito decimal se representa con 4 bits. El 5 en binario es 0101.",
  "El número decimal 42 en Sistema BCD equivale a…":
    "En BCD, cada dígito decimal se representa con 4 bits. Para el número 42, tenemos: 4 = 0100 y 2 = 0010, por lo que 42 = 01000010.",
  "En Sistema BCD, el código 10011000 equivale a…":
    "En BCD, cada grupo de 4 bits representa un dígito decimal. 1001 = 9 y 1000 = 8, por lo que 10011000 = 98.",
  "¿Qué es el sistema BCD?":
    "BCD (Binary-Coded Decimal) es un sistema que representa cada dígito decimal (0-9) usando 4 bits, lo que facilita la conversión entre decimal y binario para aplicaciones donde se requiere mantener la precisión decimal.",
  "¿Qué sistema de numeración utiliza 8 dígitos para expresarse?":
    "El sistema octal utiliza 8 dígitos: 0, 1, 2, 3, 4, 5, 6 y 7.",
  "¿Qué sistema de numeración utiliza 2 dígitos para expresarse?":
    "El sistema binario utiliza 2 dígitos: 0 y 1.",
  "¿Qué sistema de numeración utiliza 16 dígitos para expresarse?":
    "El sistema hexadecimal utiliza 16 dígitos: 0-9 y A-F (donde A=10, B=11, C=12, D=13, E=14, F=15).",
  "¿Qué sistema de numeración utiliza 11 dígitos para expresarse?":
    "No existe un sistema de numeración estándar que utilice 11 dígitos. Los sistemas comunes son: binario (2), octal (8), decimal (10) y hexadecimal (16).",
  "¿Qué sistema de numeración utiliza 10 dígitos para expresarse?":
    "El sistema decimal utiliza 10 dígitos: 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.",
  "¿Qué es un algoritmo?":
    "Se puede entender un algoritmo como una secuencia de pasos finitos bien definidos que resuelven un problema. Por ejemplo, la ejecución de tareas cotidianas tan simples como cepillarse los dientes, lavarse las manos o seguir el manual de instrucciones de armado de un mueble, se pueden ver como un algoritmo",
  "¿Qué característica NO es propia de un algoritmo?":
    "Un algoritmo no debe ser ambiguo porque la ambigüedad genera incertidumbre sobre qué pasos exactos se deben seguir para resolver un problema",
  "¿Qué significa la sigla CPU?":
    "La sigla CPU significa Unidad Central de Procesamiento (en inglés: Central Processing Unit). Es el componente principal de un sistema informático encargado de ejecutar las instrucciones de los programas. Básicamente, es el cerebro de un ordenador, donde se realizan los cálculos y se toman decisiones lógicas que permiten que el software funcione",
  "¿Qué es la memoria RAM?":
    "La memoria RAM significa Memoria de Acceso Aleatorio (del inglés Random Access Memory). Es un tipo de memoria volátil que utiliza un ordenador para almacenar temporalmente datos e instrucciones que el procesador necesita mientras ejecuta programas. Es mucho más rápida que los discos duros o SSD, pero su contenido se pierde cuando apagas el ordenador",
  "¿Qué significa la sigla ROM?":
    "La sigla ROM significa Memoria de Solo Lectura (del inglés Read-Only Memory). Es un tipo de memoria no volátil, lo que significa que retiene la información incluso cuando el ordenador está apagado. La ROM almacena datos y programas esenciales que no necesitan cambiarse con frecuencia, como el firmware o la BIOS (el software básico que permite que el ordenador arranque y reconozca el hardware).",
  "¿Qué es un sistema operativo?":
    "Un sistema operativo (SO) es un software fundamental que actúa como intermediario entre el hardware del ordenador y los programas que el usuario utiliza. Su función principal es gestionar y coordinar todos los recursos del sistema, como la CPU, la memoria RAM, los dispositivos de entrada/salida (teclado, mouse, impresora, etc.) y el almacenamiento",
  "¿Qué es una red LAN?":
    "Una red LAN significa Red de Área Local (del inglés Local Area Network). Es un tipo de red que conecta dispositivos dentro de un área geográfica pequeña, como una casa, una oficina, una escuela o un edificio. Su objetivo es permitir la comunicación y el intercambio de datos entre ordenadores, impresoras, servidores y otros dispositivos",
  "¿Qué significa la sigla HTTP?":
    "La sigla HTTP significa Protocolo de Transferencia de Hipertexto (en inglés HyperText Transfer Protocol). Es un protocolo de comunicación que se utiliza para transferir información a través de la web. Es el lenguaje que usan los navegadores web (como Chrome, Firefox o Safari) para comunicarse con los servidores y cargar páginas web.",
  "¿Qué es una dirección IP?":
    "Una dirección IP (Protocolo de Internet o Internet Protocol) es un número único que identifica a cada dispositivo conectado a una red que utiliza el protocolo IP, como Internet o una red local (LAN). Es como la 'dirección' de tu ordenador o dispositivo en la red, que permite que los datos lleguen al lugar correcto, similar a cómo una dirección postal permite que te llegue una carta.",
};

// Banco de preguntas por bloque
const preguntas = {
  bloque1: [],
  bloque2: [
    [
      "¿Qué es un algoritmo?",
      "Un programa informático",
      "Una secuencia ordenada de pasos para resolver un problema",
      "Un lenguaje de programación",
      "Un sistema operativo",
      "Una secuencia ordenada de pasos para resolver un problema",
    ],
    [
      "¿Qué característica NO es propia de un algoritmo?",
      "Debe ser finito",
      "Debe ser ambiguo",
      "Debe ser preciso",
      "Debe ser efectivo",
      "Debe ser ambiguo",
    ],
    [
      "¿Qué significa la sigla CPU?",
      "Computer Processing Unit",
      "Central Process Unit",
      "Central Programming Unit",
      "Central Processing Unit",
      "Central Processing Unit",
    ],
    [
      "¿Cuál de las siguientes respuestas sería equivalente a 36 Quettabytes?",
      "3,600 Petabytes",
      "36,000,000 Yottabytes",
      "36,000 Gigabytes",
      "Ninguna de las anteriores",
      "Ninguna de las anteriores",
    ],
    [
      "Ordena de mayor a menor las siguientes secuencias de unidades",
      "Exabyte, Zetabyte, Yottabyte, Ronnabyte, Quettabyte",
      "Petabyte, Terabyte, Exabyte, Yottabyte, Rittabyte",
      "Quettabyte, Ronnabyte, Yottabyte, Zetabyte, Exabyte",
      "Quettabyte, Ronnabyte, Zetabyte, Yottabyte, Exabyte",
      "Quettabyte, Ronnabyte, Yottabyte, Zetabyte, Exabyte",
    ],
    [
      "¿Cuál de los siguientes términos sería el equivalente a un grupo de 4 bits?",
      "1 Crumb",
      "1 Palabra",
      "1 Byte",
      "1 Nibble",
      "1 Nibble",
    ],
    [
      "El número decimal 5 en Sistema BCD equivale a…",
      "0010",
      "0100",
      "0101",
      "1001",
      "0101",
    ],
    [
      "El número decimal 42 en Sistema BCD equivale a…",
      "01010010",
      "01000010",
      "00100100",
      "No puede representarse en este sistema",
      "01000010",
    ],
    [
      "En Sistema BCD, el código 10011000 equivale a…",
      "97",
      "98",
      "99",
      "89",
      "98",
    ],
    [
      "¿Qué es el sistema BCD?",
      "Es un código que se utiliza para representar números decimales en binario. Cada número del 1 al 10 es representado por su equivalente en binario en 4 bits.",
      "Es un código que se utiliza para representar números decimales en binario. Cada número del 0 al 9 es representado por su equivalente en binario en 5 bits.",
      "Es un código que se utiliza para representar números decimales en decimales más largos. Cada número del 0 al 9 es representado por su equivalente en binario en 4 bits.",
      "Es un código que se utiliza para representar números decimales en binario. Cada número del 0 al 9 es representado por su equivalente en binario en 4 bits.",
      "Es un código que se utiliza para representar números decimales en binario. Cada número del 0 al 9 es representado por su equivalente en binario en 4 bits.",
    ],
    [
      "¿Qué sistema de numeración utiliza 8 dígitos para expresarse?",
      "Heptaunecimal",
      "Hexadecimal",
      "Binario",
      "Octal",
      "Octal",
    ],
    [
      "¿Qué sistema de numeración utiliza 2 dígitos para expresarse?",
      "Decimal",
      "Octalito",
      "Binario",
      "Octal",
      "Binario",
    ],
    [
      "¿Qué sistema de numeración utiliza 16 dígitos para expresarse?",
      "Decimal",
      "Hexadecimal",
      "Sexadecimal",
      "Octal",
      "Hexadecimal",
    ],
    [
      "¿Qué sistema de numeración utiliza 11 dígitos para expresarse?",
      "Engodecimal",
      "Binario",
      "Hexadecimal",
      "Ninguna de las anteriores",
      "Ninguna de las anteriores",
    ],
    [
      "¿Qué sistema de numeración utiliza 10 dígitos para expresarse?",
      "Decimal",
      "Hexadecimal",
      "Binario",
      "Octal",
      "Decimal",
    ],
    [
      "¿Qué es la memoria RAM?",
      "Random Access Memory",
      "Read Allocated Memory",
      "Random Allocated Memory",
      "Read Access Memory",
      "Random Access Memory",
    ],
    [
      "¿Qué significa la sigla ROM?",
      "Read Only Memory",
      "Random Only Memory",
      "Read On Memory",
      "Random On Memory",
      "Read Only Memory",
    ],
    [
      "¿Qué es un sistema operativo?",
      "Un programa que controla el hardware y proporciona servicios a otros programas",
      "Un programa de ofimática",
      "Un programa para navegar en internet",
      "Un programa para crear gráficos",
      "Un programa que controla el hardware y proporciona servicios a otros programas",
    ],
  ],
  bloque3: [],
  bloque4: [
    [
      "¿Qué es una red LAN?",
      "Local Area Network",
      "Long Area Network",
      "Local Access Network",
      "Large Access Network",
      "Local Area Network",
    ],
    [
      "¿Qué es una dirección IP?",
      "Un número que identifica un dispositivo en una red",
      "Un programa de seguridad",
      "Un tipo de cable de red",
      "Un sistema operativo",
      "Un número que identifica un dispositivo en una red",
    ],
    [
      "¿Qué significa la sigla HTTP?",
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "HyperText Transfer Program",
      "High Transfer Text Program",
      "HyperText Transfer Protocol",
    ],
  ],
};

let bloqueActual;
let preguntaActual;
let preguntasVistas = []; // Array para guardar las preguntas ya vistas

// Función para mostrar una pregunta
function mostrarPregunta(bloque) {
  bloqueActual = bloque;

  // Verificar si el bloque tiene preguntas
  if (preguntas[bloque].length === 0) {
    alert("Este bloque no tiene preguntas todavía");
    return;
  }

  // Filtrar preguntas no vistas
  const preguntasDisponibles = preguntas[bloque].filter(
    (pregunta) => !preguntasVistas.includes(pregunta[0])
  );

  // Si ya se han visto todas las preguntas, reiniciar
  if (preguntasDisponibles.length === 0) {
    preguntasVistas = []; // Reiniciar el registro de preguntas vistas
    preguntaActual =
      preguntas[bloque][Math.floor(Math.random() * preguntas[bloque].length)];
  } else {
    // Seleccionar una pregunta aleatoria no vista
    preguntaActual =
      preguntasDisponibles[
        Math.floor(Math.random() * preguntasDisponibles.length)
      ];
  }

  // Añadir pregunta al historial
  preguntasVistas.push(preguntaActual[0]);

  // Mostrar la pregunta
  const preguntaDiv = document.getElementById("pregunta");
  preguntaDiv.textContent = preguntaActual[0];

  // Mostrar las opciones
  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";
  for (let i = 1; i <= 4; i++) {
    const respuestaDiv = document.createElement("div");
    respuestaDiv.classList.add("respuesta");
    respuestaDiv.textContent = preguntaActual[i];
    respuestaDiv.addEventListener("click", () =>
      comprobarRespuesta(preguntaActual[i])
    );
    opcionesDiv.appendChild(respuestaDiv);
  }

  // Ocultar botones de navegación
  document.getElementById("siguiente").style.display = "none";

  // Quitar el botón de explicación si existe
  const btnExplicacionExistente = document.getElementById("btnExplicacion");
  if (btnExplicacionExistente) {
    btnExplicacionExistente.remove();
  }
}

// Función para comprobar la respuesta seleccionada
function comprobarRespuesta(respuesta) {
  const opcionesDiv = document.getElementById("opciones");
  const respuestaCorrecta = preguntaActual[5];

  // Marcar respuestas correctas e incorrectas
  for (let i = 0; i < opcionesDiv.children.length; i++) {
    const respuestaDiv = opcionesDiv.children[i];
    respuestaDiv.style.pointerEvents = "none"; // Deshabilitar clics

    if (respuestaDiv.textContent === respuestaCorrecta) {
      respuestaDiv.classList.add("correcta");
    } else if (
      respuestaDiv.textContent === respuesta &&
      respuesta !== respuestaCorrecta
    ) {
      respuestaDiv.classList.add("incorrecta");
    }
  }

  // Mostrar los botones de navegación
  document.getElementById("siguiente").style.display = "block";
  mostrarBotonExplicacion();
}

// Función para mostrar el botón de explicación
function mostrarBotonExplicacion() {
  // Eliminar botón existente si lo hay
  const btnExistente = document.getElementById("btnExplicacion");
  if (btnExistente) {
    btnExistente.remove();
  }

  // Crear nuevo botón de explicación
  const btnExplicacion = document.createElement("button");
  btnExplicacion.id = "btnExplicacion";
  btnExplicacion.innerText = "¿Por qué esta es la correcta?";
  btnExplicacion.onclick = mostrarExplicacion;
  document.querySelector(".container").appendChild(btnExplicacion);
}

// Función para mostrar la explicación
function mostrarExplicacion() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("explicacionDialog").style.display = "block";

  // Buscar la explicación para esta pregunta o mostrar un mensaje por defecto
  const explicacionTexto =
    explicaciones[preguntaActual[0]] ||
    "La respuesta correcta es: " +
      preguntaActual[5] +
      ". (Explicación detallada pendiente).";

  document.getElementById("explicacionTexto").innerText = explicacionTexto;
}

// Función para cerrar la explicación
function cerrarExplicacion() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("explicacionDialog").style.display = "none";
}

// Event listeners para los botones
document
  .getElementById("bloque1")
  .addEventListener("click", () => mostrarPregunta("bloque1"));
document
  .getElementById("bloque2")
  .addEventListener("click", () => mostrarPregunta("bloque2"));
document
  .getElementById("bloque3")
  .addEventListener("click", () => mostrarPregunta("bloque3"));
document
  .getElementById("bloque4")
  .addEventListener("click", () => mostrarPregunta("bloque4"));

// Para el botón de preguntas aleatorias
document.getElementById("preguntasAleatorias").addEventListener("click", () => {
  // Obtener todos los bloques que tienen preguntas
  const bloquesConPreguntas = Object.keys(preguntas).filter(
    (bloque) => preguntas[bloque].length > 0
  );

  if (bloquesConPreguntas.length === 0) {
    alert("No hay preguntas disponibles en ningún bloque");
    return;
  }

  // Seleccionar un bloque aleatorio
  const bloqueAleatorio =
    bloquesConPreguntas[Math.floor(Math.random() * bloquesConPreguntas.length)];
  mostrarPregunta(bloqueAleatorio);
});

// Event listener para el botón siguiente
document.getElementById("siguiente").addEventListener("click", () => {
  if (bloqueActual === undefined) {
    // Si no hay bloque seleccionado, mostrar una pregunta aleatoria
    document.getElementById("preguntasAleatorias").click();
  } else {
    // Mostrar otra pregunta del mismo bloque
    mostrarPregunta(bloqueActual);
  }
});

// Función global para cerrar explicación (usada desde HTML)
window.cerrarExplicacion = cerrarExplicacion;
