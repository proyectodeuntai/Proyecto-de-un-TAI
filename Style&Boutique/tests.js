// Estructura para almacenar los tests de años específicos
const testsAnuales = {
    "2024": [],
    "2022": [],
    "2020": [],
    "2019": [],
    "2018": []
};

// Ejemplo de preguntas para cada año (5 por año)
// Formato: [pregunta, opción1, opción2, opción3, opción4, respuestaCorrecta]
testsAnuales["2024"] = [
    ["¿Qué significan las siglas RAID en almacenamiento?", "Random Array of Independent Disks", "Redundant Array of Independent Disks", "Rapid Access for Integrated Devices", "Remote Access for Internal Drives", "Redundant Array of Independent Disks"],
    ["¿Cuál es el protocolo principal utilizado para el envío de correos electrónicos?", "POP3", "IMAP", "SMTP", "HTTP", "SMTP"],
    ["¿Qué es la dirección de loopback en IPv4?", "192.168.0.1", "255.255.255.255", "127.0.0.1", "0.0.0.0", "127.0.0.1"],
    ["¿Qué es un sistema OLAP?", "Online Analytical Processing", "Online Application Processing", "Offline Analytical Processing", "Open Linear Analytical Processing", "Online Analytical Processing"],
    ["¿Cuál de los siguientes NO es un servicio de cloud computing?", "SaaS", "PaaS", "IaaS", "DaaS", "DaaS"]
];

testsAnuales["2022"] = [
    ["¿Qué tipo de topología de red conecta todos los dispositivos a un punto central?", "Bus", "Anillo", "Estrella", "Malla", "Estrella"],
    ["¿Cuál es la velocidad máxima teórica de USB 3.0?", "480 Mbps", "5 Gbps", "10 Gbps", "20 Gbps", "5 Gbps"],
    ["¿Qué es un ataque de fuerza bruta?", "Envío masivo de solicitudes para saturar un servidor", "Intentar adivinar contraseñas probando todas las combinaciones posibles", "Modificar cabeceras de paquetes TCP/IP", "Engañar a un usuario para que revele información confidencial", "Intentar adivinar contraseñas probando todas las combinaciones posibles"],
    ["¿Qué es IMAP?", "Un protocolo para enviar correos", "Un protocolo para recibir correos sin descargarlos", "Un formato de archivo", "Un tipo de cifrado", "Un protocolo para recibir correos sin descargarlos"],
    ["¿Qué sistema de archivos es nativo de Linux?", "NTFS", "FAT32", "HFS+", "ext4", "ext4"]
];

testsAnuales["2020"] = [
    ["¿Qué significa la sigla IoT?", "Internet over Time", "Internet of Things", "Input/Output Technology", "Integration of Technology", "Internet of Things"],
    ["¿Cuál de estos NO es un lenguaje de programación?", "Python", "Java", "SQL", "HTML", "HTML"],
    ["¿Qué componente de la computadora se encarga de almacenar los datos cuando no hay energía?", "RAM", "CPU", "ROM", "Disco duro", "Disco duro"],
    ["¿Cuál es el puerto estándar para el protocolo HTTPS?", "80", "8080", "443", "22", "443"],
    ["¿Qué algoritmo NO se utiliza para cifrado simétrico?", "AES", "DES", "RSA", "Blowfish", "RSA"]
];

testsAnuales["2019"] = [
    ["¿Qué es un cortafuegos (firewall)?", "Un antivirus", "Una herramienta de monitorización", "Un sistema que filtra el tráfico de red según reglas", "Un dispositivo de enfriamiento", "Un sistema que filtra el tráfico de red según reglas"],
    ["¿Cuál de estos NO es un tipo de memoria RAM?", "DRAM", "SRAM", "ERAM", "DDR", "ERAM"],
    ["¿Qué es un servidor DNS?", "Un servidor que almacena copias de seguridad", "Un servidor que traduce nombres de dominio a direcciones IP", "Un servidor de bases de datos", "Un servidor de archivos compartidos", "Un servidor que traduce nombres de dominio a direcciones IP"],
    ["¿Qué tipo de cable se utiliza comúnmente en redes LAN?", "Coaxial", "Par trenzado", "Fibra óptica", "Cable serie", "Par trenzado"],
    ["¿Qué protocolo se utiliza para la transferencia segura de archivos?", "HTTP", "FTP", "SFTP", "SMTP", "SFTP"]
];

