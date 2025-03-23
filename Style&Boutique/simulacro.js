document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos UI principales
    const simulacroBtn = document.getElementById('simulacroTest');
    const panelSimulacro = document.getElementById('panelSimulacro');
    const volverBtn = document.getElementById('volver');
    const areaPractica = document.getElementById('areaPractica');
    const modoExamen = document.getElementById('modoExamen');
    const botonesPrincipales = document.querySelector('.modo-principal');
    const testAleatorioBtn = document.getElementById('testAleatorio');
    const opcionesTestAleatorio = document.getElementById('opcionesTestAleatorio');
    const panelResultados = document.getElementById('panelResultados');
    const modoRevision = document.getElementById('modoRevision');
    
    // Referencias a botones de tests específicos
    const test2024Btn = document.getElementById('test2024');
    const test2022Btn = document.getElementById('test2022');
    const test2020Btn = document.getElementById('test2020');
    const test2019Btn = document.getElementById('test2019');
    const test2018Btn = document.getElementById('test2018');
    
    // Referencias a elementos del examen
    const pausarExamenBtn = document.getElementById('pausarExamen');
    const terminarExamenBtn = document.getElementById('terminarExamen');
    const pausaOverlay = document.getElementById('pausaOverlay');
    const reanudarExamenBtn = document.getElementById('reanudarExamen');
    const preguntaExamen = document.getElementById('preguntaExamen');
    const opcionesExamen = document.getElementById('opcionesExamen');
    const anteriorPregunta = document.getElementById('anteriorPregunta');
    const siguientePregunta = document.getElementById('siguientePregunta');
    const indicePregunta = document.getElementById('indicePregunta');
    const progresoExamen = document.getElementById('progresoExamen');
    const tiempoRestante = document.getElementById('tiempoRestante');
    const tipoPrueba = document.getElementById('tipoPrueba');
    
    // Referencias a elementos de resultados
    const tiempoUtilizado = document.getElementById('tiempoUtilizado');
    const puntuacionTotal = document.getElementById('puntuacionTotal');
    const correctasParte1 = document.getElementById('correctasParte1');
    const incorrectasParte1 = document.getElementById('incorrectasParte1');
    const blancoParte1 = document.getElementById('blancoParte1');
    const puntuacionParte1 = document.getElementById('puntuacionParte1');
    const correctasParte2 = document.getElementById('correctasParte2');
    const incorrectasParte2 = document.getElementById('incorrectasParte2');
    const blancoParte2 = document.getElementById('blancoParte2');
    const puntuacionParte2 = document.getElementById('puntuacionParte2');
    const revisarExamenBtn = document.getElementById('revisarExamen');
    const volverInicioBtn = document.getElementById('volverInicio');
    
    // Referencias a elementos de revisión
    const volverResultadosBtn = document.getElementById('volverResultados');
    const preguntaRevision = document.getElementById('preguntaRevision');
    const opcionesRevision = document.getElementById('opcionesRevision');
    const explicacionRevision = document.getElementById('explicacionRevision');
    const anteriorRevision = document.getElementById('anteriorRevision');
    const siguienteRevision = document.getElementById('siguienteRevision');
    const indiceRevision = document.getElementById('indiceRevision');
    
    // Referencias a botones de bloque específico
    const especificoBloque3 = document.getElementById('especificoBloque3');
    const especificoBloque4 = document.getElementById('especificoBloque4');

    // Variables para controlar el examen
    let preguntasExamen = [];
    let respuestasUsuario = [];
    let preguntaActual = 0;
    let tiempoInicio;
    let tiempoFin;
    let cronometro;
    let segundosRestantes = 7200; // 2 horas
    let examenPausado = false;
    let bloqueEspecifico = 3; // Por defecto bloque 3
    let tipoTest = '';

    // Ejemplo de preguntas por bloques (simplificado)
    const preguntasBloque1 = [
        // Preguntas del bloque 1
        {
            pregunta: "¿Cuál es el órgano constitucional que ejerce la potestad legislativa del Estado?",
            opciones: [
                "El Gobierno",
                "Las Cortes Generales",
                "El Tribunal Constitucional",
                "El Consejo General del Poder Judicial"
            ],
            respuestaCorrecta: 1,
            explicacion: "Según el artículo 66.2 de la Constitución Española, las Cortes Generales ejercen la potestad legislativa del Estado."
        },
        {
            pregunta: "¿Cuál de los siguientes derechos NO está recogido en la Sección 1ª del Capítulo 2º del Título I de la Constitución?",
            opciones: [
                "Derecho a la vida",
                "Derecho a la libertad religiosa",
                "Derecho de propiedad privada",
                "Derecho a la educación"
            ],
            respuestaCorrecta: 2,
            explicacion: "El derecho a la propiedad privada está recogido en el artículo 33 CE, dentro de la Sección 2ª del Capítulo 2º del Título I."
        },
        // Añadir más preguntas aquí
    ];
    
    const preguntasBloque2 = [
        // Preguntas del bloque 2
        {
            pregunta: "¿Qué artículo de la Ley 39/2015 regula las notificaciones electrónicas?",
            opciones: [
                "Artículo 14",
                "Artículo 41",
                "Artículo 43",
                "Artículo 53"
            ],
            respuestaCorrecta: 1,
            explicacion: "El artículo 41 de la Ley 39/2015 regula las condiciones generales para la práctica de las notificaciones, incluidas las electrónicas."
        },
        {
            pregunta: "¿Cuándo se produce la caducidad de un procedimiento administrativo?",
            opciones: [
                "A los tres meses desde su iniciación",
                "A los seis meses desde su iniciación, si no se ha dictado resolución",
                "Cuando transcurra el plazo máximo establecido sin que se haya dictado y notificado resolución expresa",
                "Cuando el interesado desiste de su solicitud"
            ],
            respuestaCorrecta: 2,
            explicacion: "Según el artículo 25 de la Ley 39/2015, la caducidad se produce cuando transcurre el plazo máximo para resolver y notificar sin que se haya dictado resolución expresa."
        },
        // Añadir más preguntas aquí
    ];
    
    const preguntasBloque3 = [
        // Preguntas del bloque 3
        {
            pregunta: "¿Qué es un sistema de gestión de bases de datos (SGBD)?",
            opciones: [
                "Un programa que permite almacenar solo documentos de texto",
                "Un software que permite la creación, gestión y administración de bases de datos",
                "Un dispositivo hardware para guardar copias de seguridad",
                "Un lenguaje de programación específico"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un SGBD es un software que permite crear, gestionar y administrar bases de datos, así como facilitar la interacción entre los datos, los usuarios y las aplicaciones."
        },
        {
            pregunta: "¿Qué tipo de topología de red se caracteriza porque todos los dispositivos están conectados a un único punto central?",
            opciones: [
                "Topología en anillo",
                "Topología en estrella",
                "Topología en bus",
                "Topología en malla"
            ],
            respuestaCorrecta: 1,
            explicacion: "La topología en estrella se caracteriza porque todos los dispositivos están conectados a un punto central (switch o hub)."
        },
        // Añadir más preguntas aquí
    ];
    
    const preguntasBloque4 = [
        // Preguntas del bloque 4
        {
            pregunta: "¿Cuál de las siguientes NO es una característica de las firmas electrónicas avanzadas?",
            opciones: [
                "Estar vinculada al firmante de manera única",
                "Permitir identificar al firmante",
                "Ser creada con medios que el firmante puede mantener bajo su control",
                "Ser expedida por un prestador de servicios de confianza"
            ],
            respuestaCorrecta: 3,
            explicacion: "La última característica corresponde a la firma electrónica cualificada, no a la avanzada, según el Reglamento eIDAS."
        },
        {
            pregunta: "¿Cuál es el organismo español encargado de la seguridad en el ciberespacio?",
            opciones: [
                "INCIBE",
                "CCN-CERT",
                "AEPD",
                "ENISA"
            ],
            respuestaCorrecta: 0,
            explicacion: "El Instituto Nacional de Ciberseguridad (INCIBE) es el organismo dependiente del Ministerio de Asuntos Económicos y Transformación Digital encargado de la ciberseguridad en España."
        },
        // Añadir más preguntas aquí
    ];

    // Ejemplo de tests de años específicos
    const test2024Preguntas = [
        {
            pregunta: "En la Constitución Española, ¿qué artículo establece que la soberanía nacional reside en el pueblo español?",
            opciones: [
                "Artículo 1",
                "Artículo 2",
                "Artículo 3",
                "Artículo 4"
            ],
            respuestaCorrecta: 0,
            explicacion: "El artículo 1.2 de la Constitución Española establece que 'La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado'."
        },
        {
            pregunta: "¿Cuál de los siguientes no es un principio básico de actuación de la Administración Pública según la Ley 40/2015?",
            opciones: [
                "Eficacia",
                "Jerarquía",
                "Confidencialidad absoluta",
                "Descentralización"
            ],
            respuestaCorrecta: 2,
            explicacion: "La confidencialidad absoluta no es un principio básico de actuación. Los principios básicos están recogidos en el artículo 3 de la Ley 40/2015 e incluyen: eficacia, jerarquía, descentralización, desconcentración, coordinación, transparencia y participación."
        },
        // Agregar más preguntas para completar 10
    ];

    const test2022Preguntas = [
        {
            pregunta: "Según la Ley 39/2015, ¿quiénes están obligados a relacionarse electrónicamente con las Administraciones Públicas?",
            opciones: [
                "Todos los ciudadanos",
                "Solo las personas jurídicas",
                "Las personas jurídicas, entidades sin personalidad jurídica y profesionales colegiados, entre otros",
                "Solo las administraciones públicas entre sí"
            ],
            respuestaCorrecta: 2,
            explicacion: "El artículo 14.2 de la Ley 39/2015 establece que están obligados a relacionarse a través de medios electrónicos las personas jurídicas, entidades sin personalidad jurídica, quienes ejerzan actividad profesional con colegiación obligatoria, entre otros."
        },
        {
            pregunta: "¿Qué es IPv6?",
            opciones: [
                "Un protocolo de enrutamiento",
                "La versión 6 del Protocolo de Internet",
                "Un tipo de dirección MAC",
                "Un sistema de nombres de dominio"
            ],
            respuestaCorrecta: 1,
            explicacion: "IPv6 es la versión 6 del Protocolo de Internet, desarrollada para suceder a IPv4 debido al agotamiento de sus direcciones disponibles."
        },
        // Agregar más preguntas para completar 10
    ];

    // Funciones para gestionar eventos
    
    // Mostrar panel de simulacro
    simulacroBtn.addEventListener('click', function() {
        botonesPrincipales.style.display = 'none';
        areaPractica.style.display = 'none';
        panelSimulacro.style.display = 'block';
    });
    
    // Volver al menú principal
    volverBtn.addEventListener('click', function() {
        panelSimulacro.style.display = 'none';
        botonesPrincipales.style.display = 'flex';
        areaPractica.style.display = 'block';
        opcionesTestAleatorio.style.display = 'none';
    });
    
    // Mostrar opciones de test aleatorio
    testAleatorioBtn.addEventListener('click', function() {
        opcionesTestAleatorio.style.display = 'block';
    });
    
    // Seleccionar bloque específico para test aleatorio
    especificoBloque3.addEventListener('click', function() {
        bloqueEspecifico = 3;
        iniciarTestAleatorio();
    });
    
    especificoBloque4.addEventListener('click', function() {
        bloqueEspecifico = 4;
        iniciarTestAleatorio();
    });
    
    // Iniciar tests específicos por año
    test2024Btn.addEventListener('click', function() {
        iniciarTestEspecifico(test2024Preguntas, '2024');
    });
    
    test2022Btn.addEventListener('click', function() {
        iniciarTestEspecifico(test2022Preguntas, '2022');
    });
    
    test2020Btn.addEventListener('click', function() {
        // Placeholder para test2020Preguntas
        iniciarTestEspecifico(test2022Preguntas, '2020');
    });
    
    test2019Btn.addEventListener('click', function() {
        // Placeholder para test2019Preguntas
        iniciarTestEspecifico(test2022Preguntas, '2019');
    });
    
    test2018Btn.addEventListener('click', function() {
        // Placeholder para test2018Preguntas
        iniciarTestEspecifico(test2022Preguntas, '2018');
    });
    
    // Pausar y reanudar examen
    pausarExamenBtn.addEventListener('click', function() {
        pausarExamen();
    });
    
    reanudarExamenBtn.addEventListener('click', function() {
        reanudarExamen();
    });
    
    // Terminar examen
    terminarExamenBtn.addEventListener('click', function() {
        finalizarExamen();
    });
    
    // Navegación en el examen
    anteriorPregunta.addEventListener('click', function() {
        if (preguntaActual > 0) {
            guardarRespuestaActual();
            preguntaActual--;
            mostrarPreguntaActual();
        }
    });
    
    siguientePregunta.addEventListener('click', function() {
        if (preguntaActual < preguntasExamen.length - 1) {
            guardarRespuestaActual();
            preguntaActual++;
            mostrarPreguntaActual();
        }
    });
    
    // Funciones para revisión
    revisarExamenBtn.addEventListener('click', function() {
        iniciarRevision();
    });
    
    volverResultadosBtn.addEventListener('click', function() {
        modoRevision.style.display = 'none';
        panelResultados.style.display = 'block';
    });
    
    anteriorRevision.addEventListener('click', function() {
        if (preguntaActual > 0) {
            preguntaActual--;
            mostrarPreguntaRevision();
        }
    });
    
    siguienteRevision.addEventListener('click', function() {
        if (preguntaActual < preguntasExamen.length - 1) {
            preguntaActual++;
            mostrarPreguntaRevision();
        }
    });
    
    volverInicioBtn.addEventListener('click', function() {
        panelResultados.style.display = 'none';
        botonesPrincipales.style.display = 'flex';
        areaPractica.style.display = 'block';
    });
    
    // Función para iniciar un test aleatorio
    function iniciarTestAleatorio() {
        // Seleccionar 20 preguntas aleatorias de cada bloque (80 total)
        let preguntasParte1 = [];
        preguntasParte1 = preguntasParte1.concat(seleccionarPreguntasAleatorias(preguntasBloque1, 20));
        preguntasParte1 = preguntasParte1.concat(seleccionarPreguntasAleatorias(preguntasBloque2, 20));
        preguntasParte1 = preguntasParte1.concat(seleccionarPreguntasAleatorias(preguntasBloque3, 20));
        preguntasParte1 = preguntasParte1.concat(seleccionarPreguntasAleatorias(preguntasBloque4, 20));
        
        // Seleccionar 20 preguntas del bloque específico
        let preguntasParte2 = [];
        if (bloqueEspecifico === 3) {
            preguntasParte2 = seleccionarPreguntasAleatorias(preguntasBloque3, 20);
            tipoTest = 'Test Aleatorio - Bloque específico: Bloque 3';
        } else {
            preguntasParte2 = seleccionarPreguntasAleatorias(preguntasBloque4, 20);
            tipoTest = 'Test Aleatorio - Bloque específico: Bloque 4';
        }
        
        // Combinar preguntas
        preguntasExamen = preguntasParte1.concat(preguntasParte2);
        
        // Iniciar el examen
        iniciarExamen();
    }
    
    // Función para iniciar un test específico
    function iniciarTestEspecifico(preguntas, año) {
        preguntasExamen = preguntas;
        tipoTest = 'Test ' + año;
        iniciarExamen();
    }
    
    // Función para seleccionar preguntas aleatorias
    function seleccionarPreguntasAleatorias(preguntas, cantidad) {
        // Si no hay suficientes preguntas, devolvemos todas
        if (preguntas.length <= cantidad) {
            return [...preguntas];
        }
        
        // Copia para no modificar el original
        const preguntasCopia = [...preguntas];
        const seleccionadas = [];
        
        // Seleccionar aleatoriamente
        for (let i = 0; i < cantidad; i++) {
            const indiceAleatorio = Math.floor(Math.random() * preguntasCopia.length);
            seleccionadas.push(preguntasCopia[indiceAleatorio]);
            preguntasCopia.splice(indiceAleatorio, 1);
        }
        
        return seleccionadas;
    }
    
    // Función para iniciar el examen
    function iniciarExamen() {
        // Ocultar paneles y mostrar modo examen
        panelSimulacro.style.display = 'none';
        modoExamen.style.display = 'block';
        
        // Inicializar variables
        preguntaActual = 0;
        respuestasUsuario = Array(preguntasExamen.length).fill(null);
        tiempoInicio = new Date();
        segundosRestantes = 7200; // 2 horas
        examenPausado = false;
        
        // Actualizar UI
        tipoPrueba.textContent = 'Test: ' + tipoTest;
        actualizarCronometro();
        iniciarCronometro();
        mostrarPreguntaActual();
        crearIndicePreguntas();
    }
    
    // Función para mostrar la pregunta actual
    function mostrarPreguntaActual() {
        const pregunta = preguntasExamen[preguntaActual];
        progresoExamen.textContent = `Pregunta ${preguntaActual + 1}/${preguntasExamen.length}`;
        
        // Mostrar pregunta
        preguntaExamen.innerHTML = `<h3>${preguntaActual + 1}. ${pregunta.pregunta}</h3>`;
        
        // Mostrar opciones
        opcionesExamen.innerHTML = '';
        pregunta.opciones.forEach((opcion, index) => {
            const divOpcion = document.createElement('div');
            divOpcion.className = 'opcion-examen';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'respuesta';
            radio.value = index;
            radio.id = `opcion${index}`;
            radio.checked = respuestasUsuario[preguntaActual] === index;
            
            const label = document.createElement('label');
            label.htmlFor = `opcion${index}`;
            label.textContent = opcion;
            
            divOpcion.appendChild(radio);
            divOpcion.appendChild(label);
            opcionesExamen.appendChild(divOpcion);
        });
        
        // Actualizar índice
        actualizarIndicePreguntas();
    }
    
    // Función para guardar la respuesta actual
    function guardarRespuestaActual() {
        const seleccionada = document.querySelector('input[name="respuesta"]:checked');
        if (seleccionada) {
            respuestasUsuario[preguntaActual] = parseInt(seleccionada.value);
        } else {
            respuestasUsuario[preguntaActual] = null;
        }
        
        // Actualizar índice
        actualizarIndicePreguntas();
    }
    
    // Función para crear el índice de preguntas
    function crearIndicePreguntas() {
        indicePregunta.innerHTML = '';
        for (let i = 0; i < preguntasExamen.length; i++) {
            const botonIndice = document.createElement('button');
            botonIndice.textContent = (i + 1).toString();
            botonIndice.className = 'boton-indice';
            botonIndice.dataset.indice = i;
            
            botonIndice.addEventListener('click', function() {
                guardarRespuestaActual();
                preguntaActual = parseInt(this.dataset.indice);
                mostrarPreguntaActual();
            });
            
            indicePregunta.appendChild(botonIndice);
        }
    }
    
    // Función para actualizar el índice de preguntas
    function actualizarIndicePreguntas() {
        const botonesIndice = indicePregunta.querySelectorAll('.boton-indice');
        botonesIndice.forEach((boton, index) => {
            // Quitar clases
            boton.classList.remove('actual', 'respondida', 'sin-responder');
            
            // Añadir clases según estado
            if (index === preguntaActual) {
                boton.classList.add('actual');
            }
            
            if (respuestasUsuario[index] !== null) {
                boton.classList.add('respondida');
            } else {
                boton.classList.add('sin-responder');
            }
        });
    }
    
    // Funciones para el cronómetro
    function iniciarCronometro() {
        cronometro = setInterval(function() {
            if (!examenPausado) {
                segundosRestantes--;
                actualizarCronometro();
                
                if (segundosRestantes <= 0) {
                    finalizarExamen();
                }
            }
        }, 1000);
    }
    
    function actualizarCronometro() {
        const horas = Math.floor(segundosRestantes / 3600);
        const minutos = Math.floor((segundosRestantes % 3600) / 60);
        const segundos = segundosRestantes % 60;
        
        tiempoRestante.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
    
    function pausarExamen() {
        examenPausado = true;
        pausaOverlay.style.display = 'flex';
    }
    
    function reanudarExamen() {
        examenPausado = false;
        pausaOverlay.style.display = 'none';
    }
    
    // Función para finalizar el examen
    function finalizarExamen() {
        // Detener cronómetro
        clearInterval(cronometro);
        tiempoFin = new Date();
        
        // Guardar última respuesta
        guardarRespuestaActual();
        
        // Calcular resultados
        calcularResultados();
        
        // Mostrar panel de resultados
        modoExamen.style.display = 'none';
        panelResultados.style.display = 'block';
    }
    
    // Función para calcular resultados
    function calcularResultados() {
        // Separar primera y segunda parte (80 + 20)
        const parte1 = respuestasUsuario.slice(0, 80);
        const parte2 = respuestasUsuario.slice(80);
        
        // Primera parte (1 punto por correcta, -0.33 por incorrecta)
        let correctas1 = 0;
        let incorrectas1 = 0;
        let blanco1 = 0;
        
        parte1.forEach((respuesta, index) => {
            if (respuesta === null) {
                blanco1++;
            } else if (respuesta === preguntasExamen[index].respuestaCorrecta) {
                correctas1++;
            } else {
                incorrectas1++;
            }
        });
        
        const puntuacion1 = correctas1 - (incorrectas1 * 0.33);
        
        // Segunda parte (4 puntos por correcta, -1.33 por incorrecta)
        let correctas2 = 0;
        let incorrectas2 = 0;
        let blanco2 = 0;
        
        parte2.forEach((respuesta, index) => {
            if (respuesta === null) {
                blanco2++;
            } else if (respuesta === preguntasExamen[index + 80].respuestaCorrecta) {
                correctas2++;
            } else {
                incorrectas2++;
            }
        });
        
        const puntuacion2 = correctas2 * 4 - (incorrectas2 * 1.33);
        
        // Actualizar UI con resultados
        correctasParte1.textContent = correctas1;
        incorrectasParte1.textContent = incorrectas1;
        blancoParte1.textContent = blanco1;
        puntuacionParte1.textContent = `${puntuacion1.toFixed(2)}/80`;
        
        correctasParte2.textContent = correctas2;
        incorrectasParte2.textContent = incorrectas2;
        blancoParte2.textContent = blanco2;
        puntuacionParte2.textContent = `${puntuacion2.toFixed(2)}/80`;
        
        // Puntuación total
        const puntuacionTotalNum = puntuacion1 + puntuacion2;
        puntuacionTotal.textContent = `${puntuacionTotalNum.toFixed(2)}/160`;
        
        // Tiempo utilizado
        const tiempoUtilizadoSeconds = Math.floor((tiempoFin - tiempoInicio) / 1000);
        const horasUtilizadas = Math.floor(tiempoUtilizadoSeconds / 3600);
        const minutosUtilizados = Math.floor((tiempoUtilizadoSeconds % 3600) / 60);
        const segundosUtilizados = tiempoUtilizadoSeconds % 60;
        
        tiempoUtilizado.textContent = `${horasUtilizadas.toString().padStart(2, '0')}:${minutosUtilizados.toString().padStart(2, '0')}:${segundosUtilizados.toString().padStart(2, '0')}`;
    }
    
    // Función para iniciar la revisión
    function iniciarRevision() {
        panelResultados.style.display = 'none';
        modoRevision.style.display = 'block';
        preguntaActual = 0;
        crearIndiceRevision();
        mostrarPreguntaRevision();
    }
    
    // Función para crear índice de revisión
    function crearIndiceRevision() {
        indiceRevision.innerHTML = '';
        for (let i = 0; i < preguntasExamen.length; i++) {
            const botonIndice = document.createElement('button');
            botonIndice.textContent = (i + 1).toString();
            botonIndice.className = 'boton-indice';
            
            // Agregar clases según estado de respuesta
            if (respuestasUsuario[i] === null) {
                botonIndice.classList.add('sin-responder');
            } else if (respuestasUsuario[i] === preguntasExamen[i].respuestaCorrecta) {
                botonIndice.classList.add('correcta');
            } else {
                botonIndice.classList.add('incorrecta');
            }
            
            botonIndice.dataset.indice = i;
            
            botonIndice.addEventListener('click', function() {
                preguntaActual = parseInt(this.dataset.indice);
                mostrarPreguntaRevision();
            });
            
            indiceRevision.appendChild(botonIndice);
        }
    }
    
    // Función para mostrar pregunta en revisión
    function mostrarPreguntaRevision() {
        const pregunta = preguntasExamen[preguntaActual];
        const respuestaUsuario = respuestasUsuario[preguntaActual];
        
        // Mostrar pregunta
        preguntaRevision.innerHTML = `<h3>${preguntaActual + 1}. ${pregunta.pregunta}</h3>`;
        
        // Mostrar opciones
        opcionesRevision.innerHTML = '';
        pregunta.opciones.forEach((opcion, index) => {
            const divOpcion = document.createElement('div');
            divOpcion.className = 'opcion-revision';
            
            // Añadir clases según respuesta
            if (index === pregunta.respuestaCorrecta) {
                divOpcion.classList.add('correcta');
            } else if (index === respuestaUsuario && respuestaUsuario !== pregunta.respuestaCorrecta) {
                divOpcion.classList.add('incorrecta');
            }
            
            divOpcion.textContent = opcion;
            opcionesRevision.appendChild(divOpcion);
        });
        
        // Mostrar explicación
        explicacionRevision.innerHTML = `
            <div class="estado-respuesta">
                ${respuestaUsuario === null 
                    ? '<span class="en-blanco">No respondida</span>' 
                    : (respuestaUsuario === pregunta.respuestaCorrecta 
                        ? '<span class="correcta">Respuesta correcta</span>' 
                        : '<span class="incorrecta">Respuesta incorrecta</span>')}
            </div>
            <div class="explicacion-contenido">
                <h4>Explicación:</h4>
                <p>${pregunta.explicacion}</p>
            </div>
        `;
        
        // Actualizar navegación
        anteriorRevision.disabled = preguntaActual === 0;
        siguienteRevision.disabled = preguntaActual === preguntasExamen.length - 1;
        
        // Resaltar botón actual en índice
        const botones = indiceRevision.querySelectorAll('.boton-indice');
        botones.forEach((boton, i) => {
            if (i === preguntaActual) {
                boton.classList.add('actual');
            } else {
                boton.classList.remove('actual');
            }
        });
    }
    
    // Agregar más tests de años específicos
    const test2020Preguntas = [
        {
            pregunta: "¿Qué ley regula el procedimiento administrativo común en España?",
            opciones: [
                "Ley 39/2015",
                "Ley 40/2015",
                "Ley 30/1992",
                "Ley 7/1985"
            ],
            respuestaCorrecta: 0,
            explicacion: "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, es la que regula el procedimiento administrativo común en España."
        },
        {
            pregunta: "¿Qué es XML?",
            opciones: [
                "Un formato de compresión de datos",
                "Un lenguaje de marcado extensible",
                "Un protocolo de transferencia de archivos",
                "Un lenguaje de programación orientado a objetos"
            ],
            respuestaCorrecta: 1,
            explicacion: "XML (eXtensible Markup Language) es un lenguaje de marcado extensible diseñado para almacenar y transportar datos de forma legible tanto para humanos como para máquinas."
        },
        // Agregar más preguntas para completar 10
    ];

    const test2019Preguntas = [
        {
            pregunta: "¿Qué establece el Esquema Nacional de Seguridad (ENS)?",
            opciones: [
                "Normas para el tratamiento de datos personales",
                "Principios y requisitos de seguridad en el uso de medios electrónicos en las Administraciones Públicas",
                "Regulación para el comercio electrónico",
                "Estándares para redes de comunicación privadas"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Esquema Nacional de Seguridad (ENS) establece los principios y requisitos de seguridad en el uso de medios electrónicos en las Administraciones Públicas."
        },
        {
            pregunta: "¿Qué protocolo se utiliza principalmente para la transferencia segura de páginas web?",
            opciones: [
                "FTP",
                "HTTP",
                "HTTPS",
                "SMTP"
            ],
            respuestaCorrecta: 2,
            explicacion: "HTTPS (Hypertext Transfer Protocol Secure) es el protocolo utilizado para la transferencia segura de páginas web, añadiendo una capa de cifrado mediante SSL/TLS al protocolo HTTP."
        },
        // Agregar más preguntas para completar 10
    ];

    const test2018Preguntas = [
        {
            pregunta: "¿Qué es el Reglamento General de Protección de Datos (RGPD)?",
            opciones: [
                "Una directiva europea sobre ciberseguridad",
                "Un reglamento europeo sobre privacidad y protección de datos personales",
                "Una normativa española sobre administración electrónica",
                "Un código de buenas prácticas en el tratamiento de información"
            ],
            respuestaCorrecta: 1,
            explicacion: "El RGPD es un reglamento europeo (UE 2016/679) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos."
        },
        {
            pregunta: "¿Qué es una dirección IP?",
            opciones: [
                "Un identificador físico de un dispositivo de red",
                "Un número que identifica lógicamente a una interfaz de red",
                "Un protocolo de comunicación",
                "Un tipo de firewall"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una dirección IP (Internet Protocol) es un número único que identifica lógicamente a una interfaz de red en un dispositivo conectado a una red que utiliza el protocolo IP."
        },
        // Agregar más preguntas para completar 10
    ];

    // Agregar más preguntas a cada bloque
    // Bloque 1 adicionales
    preguntasBloque1.push(
        {
            pregunta: "¿Cuál es el plazo máximo para resolver un procedimiento administrativo según la Ley 39/2015?",
            opciones: [
                "1 mes",
                "3 meses",
                "6 meses",
                "Depende de lo que establezca la norma reguladora"
            ],
            respuestaCorrecta: 3,
            explicacion: "Según el artículo 21 de la Ley 39/2015, el plazo máximo para resolver y notificar es el que fije la norma reguladora del procedimiento, sin que pueda exceder de 6 meses salvo que una norma con rango de Ley establezca uno mayor."
        },
        {
            pregunta: "¿Qué órgano está encargado de realizar el control constitucional de las leyes?",
            opciones: [
                "El Tribunal Supremo",
                "El Tribunal Constitucional",
                "El Consejo de Estado",
                "El Defensor del Pueblo"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Tribunal Constitucional es el órgano encargado del control constitucional de las leyes, conforme al artículo 161 de la Constitución Española."
        }
    );

    // Bloque 2 adicionales
    preguntasBloque2.push(
        {
            pregunta: "¿Qué es un recurso de alzada?",
            opciones: [
                "Un recurso ante el mismo órgano que dictó el acto",
                "Un recurso ante el superior jerárquico del órgano que dictó el acto",
                "Un recurso extraordinario de revisión",
                "Un recurso contencioso-administrativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "El recurso de alzada es un recurso administrativo que se interpone ante el órgano superior jerárquico del que dictó el acto que se impugna, según el artículo 121 de la Ley 39/2015."
        },
        {
            pregunta: "¿Qué es el silencio administrativo?",
            opciones: [
                "La falta de actividad administrativa",
                "La presunción de efectos jurídicos cuando la Administración no resuelve en plazo",
                "Un tipo de resolución administrativa",
                "La caducidad de un procedimiento administrativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "El silencio administrativo es la presunción de efectos jurídicos (estimatorios o desestimatorios) que se produce cuando la Administración no resuelve expresamente en el plazo establecido."
        }
    );

    // Bloque 3 adicionales
    preguntasBloque3.push(
        {
            pregunta: "¿Qué es una red VPN?",
            opciones: [
                "Una red de acceso público",
                "Una red privada virtual que permite una conexión segura a través de redes públicas",
                "Un tipo de cortafuegos",
                "Un sistema de gestión de contraseñas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una VPN (Virtual Private Network) es una tecnología de red que permite crear una conexión segura a otra red a través de Internet, creando un túnel cifrado."
        },
        {
            pregunta: "¿Qué es SQL?",
            opciones: [
                "Un protocolo de transferencia de archivos",
                "Un lenguaje de programación orientado a objetos",
                "Un lenguaje de consulta estructurado para bases de datos",
                "Un sistema operativo para servidores"
            ],
            respuestaCorrecta: 2,
            explicacion: "SQL (Structured Query Language) es un lenguaje de programación diseñado específicamente para administrar y recuperar información de sistemas de gestión de bases de datos relacionales."
        }
    );

    // Bloque 4 adicionales
    preguntasBloque4.push(
        {
            pregunta: "¿Qué es un certificado SSL/TLS?",
            opciones: [
                "Un documento que identifica a un usuario",
                "Un archivo digital que autentica un sitio web y permite conexiones cifradas",
                "Un permiso para operar como entidad de certificación",
                "Un registro de actividades de seguridad"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un certificado SSL/TLS es un archivo digital que autentica la identidad de un sitio web y permite una conexión cifrada entre el servidor web y el navegador."
        },
        {
            pregunta: "¿Qué significa el acrónimo DDoS?",
            opciones: [
                "Data Delivery over Secure Socket",
                "Digital Domain of Service",
                "Distributed Denial of Service",
                "Dynamic Data Operating System"
            ],
            respuestaCorrecta: 2,
            explicacion: "DDoS (Distributed Denial of Service) es un tipo de ataque informático donde múltiples sistemas infectados atacan a un solo objetivo, causando una denegación de servicio para los usuarios legítimos."
        }
    );

    // Añadir más preguntas a los tests de años específicos
    test2024Preguntas.push(
        {
            pregunta: "¿Qué norma regula el régimen jurídico del sector público en España?",
            opciones: [
                "Ley 39/2015",
                "Ley 40/2015",
                "Ley 38/2003",
                "Ley 9/2017"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, es la norma que regula el régimen jurídico del sector público español."
        },
        {
            pregunta: "¿Qué es un ataque de phishing?",
            opciones: [
                "Un virus informático",
                "Un ataque de fuerza bruta a contraseñas",
                "Una técnica para suplantar la identidad con fines fraudulentos",
                "Una técnica para comprometer redes Wi-Fi"
            ],
            respuestaCorrecta: 2,
            explicacion: "El phishing es una técnica de ingeniería social que consiste en suplantar la identidad (de entidades o personas) para engañar a los usuarios y obtener información sensible como contraseñas o datos bancarios."
        },
        {
            pregunta: "¿Cuál de estas afirmaciones es correcta según la Constitución Española?",
            opciones: [
                "Las Comunidades Autónomas no pueden asumir competencias en materia de justicia",
                "El Estado tiene competencia exclusiva en todas las materias relativas a seguridad pública",
                "Las Cortes Generales están formadas por el Congreso, el Senado y las Asambleas Legislativas de las CCAA",
                "La forma política del Estado español es la Monarquía parlamentaria"
            ],
            respuestaCorrecta: 3,
            explicacion: "Según el artículo 1.3 de la Constitución Española, la forma política del Estado español es la Monarquía parlamentaria."
        }
    );

    test2022Preguntas.push(
        {
            pregunta: "¿Qué es el ENI en el ámbito de la administración electrónica?",
            opciones: [
                "Estándar Nacional de Interconexión",
                "Esquema Nacional de Integridad",
                "Esquema Nacional de Interoperabilidad",
                "Entidad Nacional de Informática"
            ],
            respuestaCorrecta: 2,
            explicacion: "El ENI (Esquema Nacional de Interoperabilidad) establece los principios y directrices de interoperabilidad en el intercambio y conservación de la información electrónica en el ámbito de la Administración Pública."
        },
        {
            pregunta: "¿Qué es un sistema de ficheros en informática?",
            opciones: [
                "Un método para organizar archivos en un dispositivo de almacenamiento",
                "Un programa antivirus",
                "Un tipo de memoria RAM",
                "Un protocolo de comunicación entre dispositivos"
            ],
            respuestaCorrecta: 0,
            explicacion: "Un sistema de ficheros o sistema de archivos es un método para organizar y almacenar archivos en dispositivos de almacenamiento como discos duros, que define cómo se nombran, guardan y recuperan los datos."
        }
    );
});