// Estructura para almacenar los tests de años específicos
const testsAnuales = {
  2024: [],
  2022: [],
  2020: [],
  2019: [],
  2018: [],
};

// Ejemplo de preguntas para cada año (5 por año)
// Formato: [pregunta, opción1, opción2, opción3, opción4, respuestaCorrecta]
testsAnuales["2024"] = [
  [
    "¿Cuál de los siguientes derechos recogidos en el Capítulo Segundo del Título I de la Constitución Española NO forma parte de los Derechos Fundamentales y Libertades Públicas (Artículos 15 a 29)?",
    "Derecho a sindicarse libremente.",
    "Derecho a la propiedad privada.",
    "Derecho a la producción y creación literaria, artística, científica y técnica.",
    "Derecho a elegir libremente su residencia.",
    "Derecho a la propiedad privada.",
  ],

  [
    'Según el Título I, Capítulo Cuarto, "De las garantías de las libertades y derechos fundamentales" de la Constitución Española de 1978, señale la opción correcta:',
    "Los derechos y libertades reconocidos no vinculan a todas las Administraciones Públicas.",
    "Sólo por ley orgánica podrá regularse el ejercicio de tales derechos y libertades.",
    "Una ley orgánica regulará la institución del Defensor del Pueblo.",
    "El reconocimiento, el respeto y la protección de los principios reconocidos en el Capítulo tercero, informará la judicialización positiva, la práctica legislativa y la actuación de los poderes públicos.",
    "Una ley orgánica regulará la institución del Defensor del Pueblo.",
  ],

  [
    "Señale la respuesta INCORRECTA de acuerdo con el Título II, artículo 62 de la Constitución Española de 1978. Corresponde al Rey:",
    "Convocar a referéndum en los casos previstos en la Constitución, previa autorización de las Cortes Generales.",
    "Convocar y disolver las Cortes Generales y convocar elecciones en los términos previstos en la Constitución.",
    "Proponer el candidato a Presidente de Gobierno y, en su caso, nombrarlo, así como poner fin a sus funciones en los términos previstos en la Constitución.",
    "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.",
    "Convocar a referéndum en los casos previstos en la Constitución, previa autorización de las Cortes Generales.",
  ],

  [
    "¿Quién puede ser elegido Defensor del Pueblo, según la Ley Orgánica 3/1981, de 6 de abril?",
    "Cualquier Magistrado elegido por las Cortes Generales.",
    "Cualquier Senador elegido por las Cortes Generales.",
    "Cualquier persona que se encuentre en el pleno disfrute de sus derechos civiles.",
    "Cualquier español mayor de edad que se encuentre en el pleno disfrute de sus derechos civiles y políticos.",
    "Cualquier español mayor de edad que se encuentre en el pleno disfrute de sus derechos civiles y políticos.",
  ],

  [
    "Según el artículo 71 de la Constitución Española de 1978, ¿quién es el competente en las causas contra Diputados y Senadores?",
    "Sala de lo Penal del Tribunal Constitucional.",
    "Sala de lo Contencioso Administrativo del Tribunal Supremo.",
    "Sala de lo Penal del Tribunal Supremo.",
    "Sala de lo Civil del Tribunal Supremo.",
    "Sala de lo Penal del Tribunal Supremo.",
  ],

  [
    'Según el Título III "De las Cortes Generales" de la Constitución Española de 1978, las Cámaras podrán:',
    "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentación directa por manifestaciones ciudadanas.",
    "Delegar en las Comisiones Legislativas Permanentes la aprobación de proyectos o proposiciones de ley relativas a los Presupuestos Generales del Estado.",
    "Reunirse en sesión extraordinaria a petición de la mayoría simple de los miembros de cualquiera de las Cámaras.",
    "Nombrar conjuntamente Comisiones de Investigación sobre asuntos de interés público. Sus conclusiones serán vinculantes para los Tribunales.",
    "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentación directa por manifestaciones ciudadanas.",
  ],

  [
    "Según lo establecido en el artículo 159 de la Constitución Española de 1978, los miembros del Tribunal Constitucional serán designados por períodos de:",
    "9 años y se renovarán por terceras partes cada 3.",
    "9 años y se renovarán por terceras partes cada 2.",
    "6 años y se renovarán por terceras partes cada 3.",
    "6 años y se renovarán por terceras partes cada 2.",
    "9 años y se renovarán por terceras partes cada 3.",
  ],

  [
    "El Gobierno se rige, en su organización y funcionamiento, entre otras, por la Ley:",
    "Ley 50/1997, de 27 de noviembre.",
    "Ley 50/1999, de 26 de noviembre.",
    "Ley 50/1996, de 28 de noviembre.",
    "Ley 50/1998, de 29 de noviembre.",
    "Ley 50/1997, de 27 de noviembre.",
  ],

  [
    "La Constitución Española de 1978 en su artículo 113 establece que:",
    "El Congreso de los Diputados puede exigir la responsabilidad jurídica del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
    "El Congreso de los Diputados puede exigir la responsabilidad política del Gobierno mediante la adopción por mayoría simple de la moción de censura.",
    "El Congreso de los Diputados puede exigir la responsabilidad civil del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
    "El Congreso de los Diputados puede exigir la responsabilidad política del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
    "El Congreso de los Diputados puede exigir la responsabilidad política del Gobierno mediante la adopción por mayoría absoluta de la moción de censura.",
  ],

  [
    "Señale la respuesta INCORRECTA sobre el uso obligatorio de firma requerida a los interesados por parte de las Administraciones Públicas que recoge el artículo 11 de Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
    "Conocer el estado de la tramitación.",
    "Desistir de acciones.",
    "Presentar declaraciones responsables o comunicaciones.",
    "Formular solicitudes.",
    "Conocer el estado de la tramitación.",
  ],
  [
    "Tal y como se recoge en la Resolución de 14 de diciembre de 2015, de la Dirección de Tecnologías de la Información y las Comunicaciones, por la que se establecen las prescripciones técnicas necesarias para el desarrollo y aplicación del sistema Cl@ve, señale la respuesta correcta:",
    "Es un sistema que está dirigido a los ciudadanos que cumplan con los requisitos indicados en las Prescripciones Técnicas.",
    "Ofrece tres niveles de garantía de registro asociados a la forma y a las garantías que ofrezca la comunicación de la información de registro por parte del ciudadano.",
    "Proporcionará a los usuarios tres modalidades de identificación electrónica basadas en el uso de claves concertadas.",
    "Permitirá también el acceso a servicios de firma electrónica, en particular, a servicios de firma de documentos electrónicos mediante certificados electrónicos centralizados.",
    "Permitirá también el acceso a servicios de firma electrónica, en particular, a servicios de firma de documentos electrónicos mediante certificados electrónicos centralizados.",
  ],

  [
    "Señale la respuesta correcta sobre la solicitud de acceso a la información pública que recoge el artículo 17 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno:",
    "Sólo se podrá presentar en castellano.",
    "Es obligatorio indicar una dirección de contacto electrónica, a efectos de comunicaciones.",
    "Deberá dirigirse al titular del órgano administrativo o entidad que posea la información.",
    "Deberá motivarse.",
    "Deberá dirigirse al titular del órgano administrativo o entidad que posea la información.",
  ],

  [
    "Indique la respuesta correcta sobre la vigencia que tienen los certificados electrónicos reconocidos incorporados al documento nacional de identidad, según la legislación vigente:",
    "No podrá ser superior a tres años.",
    "No podrá ser superior a cuatro años.",
    "No podrá ser superior a cinco años.",
    "No podrá ser superior a seis años.",
    "No podrá ser superior a cinco años.",
  ],

  [
    "La Ley 56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Información, ¿qué establece sobre la factura electrónica en el artículo 1?",
    "Los formatos estructurados de las facturas electrónicas permitirán su visualización y emisión en las distintas lenguas oficiales existentes y en inglés, con la finalidad de garantizar los derechos de los usuarios nacionales y extranjeros.",
    "Los formatos estructurados de las facturas electrónicas permitirán su visualización y emisión en las distintas lenguas oficiales existentes, con la finalidad de garantizar los derechos de los usuarios.",
    "No trata en ningún artículo sobre la factura electrónica.",
    "La factura electrónica solo se utilizará en contratación, estando excluida de la justificación de ayudas y subvenciones.",
    "Los formatos estructurados de las facturas electrónicas permitirán su visualización y emisión en las distintas lenguas oficiales existentes, con la finalidad de garantizar los derechos de los usuarios.",
  ],

  [
    "¿Qué principio relativo al tratamiento de datos personales definido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos) se refiere a que los datos serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados?",
    "Limitación de la finalidad.",
    "Exactitud.",
    "Minimización de datos.",
    "Adecuación de datos.",
    "Minimización de datos.",
  ],

  [
    "Señale la respuesta correcta respecto a las notificaciones según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
    "Toda notificación deberá ser cursada dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado.",
    "Cuando los interesados en un procedimiento sean desconocidos, se ignore el lugar de la notificación o bien, intentada ésta, no se hubiese podido practicar, la notificación se hará por medio de un anuncio publicado en el BOE.",
    "Las notificaciones se practicarán preferentemente en papel y, en todo caso, cuando el interesado resulte obligado a recibirlas por esta vía.",
    "Cuando la notificación se practique en el domicilio del interesado, de no hallarse presente éste en el momento de entregarse la notificación, podrá hacerse cargo de ella cualquier persona mayor de dieciséis años que se encuentre en el domicilio y haga constar su identidad.",
    "Cuando los interesados en un procedimiento sean desconocidos, se ignore el lugar de la notificación o bien, intentada ésta, no se hubiese podido practicar, la notificación se hará por medio de un anuncio publicado en el BOE.",
  ],
  [
    "De acuerdo con el Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos, ¿cuál de las siguientes opciones forma parte del contenido mínimo que debe contener una sede electrónica?",
    "Relación de los canales de acceso electrónico a dicha sede como instrumento de comunicación para los ciudadanos.",
    "Relación de los Puntos de Acceso General electrónicos que la referencian directa o indirectamente.",
    "Normativa reguladora del Registro al que se acceda a través de la sede electrónica.",
    "Enlace directo al Boletín Oficial correspondiente.",
    "Normativa reguladora del Registro al que se acceda a través de la sede electrónica.",
  ],

  [
    "Marque la respuesta correcta relacionada con el nodo eIDAS español:",
    "Para las Administraciones Públicas, la integración con el nodo eIDAS español se realiza a través de @Firma.",
    "Permite el reconocimiento de identidades en soportes físicos emitidas por otros países.",
    "Facilita la aceptación del DNI electrónico en servicios de Administración Electrónica de otras administraciones integrantes de la OCDE.",
    "Utiliza un sistema de intercambio de mensajes conforme al estándar SAML 2.0.",
    "Utiliza un sistema de intercambio de mensajes conforme al estándar SAML 2.0.",
  ],

  [
    "¿Qué es la taxonomía de Flynn?",
    "Una clasificación de patrones de diseño para objetos de software, centrados en su creación, relación e interacción.",
    "Una clasificación para las computadoras con arquitectura paralela atendiendo al flujo de datos e instrucciones en un sistema.",
    'Una clasificación que pretende clarificar los diferentes tipos de tecnologías, técnicas y mecanismos que abarca el concepto abstracto de "Inteligencia Artificial".',
    "Una clasificación de los tipos de controladores (drivers) JDBC.",
    "Una clasificación para las computadoras con arquitectura paralela atendiendo al flujo de datos e instrucciones en un sistema.",
  ],

  [
    "Indique, de las siguientes palabras, cuál indica además un número hexadecimal válido:",
    "EBOCA",
    "BECADAS",
    "ACCEDA",
    "CEGADA",
    "ACCEDA",
  ],

  [
    "Señale cuál de las siguientes es un formato de interfaz SSD:",
    "HHP",
    "MMVe",
    "MMD",
    "M.2",
    "M.2",
  ],

  [
    "Un controlador de dispositivo periférico:",
    "Es el componente electrónico de la unidad de entrada y salida.",
    "Es el componente mecánico de la unidad de entrada y salida.",
    "Es la interfaz entre el adaptador y la unidad de entrada y salida.",
    "Es la interfaz entre la tarjeta controladora y el cable de conexión.",
    "Es el componente electrónico de la unidad de entrada y salida.",
  ],

  [
    "Con respecto a los árboles 2-3-4, señale la respuesta correcta:",
    "Cumple las propiedades del árbol binario de búsqueda.",
    "Las hojas pueden estar a distinto nivel.",
    "Los nodos pueden tener 2, 3 o 4 hijos (2-nodo, 3-nodo o 4-nodo).",
    "Las reestructuraciones se realizan desde las hojas hacia la raíz.",
    "Los nodos pueden tener 2, 3 o 4 hijos (2-nodo, 3-nodo o 4-nodo).",
  ],

  [
    "Señale la respuesta correcta referente al tipo abstracto de datos (TAD) Cola:",
    "Basada en el principio LIFO (last-in, first-out).",
    "Es un tipo especial de lista en la que se pueden insertar y eliminar por cualquier extremo.",
    "Cada nodo tiene dos enlaces, uno al nodo siguiente, y otro al anterior.",
    "Se pude implementar usando una estructura dinámica.",
    "Se pude implementar usando una estructura dinámica.",
  ],

  [
    "Señale la respuesta INCORRECTA acerca de los tipos abstractos de datos (TAD):",
    "Es una colección de propiedades y operaciones que se definen mediante una especificación que es independiente de cualquier representación.",
    "Nos permiten diseñar nuestros propios tipos para encapsular lógica algorítmica y proveer abstracción a las capas de software de más alto nivel.",
    "Se pueden escribir usando lenguaje natural, usando pseudo-código o incluso algún lenguaje de programación.",
    "En JAVA, una estructura de datos (interface) debe implementar todas las operaciones definidas en su TAD (class).",
    "En JAVA, una estructura de datos (interface) debe implementar todas las operaciones definidas en su TAD (class).",
  ],

  [
    "¿Cuál es la función del kernel en un sistema operativo Unix/Linux?",
    "Gestionar la interfaz gráfica.",
    "Controlar los procesos, la memoria y la administración de dispositivos.",
    "Proveer servicios de red como TCP/IP.",
    "Facilitar la comunicación entre usuarios a través de terminales.",
    "Controlar los procesos, la memoria y la administración de dispositivos.",
  ],

  [
    "Señale la respuesta INCORRECTA. Android NDK:",
    "Es un conjunto de herramientas que permiten implementar partes de las aplicaciones de Android mediante C y C++.",
    "Genera librerías binarias para cada arquitectura de procesador que se pueden invocar desde Java por medio de JNI (Java Native Interface).",
    "Se recomienda su uso con aplicaciones intensivas a nivel computacional, como juegos o simulaciones físicas.",
    "No permite la reutilización de código, no pudiendo usar bibliotecas de otros desarrolladores.",
    "No permite la reutilización de código, no pudiendo usar bibliotecas de otros desarrolladores.",
  ],

  [
    "¿Cuál es la característica diferenciadora de las claves foráneas en una base de datos relacional?",
    "Un atributo que no tiene relación con otras tablas.",
    "Un atributo que referencia la clave primaria de otra tabla.",
    "Un atributo que puede tener valores duplicados. de datos.",
    "Un atributo que se utiliza solo para consultas.",
    "Un atributo que referencia la clave primaria de otra tabla.",
  ],

  [
    "¿Cuál de los siguientes es un Sistema de Gestión de Bases de Datos Orientadas a Objetos (SGDBOO)?",
    "Cézanne.",
    "Picasso.",
    "Matisse.",
    "Rembrandt.",
    "Matisse.",
  ],

  [
    "¿Qué es el lenguaje OQL en el contexto de las bases de datos orientadas a objetos?",
    "OQL no es un lenguaje en el contexto de las bases de datos orientadas a objetos.",
    "Un lenguaje de definición de datos.",
    "Un lenguaje de consulta de datos.",
    "Un lenguaje de manipulación de datos.",
    "Un lenguaje de consulta de datos.",
  ],
  [
    "De acuerdo con Métrica v3, en el Modelo Entidad/Relación Extendido, ¿cuál es el término que representa la participación en la relación de cada una de las entidades afectadas?",
    "Atributo.",
    "Cardinalidad.",
    "Tipo de Correspondencia.",
    "Dominio.",
    "Cardinalidad.",
  ],

  [
    "Señale la respuesta correcta sobre la normalización de bases de datos en Métrica v3:",
    "Un atributo tiene dependencia funcional completa de otro si, y sólo si, depende de él a través de otro atributo.",
    "Una entidad está en 1FN si tiene grupos repetitivos, es decir, un atributo puede tomar varios valores de un dominio simple.",
    "Una entidad está en 2FN si está en 1FN y todos los atributos que no forman parte de las claves candidatas tienen dependencia funcional completa respecto de éstas.",
    "Una relación en 3FN estará también en 2FN, pero no en 1FN.",
    "Una entidad está en 2FN si está en 1FN y todos los atributos que no forman parte de las claves candidatas tienen dependencia funcional completa respecto de éstas.",
  ],

  [
    "Señale, de entre las siguientes opciones, el mecanismo en el Modelo Entidad/Relación Extendido que recoge Métrica v3 consistente en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian:",
    "Asociación.",
    "Generalización.",
    "PERT.",
    "Regresión.",
    "Asociación.",
  ],
  [
    "Para las variables a=1, b=2, c=3, d=1 ¿cuál es la operación lógica que da un resultado true?",
    "((a>b) or (a<c)) and ((a==c) or (a>=b))",
    "((a>=b) or (a<d)) and ((a>=d) or (c>d))",
    "Not (a==c) and (c>b)",
    "Not (a>=d) and not (c>=b)",
    "Not (a==c) and (c>b)",
  ],

  [
    "Señale la respuesta correcta en relación con las funciones y los procedimientos:",
    "Una llamada a un procedimiento puede aparecer como operando de una expresión.",
    "El paso de parámetros por referencia envía una copia del valor que tenga el parámetro real, por lo que no se podrá alterar el contenido de la variable.",
    "Los parámetros por referencia se pueden emplear como parámetros de entrada/salida.",
    "Todo procedimiento debe ejecutar una sentencia de return.",
    "Los parámetros por referencia se pueden emplear como parámetros de entrada/salida.",
  ],
  [
    "Suponga el siguiente programa escrito en un lenguaje de programación estándar: integer x=0; while x<100 do (x=x+1; print x; x=x-1;)",
    "Este programa imprime los números enteros del 1 al 100.",
    "Este programa imprime los números impares del 1 al 100.",
    "Este programa imprime los números pares del 1 al 100.",
    "Este programa es un bucle infinito.",
    "Este programa es un bucle infinito.",
  ],
  [
    "Referente a los comandos DML del lenguaje SQL, señale la respuesta correcta:",
    "DML es acrónimo de Data Manager Language.",
    "Permiten crear nuevas bases de datos, añadiendo y eliminando elementos.",
    "El comando TRUNCATE es un comando DML.",
    "El comando SELECT es un comando DML.",
    "El comando SELECT es un comando DML.",
  ],

  [
    "Referente al comando DROP de SQL, es correcto decir:",
    "Es un comando DCL.",
    "Puede ser ejecutado por disparadores (triggers).",
    "Se utiliza para eliminar la estructura de una tabla junto con cualquier dato almacenado en ella.",
    "Utiliza WHERE para condiciones de filtrado.",
    "Se utiliza para eliminar la estructura de una tabla junto con cualquier dato almacenado en ella.",
  ],

  [
    "Señale la respuesta INCORRECTA referente a los disparadores o triggers de una base de datos:",
    "Son procedimientos que se ejecutan o activan cada vez que ocurre un evento determinado sobre una tabla determinada.",
    "Los eventos que se pueden asociar a la ejecución de un trigger son: INSERT, UPDATE, DELETE.",
    "Puede decidirse que se activen antes o después de un evento determinado.",
    "Un error durante la ejecución de cualquier trigger no cancela automáticamente la operación que lo disparó, la cancelación hay que programarla.",
    "Un error durante la ejecución de cualquier trigger no cancela automáticamente la operación que lo disparó, la cancelación hay que programarla.",
  ],

  [
    "En diseño y programación orientada a objetos, una relación de generalización entre clases:",
    "Implica que la subclase hereda las propiedades, el comportamiento y las relaciones de la superclase, a la vez que puede añadir sus propias propiedades, relaciones y comportamiento.",
    "Describe un conjunto de enlaces, que definen las interconexiones semánticas entre las instancias de las clases que participan en la relación.",
    "Asume una subordinación conceptual del tipo 'todo/parte', o bien 'tiene un.",
    "Se representa mediante una línea discontinua que une la superclase y subclase con un rectángulo al lado de la superclase.",
    "Implica que la subclase hereda las propiedades, el comportamiento y las relaciones de la superclase, a la vez que puede añadir sus propias propiedades, relaciones y comportamiento.",
  ],

  [
    "Señale la respuesta INCORRECTA respecto al Lenguaje de Modelado Unificado (UML):",
    "Es un lenguaje basado en diagramas para la especificación, visualización, construcción y documentación de cualquier sistema software.",
    "Es independiente de las metodologías de análisis y diseño y de los lenguajes de programación que se utilicen en la construcción del software.",
    "Se basa en el paradigma de la orientación a objetos.",
    "Muestra únicamente el modelado estático de un sistema software, que puede utilizarse en las diferentes fases de su ciclo de desarrollo.",
    "Muestra únicamente el modelado estático de un sistema software, que puede utilizarse en las diferentes fases de su ciclo de desarrollo.",
  ],

  [
    "Señale la respuesta INCORRECTA. El patrón de diseño 'Composite':",
    "Es un patrón de diseño estructural que permite componer objetos en estructuras de árbol.",
    "Sirve para construir objetos complejos a partir de otros más simples y similares entre sí.",
    "Simplifica el tratamiento de los objetos creados que, al poseer de una interfaz común, se tratan todos de la misma manera.",
    "Se recomienda su uso cuando se quiere añadir responsabilidades a objetos concretos de manera dinámica y transparente y sin afectar a otros objetos.",
    "Se recomienda su uso cuando se quiere añadir responsabilidades a objetos concretos de manera dinámica y transparente y sin afectar a otros objetos.",
  ],

  [
    "¿Qué es .NET MAUI?",
    ".NET MAUI es un marco multiplataforma para crear aplicaciones móviles y de escritorio nativas con C# y XAML.",
    "Es una plataforma para desarrollar aplicaciones en Java.",
    "Es una herramienta de pruebas automatizadas.",
    "Es una plataforma para desarrollar aplicaciones móviles que se puede ejecutar en sistema Android solamente.",
    ".NET MAUI es un marco multiplataforma para crear aplicaciones móviles y de escritorio nativas con C# y XAML.",
  ],
  [
    "En el ámbito de ASP.NET Core, señale la respuesta correcta respecto a Razor:",
    "Razor es la sintaxis de plantillas utilizada en ASP.NET Core para crear vistas dinámicas en aplicaciones web.",
    "Es uno de los lenguajes de programación que se utilizan con ASP.NET Core.",
    "Razor se ejecuta directamente en el navegador del cliente.",
    "Razor utiliza el @símbolo para realizar la transición de C# a HTML.",
    "Razor es la sintaxis de plantillas utilizada en ASP.NET Core para crear vistas dinámicas en aplicaciones web.",
  ],
  [
    "La persistencia en Jakarta EE se gestiona principalmente a través de la especificación Jakarta Persistence API (JPA) Indique la respuesta correcta",
    "Una de sus ventajas es que no necesita utilizar un proveedor de JPA",
    "El lenguaje de consulta similar a SQL pero orientado a objetos de JPA es JPSQL",
    "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla",
    "JPA no permite definir relaciones entre entidades del tipo uno a muchos",
    "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla",
    "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla",
    "JPA no permite definir relaciones entre entidades del tipo uno a muchos",
    "Normalmente, una entidad representa una tabla en una base de datos relacional y cada instancia de la entidad corresponde a una fila de esa tabla",
  ],
  [
    "¿Cuál es una característica de los sistemas distribuidos?",
    "Falta de transparencia: un nodo no puede acceder a otros nodos del sistema y comunicarse con ellos.",
    "Procesamiento independiente: varias máquinas no pueden procesar la misma función a la vez.",
    "Escalabilidad: la capacidad computacional y de procesamiento puede escalarse hacia arriba según sea necesario cuando se añaden máquinas adicionales.",
    "Comunicación diferencial: usan nodos distintos para comunicarse y sincronizarse a través de redes independientes entre sí.",
    "Escalabilidad: la capacidad computacional y de procesamiento puede escalarse hacia arriba según sea necesario cuando se añaden máquinas adicionales.",
  ],

  [
    "Señale la opción correcta sobre la arquitectura de servicios web REST:",
    "En la arquitectura REST, el servicio no almacena información sobre el estado del cliente entre peticiones.",
    "El uso de identificadores está basado en SOA.",
    "En la arquitectura REST, la interfaz para acceder a los recursos expuestos puede ser HTTP o FTP.",
    "Es una arquitectura no orientada a recursos.",
    "En la arquitectura REST, el servicio no almacena información sobre el estado del cliente entre peticiones.",
  ],

  [
    "¿Cuál de las siguientes es una diferencia entre HTML y XHTML?",
    "HTML exige que las etiquetas se escriban en minúscula, mientras que XHTML no.",
    "XHTML permite que haya elementos no vacíos sin cerrar, mientras que HTML no.",
    "En HTML es obligatorio que los valores de los atributos vayan entre comillas, mientras que en XHTML no.",
    "En XHTML es obligatoria la presencia del elemento <head>.",
    "En XHTML es obligatoria la presencia del elemento <head>.",
  ],

  [
    "¿Qué evento de HTML utilizaría para producir un efecto al situar el puntero del ratón sobre un elemento?",
    "onclick.",
    "onmouseover.",
    "onmousedown.",
    "onmouseout.",
    "onmouseover.",
  ],

  [
    "Con respecto a las solicitudes de información accesible y quejas, el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público establece que:",
    "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de veinte días naturales.",
    "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de veinte días hábiles.",
    "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de diez días naturales.",
    "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de diez días hábiles.",
    "Recibidas las solicitudes de información accesible y quejas, la entidad obligada deberá responder a la persona interesada en el plazo de veinte días hábiles.",
  ],

  [
    "En relación a los principios del Diseño Universal, señale cuál es uno de ellos:",
    "Seguridad.",
    "Información operable.",
    "Robustez.",
    "Alto esfuerzo físico.",
    "Seguridad.",
  ],

  [
    "Señale la respuesta correcta referente al término ATAG:",
    "Son Pautas de Accesibilidad que explican cómo hacer que el contenido web sea más accesible para las personas con discapacidades.",
    "Es una Suite que define una forma de hacer que el contenido web y las aplicaciones web sean más accesibles para las personas con discapacidades.",
    "Son Pautas de Accesibilidad que explican cómo hacer que los agentes de usuario sean accesibles para las personas con discapacidades.",
    "Son un conjunto de normas que deben cumplir las herramientas de autor para ser accesibles y generar contenidos también accesibles.",
    "Son un conjunto de normas que deben cumplir las herramientas de autor para ser accesibles y generar contenidos también accesibles.",
  ],

  [
    "¿Cuál de las siguientes opciones se utilizan para el control de versiones?",
    "Mercurial, CVS y Selenium.",
    "GitLab, GitHub y Apache Subversion.",
    "SVN, Git y Cucumber.",
    "Selenium, Cucumber y GitLab.",
    "GitLab, GitHub y Apache Subversion.",
  ],

  [
    "Según establece Métrica V3, en la construcción de un sistema de información, las pruebas que permiten verificar que los componentes o subsistemas interactúan correctamente a través de sus interfaces, tanto internas como externas, cubren la funcionalidad establecida y se ajustan a los requisitos especificados en las verificaciones correspondientes son:",
    "Pruebas unitarias.",
    "Pruebas de integración.",
    "Pruebas del sistema.",
    "Pruebas de migración.",
    "Pruebas de integración.",
  ],

  [
    "¿Cuál de los siguientes conceptos permite que un proceso ejecute múltiples tareas de manera simultánea o concurrente en un sistema operativo?",
    "Segmentación.",
    "Paginación.",
    "Prepaging.",
    "Hilos.",
    "Hilos.",
  ],

  [
    "El comando sfc /scannow:",
    "Examina todos los archivos de sistema protegidos y reemplaza los archivos dañados con una copia en caché.",
    "Rrepara el entorno de arranque ubicado en la partición del sistema.",
    "Muestra o establece la directiva de red de área de almacenamiento (sanSAN) para el sistema operativo.",
    "Analizar uno o varios servidores con una directiva generada por SCW.",
    "Examina todos los archivos de sistema protegidos y reemplaza los archivos dañados con una copia en caché.",
  ],
  [
    "¿Cuánta carga útil puede almacenar un jumboframe?",
    "7.000 bytes.",
    "1.500 bytes.",
    "9.000 bytes.",
    "10.000 bytes.",
    "9.000 bytes.",
  ],

  [
    "¿Qué protocolo hay que utilizar para obtener una dirección física a partir de una dirección lógica?",
    "RARP.",
    "NAT.",
    "ARP.",
    "PAT.",
    "ARP.",
  ],

  [
    "¿Qué topología de red consiste en conectar todos los nodos directamente a un nodo central?",
    "Estrella.",
    "Anillo.",
    "Bus.",
    "Árbol.",
    "Estrella.",
  ],

  [
    "La regla 3-2-1 de las copias de seguridad consiste en:",
    "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar externo a la organización.",
    "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar externo a la organización.",
    "Conservar 3 copias de los datos, en 2 medios iguales con 1 copia almacenada en un lugar interno a la organización.",
    "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar interno a la organización.",
    "Conservar 3 copias de los datos, en 2 medios diferentes con 1 copia almacenada en un lugar externo a la organización.",
  ],

  [
    "Señale la respuesta correcta referente a los sistemas de almacenamiento SAN y NAS:",
    "SAN es más económico y fácil de configurar.",
    "SAN es el acrónimo de Storage Attached Network.",
    "NAS es un dispositivo de almacenamiento compartido basado en archivos.",
    "NAS es el acrónimo de Network Area Storage.",
    "NAS es un dispositivo de almacenamiento compartido basado en archivos.",
  ],

  [
    "Señale la respuesta correcta:",
    "Los backups utilizan poca capacidad de almacenamiento.",
    "Los backups son manuales, los snapshots son programables.",
    "Los backups pueden almacenarse en localizaciones y medios distintos.",
    "Los backups son una representación instantánea del estado de un sistema en un momento específico.",
    "Los backups pueden almacenarse en localizaciones y medios distintos.",
  ],

  [
    "¿Cuál es una ventaja del uso del protocolo IMAP en lugar de POP3?",
    "Permite visualizar los correos directamente en el servidor sin descargarlos.",
    "Es más sencillo que POP3.",
    "No requiere autenticación.",
    "Descarga los correos automáticamente del servidor.",
    "Permite visualizar los correos directamente en el servidor sin descargarlos.",
  ],

  [
    "Señale cuáles de las siguientes son tecnologías relacionadas con la contenerización y la gestión de contenedores:",
    "Docker, Containerd y Podman.",
    "Docker, CRI-O y nginx.",
    "Podman, Kubernetes y Ubuntu.",
    "Docker, Kubernetes y Debian.",
    "Docker, Containerd y Podman.",
  ],

  [
    "Indique la respuesta INCORRECTA respecto a PoE (Power over Ethernet):",
    "Power over Ethernet (PoE) es una tecnología que permite que los conmutadores de red transmitan energía y datos a través de un cable Ethernet simultáneamente.",
    "Existen dos tipos: PoE activo y PoE pasivo.",
    "PoE pasivo no se adhiere a ningún estándar IEEE.",
    "El último estándar de PoE activo es el IEEE 802.3at.",
    "El último estándar de PoE activo es el IEEE 802.3at.",
  ],

  [
    "La norma IEEE 802.11 se refiere a:",
    "Redes inalámbricas.",
    "Redes de área metropolitana.",
    "Redes integradas para voz y datos.",
    "Seguridad de red.",
    "Redes inalámbricas.",
  ],

  [
    "¿Cuál de las siguientes es una herramienta de ticketing para la gestión de incidentes de seguridad en las entidades del ámbito de aplicación del Esquema Nacional de Seguridad?",
    "ATENEA.",
    "MONICA.",
    "LUCIA.",
    "INES.",
    "LUCIA.",
  ],

  [
    "Indique la respuesta correcta sobre el formato de firma digital CAdES:",
    "Es apropiado para firmar ficheros grandes, especialmente si la firma contiene el documento original.",
    "Es el formato de firma que utiliza Microsoft Office.",
    "El resultado es un fichero de texto XML. No es adecuado cuando el fichero original es muy grande.",
    "Es el formato más adecuado cuando el documento original es un PDF.",
    "Es apropiado para firmar ficheros grandes, especialmente si la firma contiene el documento original.",
  ],

  [
    "Indique la respuesta correcta sobre tipos de ataque a un sistema de información:",
    "El sniffing es la generación de tráfico utilizando un origen falseado.",
    "El spoofing es la captura del tráfico que circula por una red.",
    "Denegacion de servicio distribuida (DDoS) es un ataque a varios objetivos desde un solo punto, con la finalidad de degradar total o parcialmente los servicios prestados por esos recursos a sus usuarios legítimos.",
    "El barrido (escaneo) de puertos es un ataque que trata de obtener información básica acerca de qué servicios se ofrecen en un determinado sistema, así como otros detalles técnicos del mismo.",
    "El barrido (escaneo) de puertos es un ataque que trata de obtener información básica acerca de qué servicios se ofrecen en un determinado sistema, así como otros detalles técnicos del mismo.",
  ],

  [
    "¿Cuál de las siguientes categorías de cable Ethernet tiene 10.000 Mbps como tope de velocidad de transferencia?",
    "Categoría 6A.",
    "Categoría 8.",
    "Categoría 6.",
    "Categoría 5E.",
    "Categoría 6A.",
  ],

  [
    "Señale cuál de las siguientes tecnologías NO es una tecnología LPWAN:",
    "LoRaWAN.",
    "Bluetooth LE.",
    "SigFox.",
    "NB-IoT.",
    "Bluetooth LE.",
  ],
  [
    "¿Cuál de las siguientes respuestas es correcta respecto al modelo OSI de ISO?",
    "Las capas o niveles del modelo OSI son: Física, de red, de transporte, de sesión, de presentación y de aplicación.",
    "La versión actual del estándar OSI es la ISO/IEC 7498-1:1994.",
    "La capa de transporte se ocupa, entre otros, de aspectos como el enrutamiento, el reenvío y el direccionamiento a través de una red.",
    "La capa de sesión a menudo se divide en dos subcapas: la capa de control de acceso a los medios (MAC) y la capa de control de enlace lógico (LLC).",
    "La versión actual del estándar OSI es la ISO/IEC 7498-1:1994.",
  ],

  [
    "¿Cuál es la respuesta correcta con respecto modelo TCP/IP?",
    "La arquitectura TCP/IP tiene cinco capas o niveles: Acceso a red, Internet, Transporte, Sesión y Aplicación.",
    "TCP y UDP son protocolos de la capa de Internet.",
    "Telnet es un protocolo de la capa de sesión.",
    "ICMP es un protocolo de la capa de Internet.",
    "ICMP es un protocolo de la capa de Internet.",
  ],

  [
    "Relativa al direccionamiento IPv4, indique la respuesta INCORRECTA:",
    "La dirección 172.16.52.63 es una dirección de clase B.",
    "Las direcciones 192.168.123.71 y 192.168.123.133 con máscara de subred 255.255.255.192 se encuentran en la misma red.",
    "Las redes de clase A usan una máscara de subred predeterminada de 255.0.0.0.",
    "En las redes clase C se permite direccionar 254 equipos como máximo.",
    "Las direcciones 192.168.123.71 y 192.168.123.133 con máscara de subred 255.255.255.192 se encuentran en la misma red.",
  ],

  [
    "¿Qué código de respuesta HTTP se devuelve si el usuario que hace la petición NO tiene autorización para obtener la información?",
    "401",
    "403",
    "405",
    "407",
    "403",
  ],

  [
    "Indique la respuesta correcta sobre el IETF (Internet Engineering Task Force):",
    "Es un organismo creador de estándares en Internet.",
    "Es responsable de las funciones administrativas relacionadas con la raíz del sistema de nombres de dominio (DNS), el direccionamiento del protocolo de Internet y otros recursos del protocolo de Internet.",
    "Es responsable de administrar y supervisar la coordinación del sistema de nombres de dominio (DNS) de Internet y sus identificadores únicos, como las direcciones de protocolo de Internet (IP).",
    "Es el Foro de Gobernanza de Internet.",
    "Es un organismo creador de estándares en Internet.",
  ],

  [
    "Sobre tipos de transferencia de archivos en el servicio FTP (File Transfer Protocol), es CORRECTO decir que:",
    "El tipo ASCII es adecuado para transferir archivos de texto plano.",
    "El tipo Multimedia es adecuado para transferir imágenes y archivos de audio.",
    "El tipo Binario solo es adecuado para transferir ficheros ejecutables para PC.",
    "El tipo ASCII es adecuado para transferir páginas HTML y las imágenes que puedan contener.",
    "El tipo ASCII es adecuado para transferir archivos de texto plano.",
  ],

  [
    "¿Cuál de los siguientes ataques consiste en suplantar a una entidad legítima por medio de llamadas telefónicas?",
    "Pharming.",
    "Smishing.",
    "Vishing.",
    "Whaling.",
    "Vishing.",
  ],

  [
    "La creación de un señuelo atractivo para potenciales atacantes con el objetivo de aprender sus ataques y poder prevenirlos o defenderlos en el futuro se hace mediante un:",
    "IPS.",
    "SIEM.",
    "IDS.",
    "Honeypot.",
    "Honeypot.",
  ],

  [
    "La herramienta del CCN que proporciona visibilidad y control sobre la red es:",
    "CARMEN.",
    "EMMA.",
    "MONICA.",
    "OLVIDO.",
    "EMMA.",
  ],
  [
    "¿Qué elemento HTML utilizaría para impedir que el e-mail exceda los 100 caracteres cuando el interesado lo cumplimente?",
    "<input type='email' id='email' name='email' size='100'>",
    "<input type='email' id='email' name='email' max='100'>",
    "<input type='email' id='email' name='email' maxlength='100'>",
    "<input type='email' id='email' name='email' length='100'>",
    "<input type='email' id='email' name='email' maxlength='100'>",
  ],
  [
    "¿Qué ORM podría utilizar, en función de la solución de backend escogida?",
    "JPA en .NET e Hibernate en Java.",
    "Hibernate en .NET y Entity Framework en Java.",
    "Entity Framework en .NET e Hibernate en Java.",
    "Spring Data en .NET e Hibernate en Java.",
    "Entity Framework en .NET e Hibernate en Java.",
  ],
  [
    "¿Qué sentencia habría que ejecutar si se quiere añadir un nuevo registro a la tabla \"CuerpoBecado\"?",
    "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI, 'Técnico Auxiliar de Informática');",
    "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES (TAI, Técnico Auxiliar de Informática);",
    "INSERT TO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
    "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
    "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
  ],
  [
    "¿Qué tipo de correspondencia hay entre las tablas \"SolicitudBeca\" y \"FicheroAdjunto\"?",
    "Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
    "Un registro de SolicitudBeca puede tener como máximo un registro de FicheroAdjunto.",
    "N registros de SolicitudBeca pueden tener M registros de FicheroAdjunto.",
    "Un registro de SolicitudBeca puede tener cero o como máximo un registro de FicheroAdjunto.",
    "Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
  ],
  [
    "A este sistema le es de aplicación la normativa vigente de accesibilidad de sitios web. ¿Qué herramienta automatizada utilizaría para probar que la aplicación cumple con los estándares de accesibilidad?",
    "QualWeb.",
    "Equal Automatic Checker.",
    "AccSite.",
    "Shovel.",
    "QualWeb.",
  ],
  [
    "El formulario de solicitud será extenso y tendrá muchas consultas de datos. ¿Qué utilizaría para renderizar la página en el servidor?",
    "Server Sent Events.",
    "Ajax.",
    "WebSocket.",
    "Server Side Rendering.",
    "Server Side Rendering.",
  ],
  [
    "El proceso de presentación de solicitud implica la autenticación del usuario, la firma de la solicitud, el guardado en base de datos, la generación de un asiento registral y la generación de un justificante de presentación. ¿Qué diagrama UML utilizaría para representar las acciones implicadas en este flujo?",
    "Diagrama de paquetes.",
    "Diagrama de objetos.",
    "Diagrama de secuencia.",
    "Diagrama de Entidad/Relación.",
    "Diagrama de secuencia.",
  ],
  [
    "En caso de utilizar Java para el backend, ¿qué tecnología puede utilizar para generar un cliente de servicios web?",
    "Apache Flink.",
    "Apache Xalan.",
    "Apache Xerces.",
    "Apache CXF.",
    "Apache CXF.",
  ],
  [
    "En un entorno de desarrollo Java, ¿qué utilizaría para mapear elementos XML a clases?",
    "JAXB.",
    "JPA.",
    "JAXR.",
    "JAX-RS.",
    "JAXB.",
  ],
  [
    "Está escogiendo herramientas que le permitan analizar y mejorar la calidad del código. ¿Cuál de las siguientes NO le será de ayuda?",
    "SonarQube.",
    "Un linter de JavaScript.",
    "PMD.",
    "Mercurial.",
    "Mercurial.",
  ],
  [
    "Necesita controlar el plazo de presentación de solicitudes. Suponiendo que utiliza Java en el backend, ¿qué clase nativa de Java puede utilizar para trabajar con una fecha y hora simultáneamente?",
    "LocalDateTime.",
    "LocalDate.",
    "LocalTime.",
    "OffsetTime.",
    "LocalDateTime.",
  ],
  [
    "Para que la aplicación de gestión pueda interactuar con esta aplicación, se va a exponer una capa de servicios web. ¿Cuál de las siguientes opciones NO es válida para documentar dichos servicios?",
    "RAML.",
    "REST.",
    "WSDL.",
    "OpenAPI/Swagger.",
    "REST.",
  ],
  [
    "Se desea añadir una tabla \"Subsanacion\" con las columnas numéricas IdSubsanacion e IdSolicitudBeca y la columna alfanumérica de 2000 caracteres TextoFundamento. ¿Cuál de las siguientes sentencias sería la correcta?",
    "CREATE TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
    "CREATE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
    "CREATE NEW TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
    "CREATE TABLE Subsanacion AS (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
    "CREATE TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
  ],
  [
    "Se espera un alto volumen de concurrencia en el sistema. ¿Qué nivel de aislamiento de base de datos debería configurar para que no se produzcan lecturas sucias ni lecturas no repetibles, pero sí lecturas fantasmas?",
    "Serializable.",
    "Read committed.",
    "Read uncommited.",
    "Repeatable read.",
    "Repeatable read.",
  ],
  [
    "Se ha determinado que es necesaria la integración de la aplicación con GEISER, cuyos servicios web son de naturaleza SOAP. ¿Con qué firmará las peticiones generadas por la aplicación?",
    "WS-Security.",
    "SAML.",
    "JWT.",
    "XML-Encryption.",
    "WS-Security.",
  ],
  [
    "Se quiere utilizar la librería iText de .NET para generar un documento PDF que sirva como justificante de presentación al interesado. ¿Con qué comando instalaría el paquete NuGet?",
    "dotnet add package iText.",
    "dotnet install package iText.",
    "dotnet add iText.",
    "dotnet install iText.",
    "dotnet add package iText.",
  ],
  [
    "Según \"Técnicas y Practicas\" de Métrica v3, si se quisiera optimizar el modelo físico de datos para reducir o simplificar el número de accesos a la base de datos, ¿cuál de las siguientes acciones se aplicaría?",
    "Combinar entidades si los accesos son frecuentes en transacciones distintas.",
    "Eliminar entidades.",
    "Introducir elementos redundantes.",
    "Normalizar las tablas en Forma Normal de Boyce-Codd (FNBC).",
    "Introducir elementos redundantes.",
  ],
  [
    "Suponiendo que se utilizara la metodología ágil SCRUM, si durante un sprint, se da cuenta de que se está aplicando una mala práctica que puede enlentecer el proyecto, ¿en qué reunión comentará esa mala práctica, para buscar la mejora continua y evitar aplicarla en los siguientes sprints?",
    "En la Daily Scrum.",
    "En la Sprint Retrospective.",
    "En la Sprint Planning.",
    "En la Sprint Review.",
    "En la Sprint Retrospective.",
  ],
  [
    "También el sistema se integrará con la PID (Plataforma de Intermediación de Datos), cuya plataforma actual se define como una arquitectura orientada a servicios (SOA). ¿Cuáles son los componentes principales de esta arquitectura?",
    "Servicio, Proveedor de servicios, Consumidor de servicios y Orquestador de servicios.",
    "Servicio, Proveedor de servicios, Consumidor de servicios y Depurador de servicios.",
    "Servicio, Proveedor de servicios, Consumidor de servicios y Comparador de servicios.",
    "Servicio, Proveedor de servicios, Consumidor de servicios y Registro de servicios.",
    "Servicio, Proveedor de servicios, Consumidor de servicios y Registro de servicios.",
  ],
  [
    "Tras estudiar varias opciones se ha decidido utilizar .NET con C# para desarrollar el backend, ¿cómo puede indicar la opcionalidad de un tipo de dato?",
    "int? Telefono",
    "int|null Telefono",
    "int:null Telefono",
    "int ?? Telefono",
    "int? Telefono",
  ]

];