testsAnuales["2018"] = [
    ["¿Qué es un algoritmo de ordenación?", "Un programa que organiza archivos", "Un conjunto de pasos para organizar datos en un orden específico", "Una estructura de datos", "Un método de compresión", "Un conjunto de pasos para organizar datos en un orden específico"],
    ["¿Cuál es la función principal de una UPS?", "Proporcionar energía en caso de corte eléctrico", "Acelerar el procesamiento de datos", "Filtrar el tráfico de red", "Comprimir archivos", "Proporcionar energía en caso de corte eléctrico"],
    ["¿Qué es una dirección MAC?", "Un identificador único de un dispositivo de red", "Una dirección IP dinámica", "Un tipo de memoria cache", "Una dirección física en un disco duro", "Un identificador único de un dispositivo de red"],
    ["¿Qué significa SQL?", "System Quality Language", "Structured Query Language", "Simple Query Logic", "Standard Query Level", "Structured Query Language"],
    ["¿Cuántos bits forman un byte?", "4", "8", "16", "32", "8"]
];

// Variables para el simulacro
let examenActual = [];
let respuestasUsuario = [];
let preguntaActualIndex = 0;
let tiempoRestante = 7200; // 2 horas en segundos
let cronometroInterval;
let examenPausado = false;
let bloqueParte2 = null;

// Función para inicializar la interfaz del simulacro
document.addEventListener('DOMContentLoaded', function() {
    // Botones de navegación principal
    document.getElementById('simulacroTest').addEventListener('click', mostrarPanelSimulacro);
    document.getElementById('volver').addEventListener('click', ocultarPanelSimulacro);
    
    // Botones de años específicos
    document.getElementById('test2024').addEventListener('click', () => iniciarSimulacro('2024'));
    document.getElementById('test2022').addEventListener('click', () => iniciarSimulacro('2022'));
    document.getElementById('test2020').addEventListener('click', () => iniciarSimulacro('2020'));
    document.getElementById('test2019').addEventListener('click', () => iniciarSimulacro('2019'));
    document.getElementById('test2018').addEventListener('click', () => iniciarSimulacro('2018'));
    
    // Botón de test aleatorio
    document.getElementById('testAleatorio').addEventListener('click', mostrarOpcionesAleatorio);
    document.getElementById('especificoBloque3').addEventListener('click', () => iniciarSimulacroAleatorio(3));
    document.getElementById('especificoBloque4').addEventListener('click', () => iniciarSimulacroAleatorio(4));
    
    // Botones de control del examen
    document.getElementById('pausarExamen').addEventListener('click', pausarExamen);
    document.getElementById('terminarExamen').addEventListener('click', terminarExamen);
    document.getElementById('reanudarExamen').addEventListener('click', reanudarExamen);
    
    // Navegación entre preguntas
    document.getElementById('anteriorPregunta').addEventListener('click', irPreguntaAnterior);
    document.getElementById('siguientePregunta').addEventListener('click', irPreguntaSiguiente);
    
    // Botones de resultados
    document.getElementById('revisarExamen').addEventListener('click', iniciarRevision);
    document.getElementById('volverInicio').addEventListener('click', volverAlInicio);
    
    // Botones de revisión
    document.getElementById('volverResultados').addEventListener('click', mostrarResultados);
    document.getElementById('anteriorRevision').addEventListener('click', irRevisionAnterior);
    document.getElementById('siguienteRevision').addEventListener('click', irRevisionSiguiente);
});

// Mostrar el panel de selección de simulacro
function mostrarPanelSimulacro() {
    document.querySelector('.modo-principal').style.display = 'none';
    document.getElementById('areaPractica').style.display = 'none';
    document.getElementById('panelSimulacro').style.display = 'block';
    document.getElementById('siguiente').style.display = 'none';
}

// Ocultar el panel de selección de simulacro
function ocultarPanelSimulacro() {
    document.getElementById('panelSimulacro').style.display = 'none';
    document.getElementById('opcionesTestAleatorio').style.display = 'none';
    document.querySelector('.modo-principal').style.display = 'flex';
    document.getElementById('areaPractica').style.display = 'block';
}

// Mostrar opciones para test aleatorio
function mostrarOpcionesAleatorio() {
    document.getElementById('opcionesTestAleatorio').style.display = 'block';
}

// Iniciar un simulacro de año específico
function iniciarSimulacro(ano) {
    // Verificar si hay suficientes preguntas
    if (testsAnuales[ano].length < 100) {
        alert("Este test no tiene suficientes preguntas. Se está utilizando un conjunto reducido para demostración.");
        // Repetir las preguntas disponibles hasta tener 100
        examenActual = [];
        while (examenActual.length < 100) {
            for (let i = 0; i < testsAnuales[ano].length && examenActual.length < 100; i++) {
                examenActual.push(testsAnuales[ano][i]);
            }
        }
    } else {
        examenActual = [...testsAnuales[ano]];
    }
    
    iniciarExamen(`Test ${ano}`);
}

// Iniciar un simulacro aleatorio con preguntas de todos los bloques
function iniciarSimulacroAleatorio(bloqueEspecifico) {
    bloqueParte2 = bloqueEspecifico;
    examenActual = [];
    
    // Primera parte: 20 preguntas aleatorias de cada bloque (80 en total)
    for (let i = 1; i <= 4; i++) {
        if (preguntas[`bloque${i}`] && preguntas[`bloque${i}`].length > 0) {
            const preguntasBloque = [...preguntas[`bloque${i}`]];
            shuffleArray(preguntasBloque);
            // Tomar hasta 20 preguntas por bloque
            for (let j = 0; j < Math.min(20, preguntasBloque.length); j++) {
                examenActual.push(preguntasBloque[j]);
            }
        }
    }
    
    // Completar con preguntas aleatorias si no hay suficientes
    while (examenActual.length < 80) {
        // Tomar una pregunta aleatoria de cualquier bloque
        const bloqueAleatorio = `bloque${Math.floor(Math.random() * 4) + 1}`;
        if (preguntas[bloqueAleatorio] && preguntas[bloqueAleatorio].length > 0) {
            const preguntaAleatoria = preguntas[bloqueAleatorio][Math.floor(Math.random() * preguntas[bloqueAleatorio].length)];
            examenActual.push(preguntaAleatoria);
        }
    }
    
    // Segunda parte: 20 preguntas del bloque específico
    if (preguntas[`bloque${bloqueEspecifico}`] && preguntas[`bloque${bloqueEspecifico}`].length > 0) {
        const preguntasBloque = [...preguntas[`bloque${bloqueEspecifico}`]];
        shuffleArray(preguntasBloque);
        // Tomar hasta 20 preguntas del bloque específico
        for (let j = 0; j < Math.min(20, preguntasBloque.length); j++) {
            examenActual.push(preguntasBloque[j]);
        }
    }
    
    // Completar con preguntas aleatorias si no hay suficientes
    while (examenActual.length < 100) {
        const preguntaAleatoria = preguntas[`bloque${bloqueEspecifico}`][Math.floor(Math.random() * preguntas[`bloque${bloqueEspecifico}`].length)];
        examenActual.push(preguntaAleatoria);
    }
    
    iniciarExamen(`Test Aleatorio (Parte específica: Bloque ${bloqueEspecifico})`);
}

// Iniciar el examen
function iniciarExamen(tipoTest) {
    // Inicializar variables
    preguntaActualIndex = 0;
    respuestasUsuario = new Array(examenActual.length).fill(null);
    tiempoRestante = 7200; // 2 horas en segundos
    examenPausado = false;
    
    // Ocultar paneles
    document.getElementById('panelSimulacro').style.display = 'none';
    document.getElementById('areaPractica').style.display = 'none';
    document.getElementById('siguiente').style.display = 'none';
    
    // Mostrar modo examen
    document.getElementById('modoExamen').style.display = 'block';
    document.getElementById('tipoPrueba').textContent = `Test: ${tipoTest}`;
    
    // Iniciar cronómetro
    actualizarCronometro();
    cronometroInterval = setInterval(actualizarTiempo, 1000);
    
    // Generar índice de preguntas
    generarIndicePregunta();
    
    // Cargar primera pregunta
    cargarPregunta(0);
}