testsAnuales["2022"] = [
  [
    "¿Qué tipo de topología de red conecta todos los dispositivos a un punto central?",
    "Bus",
    "Anillo",
    "Estrella",
    "Malla",
    "Estrella",
  ],
  [
    "¿Cuál es la velocidad máxima teórica de USB 3.0?",
    "480 Mbps",
    "5 Gbps",
    "10 Gbps",
    "20 Gbps",
    "5 Gbps",
  ],
  [
    "¿Qué es un ataque de fuerza bruta?",
    "Envío masivo de solicitudes para saturar un servidor",
    "Intentar adivinar contraseñas probando todas las combinaciones posibles",
    "Modificar cabeceras de paquetes TCP/IP",
    "Engañar a un usuario para que revele información confidencial",
    "Intentar adivinar contraseñas probando todas las combinaciones posibles",
  ],
  [
    "¿Qué es IMAP?",
    "Un protocolo para enviar correos",
    "Un protocolo para recibir correos sin descargarlos",
    "Un formato de archivo",
    "Un tipo de cifrado",
    "Un protocolo para recibir correos sin descargarlos",
  ],
  [
    "¿Qué sistema de archivos es nativo de Linux?",
    "NTFS",
    "FAT32",
    "HFS+",
    "ext4",
    "ext4",
  ],
];