// Actualizar el cronómetro
function actualizarCronometro() {
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = tiempoRestante % 60;
    
    document.getElementById('tiempoRestante').textContent = 
        `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// Actualizar el tiempo
function actualizarTiempo() {
    if (!examenPausado) {
        tiempoRestante--;
        actualizarCronometro();
        
        if (tiempoRestante <= 0) {
            clearInterval(cronometroInterval);
            alert("¡El tiempo ha terminado!");
            terminarExamen();
        }
    }
}

// Pausar el examen
function pausarExamen() {
    examenPausado = true;
    document.getElementById('pausaOverlay').style.display = 'flex';
}

// Reanudar el examen
function reanudarExamen() {
    examenPausado = false;
    document.getElementById('pausaOverlay').style.display = 'none';
}

// Terminar el examen
function terminarExamen() {
    clearInterval(cronometroInterval);
    
    if (confirm("¿Estás seguro de que deseas terminar el examen?")) {
        mostrarResultados();
    } else {
        // Si el usuario cancela y el examen estaba pausado, mantenerlo pausado
        if (!examenPausado) {
            cronometroInterval = setInterval(actualizarTiempo, 1000);
        }
    }
}

// Generar el índice de preguntas
function generarIndicePregunta() {
    const indiceDiv = document.getElementById('indicePregunta');
    indiceDiv.innerHTML = '';
    
    for (let i = 0; i < examenActual.length; i++) {
        const boton = document.createElement('button');
        boton.textContent = i + 1;
        boton.classList.add('btn-indice');
        
        // Marcar preguntas de la segunda parte
        if (i >= 80) {
            boton.classList.add('parte2');
        }
        
        // Marcar pregunta actual
        if (i === preguntaActualIndex) {
            boton.classList.add('seleccionada');
        }
        
        // Marcar preguntas respondidas
        if (respuestasUsuario[i] !== null) {
            boton.classList.add('respondida');
        }
        
        boton.addEventListener('click', () => cargarPregunta(i));
        indiceDiv.appendChild(boton);
    }
}

// Cargar una pregunta específica
function cargarPregunta(index) {
    preguntaActualIndex = index;
    
    // Actualizar la interfaz
    document.getElementById('preguntaExamen').textContent = examenActual[index][0];
    document.getElementById('progresoExamen').textContent = `Pregunta ${index + 1}/${examenActual.length}`;
    
    // Cargar opciones
    const opcionesDiv = document.getElementById('opcionesExamen');
    opcionesDiv.innerHTML = '';
    
    for (let i = 1; i <= 4; i++) {
        const opcionDiv = document.createElement('div');
        opcionDiv.classList.add('opcion-examen');
        opcionDiv.textContent = examenActual[index][i];
        
        // Marcar opción si ya fue seleccionada
        if (respuestasUsuario[index] === examenActual[index][i]) {
            opcionDiv.classList.add('opcion-seleccionada');
        }
        
        opcionDiv.addEventListener('click', () => {
            // Si el examen no está pausado
            if (!examenPausado) {
                // Desmarcar todas las opciones
                document.querySelectorAll('.opcion-examen').forEach(opcion => {
                    opcion.classList.remove('opcion-seleccionada');
                });
                
                // Marcar la opción seleccionada
                opcionDiv.classList.add('opcion-seleccionada');
                
                // Guardar la respuesta
                respuestasUsuario[index] = examenActual[index][i];
                
                // Actualizar índice
                generarIndicePregunta();
            }
        });
        
        opcionesDiv.appendChild(opcionDiv);
    }
    
    // Añadir una opción para dejar en blanco
    const opcionBlanco = document.createElement('div');
    opcionBlanco.classList.add('opcion-examen');
    opcionBlanco.textContent = 'Dejar en blanco';
    
    // Si la respuesta actual es null, marcar esta opción
    if (respuestasUsuario[index] === null) {
        opcionBlanco.classList.add('opcion-seleccionada');
    }
    
    opcionBlanco.addEventListener('click', () => {
        // Si el examen no está pausado
        if (!examenPausado) {
            // Desmarcar todas las opciones
            document.querySelectorAll('.opcion-examen').forEach(opcion => {
                opcion.classList.remove('opcion-seleccionada');
            });
            
            // Marcar la opción de blanco
            opcionBlanco.classList.add('opcion-seleccionada');
            
            // Guardar null como respuesta
            respuestasUsuario[index] = null;
            
            // Actualizar índice
            generarIndicePregunta();
        }
    });
    
    opcionesDiv.appendChild(opcionBlanco);
    
    // Actualizar índice
    generarIndicePregunta();
}

// Ir a la pregunta anterior
function irPreguntaAnterior() {
    if (preguntaActualIndex > 0) {
        cargarPregunta(preguntaActualIndex - 1);
    }
}

// Ir a la pregunta siguiente
function irPreguntaSiguiente() {
    if (preguntaActualIndex < examenActual.length - 1) {
        cargarPregunta(preguntaActualIndex + 1);
    }
}

// Mostrar los resultados
function mostrarResultados() {
    // Detener el cronómetro si aún está en marcha
    clearInterval(cronometroInterval);
    
    // Ocultar el modo examen y el modo revisión
    document.getElementById('modoExamen').style.display = 'none';
    document.getElementById('modoRevision').style.display = 'none';
    document.getElementById('pausaOverlay').style.display = 'none';
    
    // Mostrar el panel de resultados
    document.getElementById('panelResultados').style.display = 'block';
    
    // Calcular tiempo utilizado
    const tiempoUtilizado = 7200 - tiempoRestante;
    const horasUtilizadas = Math.floor(tiempoUtilizado / 3600);
    const minutosUtilizados = Math.floor((tiempoUtilizado % 3600) / 60);
    const segundosUtilizados = tiempoUtilizado % 60;
    
    document.getElementById('tiempoUtilizado').textContent = 
        `${horasUtilizadas.toString().padStart(2, '0')}:${minutosUtilizados.toString().padStart(2, '0')}:${segundosUtilizados.toString().padStart(2, '0')}`;
    
    // Calcular resultados de la primera parte (80 preguntas)
    let correctasParte1 = 0;
    let incorrectasParte1 = 0;
    let blancoParte1 = 0;
    
    for (let i = 0; i < 80; i++) {
        if (respuestasUsuario[i] === null) {
            blancoParte1++;
        } else if (respuestasUsuario[i] === examenActual[i][5]) {
            correctasParte1++;
        } else {
            incorrectasParte1++;
        }
    }
    
    // Calcular resultados de la segunda parte (20 preguntas)
    let correctasParte2 = 0;
    let incorrectasParte2 = 0;
    let blancoParte2 = 0;
    
    for (let i = 80; i < 100; i++) {
        if (respuestasUsuario[i] === null) {
            blancoParte2++;
        } else if (respuestasUsuario[i] === examenActual[i][5]) {
            correctasParte2++;
        } else {
            incorrectasParte2++;
        }
    }
    
    // Calcular puntuaciones
    const puntuacionParte1 = correctasParte1 - (incorrectasParte1 * 0.33);
    const puntuacionParte2 = correctasParte2 * 4 - (incorrectasParte2 * 1.33);
    const puntuacionTotal = puntuacionParte1 + puntuacionParte2;
    
    // Actualizar el panel de resultados
    document.getElementById('correctasParte1').textContent = correctasParte1;
    document.getElementById('incorrectasParte1').textContent = incorrectasParte1;
    document.getElementById('blancoParte1').textContent = blancoParte1;
    document.getElementById('puntuacionParte1').textContent = `${puntuacionParte1.toFixed(2)}/80`;
    
    document.getElementById('correctasParte2').textContent = correctasParte2;
    document.getElementById('incorrectasParte2').textContent = incorrectasParte2;
    document.getElementById('blancoParte2').textContent = blancoParte2;
    document.getElementById('puntuacionParte2').textContent = `${puntuacionParte2.toFixed(2)}/80`;
    
    document.getElementById('puntuacionTotal').textContent = `${puntuacionTotal.toFixed(2)}/160`;
}

// Iniciar la revisión del examen
function iniciarRevision() {
    document.getElementById('panelResultados').style.display = 'none';
    document.getElementById('modoRevision').style.display = 'block';
    preguntaActualIndex = 0;
    
    // Generar índice de revisión
    generarIndiceRevision();
    
    // Cargar primera pregunta
    cargarPreguntaRevision(0);
}

// Generar el índice de preguntas para revisión
function generarIndiceRevision() {
    const indiceDiv = document.getElementById('indiceRevision');
    indiceDiv.innerHTML = '';
    
    for (let i = 0; i < examenActual.length; i++) {
        const boton = document.createElement('button');
        boton.textContent = i + 1;
        boton.classList.add('btn-indice');
        
        // Marcar preguntas de la segunda parte
        if (i >= 80) {
            boton.classList.add('parte2');
        }
        
        // Marcar pregunta actual
        if (i === preguntaActualIndex) {
            boton.classList.add('seleccionada');
        }
        
        // Marcar respuestas correctas e incorrectas
        if (respuestasUsuario[i] === examenActual[i][5]) {
            boton.classList.add('correcta');
        } else if (respuestasUsuario[i] !== null) {
            boton.classList.add('incorrecta');
        }
        
        boton.addEventListener('click', () => cargarPreguntaRevision(i));
        indiceDiv.appendChild(boton);
    }
}

// Cargar una pregunta específica en modo revisión
function cargarPreguntaRevision(index) {
    preguntaActualIndex = index;
    
    // Actualizar la interfaz
    document.getElementById('preguntaRevision').textContent = examenActual[index][0];
    
    // Cargar opciones
    const opcionesDiv = document.getElementById('opcionesRevision');
    opcionesDiv.innerHTML = '';
    
    for (let i = 1; i <= 4; i++) {
        const opcionDiv = document.createElement('div');
        opcionDiv.classList.add('opcion-revision');
        opcionDiv.textContent = examenActual[index][i];
        
        // Marcar respuesta correcta
        if (examenActual[index][i] === examenActual[index][5]) {
            opcionDiv.classList.add('correcta');
        }
        // Marcar respuesta incorrecta seleccionada por el usuario
        else if (respuestasUsuario[index] === examenActual[index][i]) {
            opcionDiv.classList.add('incorrecta');
        }
        
        // Marcar la respuesta seleccionada por el usuario
        if (respuestasUsuario[index] === examenActual[index][i]) {
            opcionDiv.classList.add('seleccionada');
        }
        
        opcionesDiv.appendChild(opcionDiv);
    }
    
    // Mostrar explicación
    const explicacionDiv = document.getElementById('explicacionRevision');
    const preguntaEnunciado = examenActual[index][0];
    
    // Buscar explicación o mostrar una genérica
    if (explicaciones[preguntaEnunciado]) {
        explicacionDiv.textContent = explicaciones[preguntaEnunciado];
    } else {
        explicacionDiv.textContent = `La respuesta correcta es: ${examenActual[index][5]}`;
    }
    
    // Actualizar índice
    generarIndiceRevision();
}

// Ir a la pregunta anterior en modo revisión
function irRevisionAnterior() {
    if (preguntaActualIndex > 0) {
        cargarPreguntaRevision(preguntaActualIndex - 1);
    }
}

// Ir a la pregunta siguiente en modo revisión
function irRevisionSiguiente() {
    if (preguntaActualIndex < examenActual.length - 1) {
        cargarPreguntaRevision(preguntaActualIndex + 1);
    }
}

// Volver al inicio
function volverAlInicio() {
    document.getElementById('panelResultados').style.display = 'none';
    document.querySelector('.modo-principal').style.display = 'flex';
    document.getElementById('areaPractica').style.display = 'block';
}

// Función auxiliar para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}