testsAnuales["2020"] = [
  [
    "¿Qué significa la sigla IoT?",
    "Internet over Time",
    "Internet of Things",
    "Input/Output Technology",
    "Integration of Technology",
    "Internet of Things",
  ],
  [
    "¿Cuál de estos NO es un lenguaje de programación?",
    "Python",
    "Java",
    "SQL",
    "HTML",
    "HTML",
  ],
  [
    "¿Qué componente de la computadora se encarga de almacenar los datos cuando no hay energía?",
    "RAM",
    "CPU",
    "ROM",
    "Disco duro",
    "Disco duro",
  ],
  [
    "¿Cuál es el puerto estándar para el protocolo HTTPS?",
    "80",
    "8080",
    "443",
    "22",
    "443",
  ],
  [
    "¿Qué algoritmo NO se utiliza para cifrado simétrico?",
    "AES",
    "DES",
    "RSA",
    "Blowfish",
    "RSA",
  ],
];

testsAnuales["2019"] = [
  [
    "¿Qué es un cortafuegos (firewall)?",
    "Un antivirus",
    "Una herramienta de monitorización",
    "Un sistema que filtra el tráfico de red según reglas",
    "Un dispositivo de enfriamiento",
    "Un sistema que filtra el tráfico de red según reglas",
  ],
  [
    "¿Cuál de estos NO es un tipo de memoria RAM?",
    "DRAM",
    "SRAM",
    "ERAM",
    "DDR",
    "ERAM",
  ],
  [
    "¿Qué es un servidor DNS?",
    "Un servidor que almacena copias de seguridad",
    "Un servidor que traduce nombres de dominio a direcciones IP",
    "Un servidor de bases de datos",
    "Un servidor de archivos compartidos",
    "Un servidor que traduce nombres de dominio a direcciones IP",
  ],
  [
    "¿Qué tipo de cable se utiliza comúnmente en redes LAN?",
    "Coaxial",
    "Par trenzado",
    "Fibra óptica",
    "Cable serie",
    "Par trenzado",
  ],
  [
    "¿Qué protocolo se utiliza para la transferencia segura de archivos?",
    "HTTP",
    "FTP",
    "SFTP",
    "SMTP",
    "SFTP",
  ],
];

testsAnuales["2018"] = [
  [
    "¿Qué es un algoritmo de ordenación?",
    "Un programa que organiza archivos",
    "Un conjunto de pasos para organizar datos en un orden específico",
    "Una estructura de datos",
    "Un método de compresión",
    "Un conjunto de pasos para organizar datos en un orden específico",
  ],
  [
    "¿Cuál es la función principal de una UPS?",
    "Proporcionar energía en caso de corte eléctrico",
    "Acelerar el procesamiento de datos",
    "Filtrar el tráfico de red",
    "Comprimir archivos",
    "Proporcionar energía en caso de corte eléctrico",
  ],
  [
    "¿Qué es una dirección MAC?",
    "Un identificador único de un dispositivo de red",
    "Una dirección IP dinámica",
    "Un tipo de memoria cache",
    "Una dirección física en un disco duro",
    "Un identificador único de un dispositivo de red",
  ],
  [
    "¿Qué significa SQL?",
    "System Quality Language",
    "Structured Query Language",
    "Simple Query Logic",
    "Standard Query Level",
    "Structured Query Language",
  ],
  ["¿Cuántos bits forman un byte?", "4", "8", "16", "32", "8"],
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
document.addEventListener("DOMContentLoaded", function () {
  // Botones de navegación principal
  document
    .getElementById("simulacroTest")
    .addEventListener("click", mostrarPanelSimulacro);
  document
    .getElementById("volver")
    .addEventListener("click", ocultarPanelSimulacro);

  // Botones de años específicos
  document
    .getElementById("test2024")
    .addEventListener("click", () => iniciarSimulacro("2024"));
  document
    .getElementById("test2022")
    .addEventListener("click", () => iniciarSimulacro("2022"));
  document
    .getElementById("test2020")
    .addEventListener("click", () => iniciarSimulacro("2020"));
  document
    .getElementById("test2019")
    .addEventListener("click", () => iniciarSimulacro("2019"));
  document
    .getElementById("test2018")
    .addEventListener("click", () => iniciarSimulacro("2018"));

  // Botón de test aleatorio
  document
    .getElementById("testAleatorio")
    .addEventListener("click", mostrarOpcionesAleatorio);
  document
    .getElementById("especificoBloque3")
    .addEventListener("click", () => iniciarSimulacroAleatorio(3));
  document
    .getElementById("especificoBloque4")
    .addEventListener("click", () => iniciarSimulacroAleatorio(4));

  // Botones de control del examen
  document
    .getElementById("pausarExamen")
    .addEventListener("click", pausarExamen);
  document
    .getElementById("terminarExamen")
    .addEventListener("click", terminarExamen);
  document
    .getElementById("reanudarExamen")
    .addEventListener("click", reanudarExamen);

  // Navegación entre preguntas
  document
    .getElementById("anteriorPregunta")
    .addEventListener("click", irPreguntaAnterior);
  document
    .getElementById("siguientePregunta")
    .addEventListener("click", irPreguntaSiguiente);

  // Botones de resultados
  document
    .getElementById("revisarExamen")
    .addEventListener("click", iniciarRevision);
  document
    .getElementById("volverInicio")
    .addEventListener("click", volverAlInicio);

  // Botones de revisión
  document
    .getElementById("volverResultados")
    .addEventListener("click", mostrarResultados);
  document
    .getElementById("anteriorRevision")
    .addEventListener("click", irRevisionAnterior);
  document
    .getElementById("siguienteRevision")
    .addEventListener("click", irRevisionSiguiente);
});

// Mostrar el panel de selección de simulacro
function mostrarPanelSimulacro() {
  document.querySelector(".modo-principal").style.display = "none";
  document.getElementById("areaPractica").style.display = "none";
  document.getElementById("panelSimulacro").style.display = "block";
  document.getElementById("siguiente").style.display = "none";
}

// Ocultar el panel de selección de simulacro
function ocultarPanelSimulacro() {
  document.getElementById("panelSimulacro").style.display = "none";
  document.getElementById("opcionesTestAleatorio").style.display = "none";
  document.querySelector(".modo-principal").style.display = "flex";
  document.getElementById("areaPractica").style.display = "block";
}

// Mostrar opciones para test aleatorio
function mostrarOpcionesAleatorio() {
  document.getElementById("opcionesTestAleatorio").style.display = "block";
}

// Iniciar un simulacro de año específico
function iniciarSimulacro(ano) {
  // Verificar si hay suficientes preguntas
  if (testsAnuales[ano].length < 100) {
    alert(
      "Este test no tiene suficientes preguntas. Se está utilizando un conjunto reducido para demostración."
    );
    // Repetir las preguntas disponibles hasta tener 100
    examenActual = [];
    while (examenActual.length < 100) {
      for (
        let i = 0;
        i < testsAnuales[ano].length && examenActual.length < 100;
        i++
      ) {
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
      const preguntaAleatoria =
        preguntas[bloqueAleatorio][
          Math.floor(Math.random() * preguntas[bloqueAleatorio].length)
        ];
      examenActual.push(preguntaAleatoria);
    }
  }

  // Segunda parte: 20 preguntas del bloque específico
  if (
    preguntas[`bloque${bloqueEspecifico}`] &&
    preguntas[`bloque${bloqueEspecifico}`].length > 0
  ) {
    const preguntasBloque = [...preguntas[`bloque${bloqueEspecifico}`]];
    shuffleArray(preguntasBloque);
    // Tomar hasta 20 preguntas del bloque específico
    for (let j = 0; j < Math.min(20, preguntasBloque.length); j++) {
      examenActual.push(preguntasBloque[j]);
    }
  }

  // Completar con preguntas aleatorias si no hay suficientes
  while (examenActual.length < 100) {
    const preguntaAleatoria =
      preguntas[`bloque${bloqueEspecifico}`][
        Math.floor(
          Math.random() * preguntas[`bloque${bloqueEspecifico}`].length
        )
      ];
    examenActual.push(preguntaAleatoria);
  }

  iniciarExamen(
    `Test Aleatorio (Parte específica: Bloque ${bloqueEspecifico})`
  );
}

// Iniciar el examen
function iniciarExamen(tipoTest) {
  // Inicializar variables
  preguntaActualIndex = 0;
  respuestasUsuario = new Array(examenActual.length).fill(null);
  tiempoRestante = 7200; // 2 horas en segundos
  examenPausado = false;

  // Ocultar paneles
  document.getElementById("panelSimulacro").style.display = "none";
  document.getElementById("areaPractica").style.display = "none";
  document.getElementById("siguiente").style.display = "none";

  // Mostrar modo examen
  document.getElementById("modoExamen").style.display = "block";
  document.getElementById("tipoPrueba").textContent = `Test: ${tipoTest}`;

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

  document.getElementById("tiempoRestante").textContent = `${horas
    .toString()
    .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}`;
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
  document.getElementById("pausaOverlay").style.display = "flex";
}

// Reanudar el examen
function reanudarExamen() {
  examenPausado = false;
  document.getElementById("pausaOverlay").style.display = "none";
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
  const indiceDiv = document.getElementById("indicePregunta");
  indiceDiv.innerHTML = "";

  for (let i = 0; i < examenActual.length; i++) {
    const boton = document.createElement("button");
    boton.textContent = i + 1;
    boton.classList.add("btn-indice");

    // Marcar preguntas de la segunda parte
    if (i >= 80) {
      boton.classList.add("parte2");
    }

    // Marcar pregunta actual
    if (i === preguntaActualIndex) {
      boton.classList.add("seleccionada");
    }

    // Marcar preguntas respondidas
    if (respuestasUsuario[i] !== null) {
      boton.classList.add("respondida");
    }

    boton.addEventListener("click", () => cargarPregunta(i));
    indiceDiv.appendChild(boton);
  }
}

// Cargar una pregunta específica
function cargarPregunta(index) {
  preguntaActualIndex = index;

  // Actualizar la interfaz
  document.getElementById("preguntaExamen").textContent =
    examenActual[index][0];
  document.getElementById("progresoExamen").textContent = `Pregunta ${
    index + 1
  }/${examenActual.length}`;

  // Cargar opciones
  const opcionesDiv = document.getElementById("opcionesExamen");
  opcionesDiv.innerHTML = "";

  for (let i = 1; i <= 4; i++) {
    const opcionDiv = document.createElement("div");
    opcionDiv.classList.add("opcion-examen");
    opcionDiv.textContent = examenActual[index][i];

    // Marcar opción si ya fue seleccionada
    if (respuestasUsuario[index] === examenActual[index][i]) {
      opcionDiv.classList.add("opcion-seleccionada");
    }

    opcionDiv.addEventListener("click", () => {
      // Si el examen no está pausado
      if (!examenPausado) {
        // Desmarcar todas las opciones
        document.querySelectorAll(".opcion-examen").forEach((opcion) => {
          opcion.classList.remove("opcion-seleccionada");
        });

        // Marcar la opción seleccionada
        opcionDiv.classList.add("opcion-seleccionada");

        // Guardar la respuesta
        respuestasUsuario[index] = examenActual[index][i];

        // Actualizar índice
        generarIndicePregunta();
      }
    });

    opcionesDiv.appendChild(opcionDiv);
  }

  // Añadir una opción para dejar en blanco
  // const opcionBlanco = document.createElement('div');
  // opcionBlanco.classList.add('opcion-examen');
  // opcionBlanco.textContent = 'Dejar en blanco';

  // Si la respuesta actual es null, marcar esta opción
  // if (respuestasUsuario[index] === null) {
  //     opcionBlanco.classList.add('opcion-seleccionada');
  // }

  // opcionBlanco.addEventListener('click', () => {
  //     // Si el examen no está pausado
  //     if (!examenPausado) {
  //         // Desmarcar todas las opciones
  //         document.querySelectorAll('.opcion-examen').forEach(opcion => {
  //             opcion.classList.remove('opcion-seleccionada');
  //         });

  //         // Marcar la opción de blanco
  //         opcionBlanco.classList.add('opcion-seleccionada');

  //         // Guardar null como respuesta
  //         respuestasUsuario[index] = null;

  //         // Actualizar índice
  //         generarIndicePregunta();
  //     }
  // });

  // opcionesDiv.appendChild(opcionBlanco);

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
  document.getElementById("modoExamen").style.display = "none";
  document.getElementById("modoRevision").style.display = "none";
  document.getElementById("pausaOverlay").style.display = "none";

  // Mostrar el panel de resultados
  document.getElementById("panelResultados").style.display = "block";

  // Calcular tiempo utilizado
  const tiempoUtilizado = 7200 - tiempoRestante;
  const horasUtilizadas = Math.floor(tiempoUtilizado / 3600);
  const minutosUtilizados = Math.floor((tiempoUtilizado % 3600) / 60);
  const segundosUtilizados = tiempoUtilizado % 60;

  document.getElementById("tiempoUtilizado").textContent = `${horasUtilizadas
    .toString()
    .padStart(2, "0")}:${minutosUtilizados
    .toString()
    .padStart(2, "0")}:${segundosUtilizados.toString().padStart(2, "0")}`;

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
  const puntuacionParte1 = correctasParte1 - incorrectasParte1 * 0.33;
  const puntuacionParte2 = correctasParte2 * 4 - incorrectasParte2 * 1.33;
  const puntuacionTotal = puntuacionParte1 + puntuacionParte2;

  // Actualizar el panel de resultados
  document.getElementById("correctasParte1").textContent = correctasParte1;
  document.getElementById("incorrectasParte1").textContent = incorrectasParte1;
  document.getElementById("blancoParte1").textContent = blancoParte1;
  document.getElementById(
    "puntuacionParte1"
  ).textContent = `${puntuacionParte1.toFixed(2)}/80`;

  document.getElementById("correctasParte2").textContent = correctasParte2;
  document.getElementById("incorrectasParte2").textContent = incorrectasParte2;
  document.getElementById("blancoParte2").textContent = blancoParte2;
  document.getElementById(
    "puntuacionParte2"
  ).textContent = `${puntuacionParte2.toFixed(2)}/80`;

  document.getElementById(
    "puntuacionTotal"
  ).textContent = `${puntuacionTotal.toFixed(2)}/160`;
}

// Iniciar la revisión del examen
function iniciarRevision() {
  document.getElementById("panelResultados").style.display = "none";
  document.getElementById("modoRevision").style.display = "block";
  preguntaActualIndex = 0;

  // Generar índice de revisión
  generarIndiceRevision();

  // Cargar primera pregunta
  cargarPreguntaRevision(0);
}

// Generar el índice de preguntas para revisión
function generarIndiceRevision() {
  const indiceDiv = document.getElementById("indiceRevision");
  indiceDiv.innerHTML = "";

  for (let i = 0; i < examenActual.length; i++) {
    const boton = document.createElement("button");
    boton.textContent = i + 1;
    boton.classList.add("btn-indice");

    // Marcar preguntas de la segunda parte
    if (i >= 80) {
      boton.classList.add("parte2");
    }

    // Marcar pregunta actual
    if (i === preguntaActualIndex) {
      boton.classList.add("seleccionada");
    }

    // Marcar respuestas correctas e incorrectas
    if (respuestasUsuario[i] === examenActual[i][5]) {
      boton.classList.add("correcta");
    } else if (respuestasUsuario[i] !== null) {
      boton.classList.add("incorrecta");
    }

    boton.addEventListener("click", () => cargarPreguntaRevision(i));
    indiceDiv.appendChild(boton);
  }
}

// Cargar una pregunta específica en modo revisión
function cargarPreguntaRevision(index) {
  preguntaActualIndex = index;

  // Actualizar la interfaz
  document.getElementById("preguntaRevision").textContent =
    examenActual[index][0];

  // Cargar opciones
  const opcionesDiv = document.getElementById("opcionesRevision");
  opcionesDiv.innerHTML = "";

  for (let i = 1; i <= 4; i++) {
    const opcionDiv = document.createElement("div");
    opcionDiv.classList.add("opcion-revision");
    opcionDiv.textContent = examenActual[index][i];

    // Marcar respuesta correcta
    if (examenActual[index][i] === examenActual[index][5]) {
      opcionDiv.classList.add("correcta");
    }
    // Marcar respuesta incorrecta seleccionada por el usuario
    else if (respuestasUsuario[index] === examenActual[index][i]) {
      opcionDiv.classList.add("incorrecta");
    }

    // Marcar la respuesta seleccionada por el usuario
    if (respuestasUsuario[index] === examenActual[index][i]) {
      opcionDiv.classList.add("seleccionada");
    }

    opcionesDiv.appendChild(opcionDiv);
  }

  // Mostrar explicación
  const explicacionDiv = document.getElementById("explicacionRevision");
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
  document.getElementById("panelResultados").style.display = "none";
  document.querySelector(".modo-principal").style.display = "flex";
  document.getElementById("areaPractica").style.display = "block";
}

// Función auxiliar para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
