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
  "¿Qué característica principal diferencia los SSD M.2 NVMe de los SSD SATA?":
    "Los SSD M.2 NVMe usan el protocolo NVMe, que es mucho más rápido que el protocolo SATA tradicional.",

  "¿Cuál de las siguientes configuraciones RAID distribuye la información en tiras entre discos sin redundancia?":
    "RAID 0 distribuye los datos entre discos (striping) sin ofrecer redundancia, solo velocidad.",

  "¿Cuál es el número mínimo de discos necesarios para implementar RAID 6?":
    "RAID 6 requiere al menos 4 discos, ya que usa doble paridad.",

  "¿Qué tipo de RAID combina RAID 1 y RAID 0?":
    "RAID 10 es una combinación de espejado (RAID 1) y distribución por tiras (RAID 0).",

  "¿Qué significa JBOD en el contexto de almacenamiento?":
    "JBOD significa 'Just a Bunch Of Disks', donde los discos funcionan de forma independiente sin RAID.",

  "¿Qué tipo de interfaz de pantalla soporta tanto video como audio digital?":
    "HDMI es capaz de transmitir tanto video como audio en un solo cable digital.",

  "¿Qué modelo de color utilizan las impresoras?":
    "Las impresoras usan el modelo de color sustractivo CMYK (Cian, Magenta, Amarillo y Negro).",

  "¿Qué tipo de impresora utiliza un haz láser para inducir cargas eléctricas sobre un tambor giratorio?":
    "Las impresoras láser utilizan esta tecnología para transferir el tóner al papel.",

  "¿Qué tecnología de escáner convierte imágenes en texto digital editable?":
    "OCR (Reconocimiento Óptico de Caracteres) permite digitalizar texto de imágenes.",

  "¿Qué diferencia principal existe entre imágenes vectoriales y de mapa de bits?":
    "Las imágenes vectoriales se basan en fórmulas matemáticas y se pueden escalar sin pérdida de calidad.",

  "¿Cuál es la velocidad máxima de transferencia de datos del USB 4.0?":
    "USB 4.0 puede alcanzar hasta 40 Gb/s de transferencia de datos.",

  "¿Qué categoría de cable Ethernet permite velocidades de hasta 40 Gbps?":
    "CAT8 soporta velocidades de hasta 40 Gbps, especialmente para centros de datos.",

  "¿Cuál es la principal diferencia entre la fibra óptica monomodo y multimodo?":
    "La monomodo usa un solo diodo láser y es ideal para largas distancias.",

  "¿Cuál de los siguientes es un formato de audio comprimido sin pérdida?":
    "FLAC es un formato sin pérdida que mantiene la calidad original del audio.",

  "¿Qué distribución de teclado se utiliza principalmente en Francia y Bélgica?":
    "El teclado AZERTY es comúnmente usado en Francia y Bélgica.",

  "¿Qué tipo abstracto de datos sigue la propiedad LIFO (Last In, First Out)?":
    "Una pila (stack) sigue el principio LIFO, donde el último en entrar es el primero en salir.",

  "¿Qué estructura de datos sigue el principio FIFO (First In, First Out)?":
    "Una cola (queue) sigue la lógica FIFO, el primero en entrar es el primero en salir.",

  "¿Qué método se utiliza para resolver colisiones en tablas hash donde cada posición contiene una lista?":
    "Se conoce como hashing cerrado o encadenamiento (chaining).",

  "En un árbol binario, ¿qué son los nodos hoja?":
    "Los nodos hoja son aquellos que no tienen hijos.",

  "¿Qué es un árbol binario perfecto?":
    "Es un árbol donde todas las hojas están al mismo nivel y cada nodo tiene dos hijos.",

  "¿Qué algoritmo encuentra el camino más corto desde un vértice origen al resto de vértices en un grafo ponderado?":
    "El algoritmo de Dijkstra es el más común para este tipo de problemas.",

  "¿Cuál de estos algoritmos de ordenación divide la lista en mitades, ordena recursivamente y luego combina?":
    "Mergesort sigue la estrategia de divide y vencerás y luego combina las listas ordenadas.",

  "En un recorrido INORDEN de un árbol binario, ¿cuál es el orden correcto?":
    "El recorrido inorden sigue: Izquierda, Raíz, Derecha.",

  "¿Qué tipo de grafo tiene aristas con una dirección específica?":
    "Un grafo dirigido tiene aristas que apuntan en una dirección concreta.",

  "¿Qué algoritmo de ordenación utiliza un pivote y divide la lista en elementos menores y mayores?":
    "Quicksort selecciona un pivote y divide la lista según su valor.",

  "¿Qué término se refiere específicamente al núcleo del sistema operativo Linux?":
    "'Linux' hace referencia al kernel, que es el núcleo del sistema.",

  "¿Qué característica define al kernel de Linux?":
    "Es un kernel monolítico y modular, lo que permite cargar o descargar módulos.",

  "¿Qué gestor de paquetes es típicamente usado en Ubuntu?":
    "Ubuntu usa 'apt' como su gestor de paquetes predeterminado.",

  "¿Qué distribución Linux está especializada en seguridad informática y hacking ético?":
    "Kali Linux es famosa por su enfoque en seguridad y herramientas de pentesting.",

  "¿Qué tipo de distribución se caracteriza por tener actualizaciones continuas?":
    "Las rolling release se actualizan constantemente sin necesidad de reinstalación completa.",
  "¿Qué modelo de color utilizan las impresoras?":
    "Las impresoras utilizan el modelo de color CMYK (Cian, Magenta, Amarillo y Negro) porque es el estándar para la impresión a color en papel, permitiendo la mezcla de estos cuatro colores para obtener una amplia gama cromática.",

  "¿Qué tipo de impresora utiliza un haz láser para inducir cargas eléctricas sobre un tambor giratorio?":
    "Las impresoras láser utilizan un haz láser para inducir cargas eléctricas en un tambor giratorio, lo que permite atraer el tóner y transferirlo al papel mediante calor y presión.",

  "¿Qué tecnología de escáner convierte imágenes en texto digital editable?":
    "OCR (Reconocimiento Óptico de Caracteres) es la tecnología que permite convertir imágenes de texto en texto digital editable, comúnmente utilizada para digitalizar documentos físicos.",

  "¿Qué diferencia principal existe entre imágenes vectoriales y de mapa de bits?":
    "Las imágenes vectoriales se crean mediante fórmulas matemáticas y pueden redimensionarse sin perder calidad, a diferencia de las imágenes de mapa de bits, que pierden resolución al escalarse.",

  "¿Cuál es la velocidad máxima de transferencia de datos del USB 4.0?":
    "USB 4.0 puede alcanzar hasta 40 Gb/s, duplicando la velocidad de USB 3.2 y permitiendo una transferencia de datos extremadamente rápida, similar a Thunderbolt 3.",

  "¿Qué categoría de cable Ethernet permite velocidades de hasta 40 Gbps?":
    "El cable Ethernet de categoría CAT8 soporta velocidades de hasta 40 Gbps y es utilizado principalmente en centros de datos y redes de alto rendimiento.",

  "¿Cuál es la principal diferencia entre la fibra óptica monomodo y multimodo?":
    "La fibra óptica monomodo utiliza un solo haz láser y es ideal para largas distancias, mientras que la multimodo emplea múltiples modos de luz y es más adecuada para distancias cortas.",

  "¿Cuál de los siguientes es un formato de audio comprimido sin pérdida?":
    "FLAC es un formato de compresión de audio sin pérdida que reduce el tamaño de los archivos manteniendo la calidad original, a diferencia de MP3 o AAC.",

  "¿Qué distribución de teclado se utiliza principalmente en Francia y Bélgica?":
    "El teclado AZERTY es la distribución estándar en países como Francia y Bélgica, en contraste con el QWERTY usado en otros países.",

  "¿Qué tipo abstracto de datos sigue la propiedad LIFO (Last In, First Out)?":
    "La pila es una estructura de datos que sigue la lógica LIFO, donde el último elemento en entrar es el primero en salir.",
  "¿Qué característica describe a las bases de datos NoSQL?":
    "Las bases de datos NoSQL son distribuidas, flexibles y escalables horizontalmente, ideales para grandes volúmenes de datos y sin un esquema fijo.",

  "¿Qué significa la 'C' en el principio ACID de las bases de datos relacionales?":
    "La 'C' en ACID se refiere a Consistencia, garantizando que la base de datos siempre mantenga un estado válido después de una transacción.",

  "¿Qué tipo de base de datos almacena datos en documentos JSON o BSON?":
    "Las bases documentales como MongoDB almacenan datos en formato JSON o BSON, facilitando el manejo de datos semi-estructurados.",

  "¿Cuál es un ejemplo de base de datos clave-valor?":
    "Redis es una base de datos clave-valor muy popular por su rapidez y eficiencia en la gestión de datos simples.",

  "¿Qué bases de datos son ideales para redes sociales o análisis de rutas?":
    "Las bases de datos de grafos como Neo4j son ideales para modelar relaciones complejas como redes sociales o rutas.",

  "¿Qué base de datos relacional es un fork de MySQL?":
    "MariaDB es un fork de MySQL, creado por los desarrolladores originales de MySQL y con mejoras en rendimiento y características.",

  "¿Qué es una base de datos orientada a objetos (BDOO)?":
    "Una BDOO almacena datos como objetos, integrándose con lenguajes de programación orientados a objetos como Java o C++.",

  "¿Qué operación del álgebra relacional es una operación NO básica?":
    "La unión natural es una operación derivada que combina tablas automáticamente por atributos comunes.",

  "¿Qué nivel de aislamiento evita lecturas sucias pero permite lecturas fantasma?":
    "Read Committed evita lecturas sucias al no permitir leer datos no confirmados, pero aún pueden ocurrir lecturas fantasma.",

  "¿Qué es la redundancia lógica en bases de datos?":
    "La redundancia lógica ocurre cuando se duplican datos innecesariamente dentro de una base de datos, lo que puede causar inconsistencias.",

  "¿Qué base de datos orientada a objetos es usada en telecomunicaciones y finanzas?":
    "ObjectStore es conocida por su uso en sectores como telecomunicaciones y finanzas debido a su manejo de objetos complejos.",

  "¿Qué puerto predeterminado usa PostgreSQL?":
    "El puerto por defecto para PostgreSQL es el 5432, utilizado para establecer conexiones con la base de datos.",

  "¿Qué puerto predeterminado usa Redis?":
    "Redis utiliza por defecto el puerto 6379 para conexiones a su sistema de almacenamiento clave-valor.",

  "¿Qué describe mejor a Single Sign-On (SSO)?":
    "El SSO permite a un usuario autenticarse una sola vez y acceder a múltiples aplicaciones sin volver a ingresar sus credenciales.",

  "¿Qué bases de datos combinan la consistencia de SQL con la escalabilidad de NoSQL?":
    "NewSQL combina la consistencia de las bases relacionales tradicionales con la escalabilidad horizontal típica de NoSQL.",
  "¿Qué novedad trajo macOS 15 Sequoia?":
    "macOS 15 Sequoia, lanzado en septiembre de 2024, introdujo varias novedades significativas para mejorar la experiencia del usuario en Mac. Algunas de las características más destacadas son: Apple Intelligence: Una integración de inteligencia artificial que ofrece herramientas de escritura, resúmenes y una versión mejorada de Siri. iPhone Mirroring: Permite duplicar la pantalla del iPhone en el Mac, facilitando la interacción entre ambos dispositivos. Gestión de Ventanas: Introducción de una función de mosaico que organiza las ventanas de manera eficiente, similar a la funcionalidad de Windows.  Aplicación de Contraseñas: Una nueva app que centraliza el acceso a contraseñas, Passkeys y otros datos de inicio de sesión, con sincronización segura a través de iCloud. Mejoras en Videoconferencias: Herramientas como la vista previa del moderador y fondos integrados enriquecen la experiencia en llamadas de FaceTime y otras aplicaciones.",
  "En Linux, ¿qué significa el acrónimo UID?":
    "El acrónimo UID significa 'User Identifier' (Identificador de Usuario) y es un número único asignado a cada usuario en el sistema Linux.",
  "¿Qué comando se utiliza para cambiar el propietario de un archivo?":
    "El comando 'chown' se usa para cambiar el propietario y/o el grupo asociado a un archivo o directorio en Linux.",
  "¿Qué comando muestra información en tiempo real de los procesos en ejecución?":
    "El comando 'top' muestra información dinámica y en tiempo real sobre los procesos en ejecución en el sistema.",
  "¿Qué comando Linux se utiliza para buscar patrones en archivos de texto?":
    "El comando 'grep' se utiliza para buscar patrones dentro de archivos de texto, mostrando las líneas que coinciden.",
  "¿Qué directorio contiene los binarios necesarios para el funcionamiento del sistema?":
    "El directorio '/bin' contiene los binarios esenciales que permiten que el sistema funcione correctamente.",
  "En el sistema de permisos de Linux, ¿qué representa la letra 'w'?":
    "La letra 'w' representa el permiso de escritura, permitiendo modificar el contenido de un archivo o directorio.",
  "¿Qué comando se utiliza para cambiar los permisos de un archivo?":
    "El comando 'chmod' se utiliza para cambiar los permisos de lectura, escritura y ejecución de un archivo o directorio.",
  "¿Para qué se utiliza el comando 'umask' en Linux?":
    "El comando 'umask' se usa para establecer los permisos predeterminados para los archivos y directorios que se creen en el sistema.",
  "¿Qué llamada al sistema en Linux crea una copia de un proceso?":
    "La llamada al sistema 'fork()' se utiliza para crear una copia de un proceso en ejecución.",
  "En Linux, ¿qué tipo de usuario tiene acceso total al sistema?":
    "El usuario 'root' (superusuario) tiene acceso total y permisos ilimitados para modificar el sistema.",
  "¿Qué directorio de Linux contiene los ficheros de configuración del sistema host?":
    "El directorio '/etc' contiene los archivos de configuración necesarios para la administración del sistema.",
  "¿Qué distribución es conocida por ser la versión gratuita de Red Hat?":
    "Fedora es la distribución de Linux que se considera la versión gratuita y de código abierto de Red Hat.",
  "¿En qué generación de ordenadores se introdujeron los circuitos integrados?":
    "Los circuitos integrados se introdujeron en la tercera generación de ordenadores, mejorando su rendimiento y capacidad.",
  "¿Qué diferencia principal existe entre los directorios /bin y /sbin en Linux?":
    "El directorio '/bin' contiene binarios esenciales para el sistema y usuarios, mientras que '/sbin' contiene binarios para la administración del sistema.",
  "¿Qué comando se utiliza para mostrar el directorio actual en Linux?":
    "El comando 'pwd' muestra la ruta del directorio actual en el que te encuentras en el sistema.",
  "¿Qué distribución Linux está diseñada para privacidad y anonimato?":
    "Tails es una distribución Linux enfocada en ofrecer privacidad y anonimato para el usuario.",
  "¿Qué gestor de paquetes utiliza Arch Linux?":
    "Arch Linux utiliza 'Pacman' como su gestor de paquetes para instalar, actualizar y gestionar software.",
  "¿Qué significan las siglas PPID en el contexto de procesos Linux?":
    "Las siglas PPID significan 'Parent Process ID' y representan el identificador del proceso principal que creó el proceso en cuestión.",
  "¿Qué comando Linux se utiliza para terminar un proceso?":
    "El comando 'kill' se utiliza para terminar procesos en ejecución enviando señales a dichos procesos.",
  "¿Qué directorio contiene puntos de montaje para dispositivos como USB?":
    "El directorio '/media' contiene los puntos de montaje para dispositivos como USB y otros dispositivos removibles.",
  "¿Qué herramienta de Windows ayuda a gestionar certificados digitales?":
    "La herramienta 'certmgr.msg' en Windows permite gestionar y administrar certificados digitales en el sistema.",
  "¿Qué sistema de archivos es utilizado por Windows?":
    "Windows utiliza el sistema de archivos NTFS para gestionar los archivos y el almacenamiento en sus discos duros.",
  "¿Cuál es la utilidad de Windows para editar el registro del sistema?":
    "La utilidad 'regedit' en Windows permite editar el registro del sistema para modificar configuraciones avanzadas.",
  "¿Qué comando en Windows muestra la información de configuración de red?":
    "El comando 'ipconfig' en Windows muestra información detallada sobre la configuración de red, como direcciones IP y más.",
  "¿Qué característica de Windows permite ejecutar máquinas virtuales?":
    "Windows Hyper-V es la característica que permite ejecutar máquinas virtuales de forma nativa en el sistema operativo.",
  "¿Qué componente es la parte central del sistema operativo que gestiona recursos?":
    "El 'Kernel' es el componente central del sistema operativo que gestiona los recursos del sistema, como la memoria y los procesos.",
  "¿Qué archivo es un paquete de instalación de Windows Installer?":
    "Un archivo '.msi' es un paquete de instalación utilizado por Windows Installer para instalar y configurar aplicaciones.",
  "¿Qué permite la paginación en Windows?":
    "La paginación en Windows permite utilizar más memoria de la disponible al emplear memoria virtual, lo que optimiza el uso de la RAM.",
  "¿Cuál es una mejora de Windows 11 respecto a versiones anteriores?":
    "Windows 11 incluye mejoras en la compatibilidad con pantallas táctiles, proporcionando una mejor experiencia táctil y de interfaz.",
  "¿Cuál es el IDE oficial para el desarrollo de aplicaciones Android?":
    "Android Studio es el IDE oficial recomendado por Google para desarrollar aplicaciones Android.",
  "¿Cuál es la tienda oficial de aplicaciones de Android?":
    "Google Play Store es la tienda oficial de aplicaciones para dispositivos Android, donde los usuarios pueden descargar aplicaciones.",
  "¿Qué lenguaje NO es mencionado como compatible para apps Android según el contenido?":
    "El lenguaje 'Ruby' no es mencionado como compatible para desarrollar aplicaciones Android según la documentación oficial.",
  "¿Qué versión de Android introdujo el modo oscuro y compatibilidad 5G?":
    "Android 10 introdujo el modo oscuro y compatibilidad con 5G, mejorando la experiencia visual y la conectividad.",
  "¿Cuál es una novedad de Android 14?":
    "Android 14 incluye el 'Magic Editor' en Google Fotos, que permite editar fotos de manera avanzada utilizando inteligencia artificial.",
  "¿Qué sistema operativo móvil introdujo Apple Intelligence?":
    "Apple Intelligence fue introducido en iOS 18, mejorando la interacción con el dispositivo a través de la inteligencia artificial.",
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
    [
      "¿Qué característica principal diferencia los SSD M.2 NVMe de los SSD SATA?",
      "Son más grandes físicamente",
      "Tienen menor velocidad de lectura/escritura",
      "Utilizan el protocolo NVMe para optimizar la velocidad",
      "Son más económicos por GB",
      "Utilizan el protocolo NVMe para optimizar la velocidad",
    ],
    [
      "¿Cuál de las siguientes configuraciones RAID distribuye la información en tiras entre discos sin redundancia?",
      "RAID 1",
      "RAID 0",
      "RAID 5",
      "RAID 10",
      "RAID 0",
    ],
    [
      "¿Cuál es el número mínimo de discos necesarios para implementar RAID 6?",
      "2 discos",
      "3 discos",
      "4 discos",
      "6 discos",
      "4 discos",
    ],
    [
      "¿Qué tipo de RAID combina RAID 1 y RAID 0?",
      "RAID 5",
      "RAID 6",
      "RAID 10",
      "RAID 0+1",
      "RAID 10",
    ],
    [
      "¿Qué significa JBOD en el contexto de almacenamiento?",
      "Just a Better Option for Disks",
      "Java Based Object Database",
      "Just a Bunch Of Disks",
      "Joined Backup Of Data",
      "Just a Bunch Of Disks",
    ][
      ("¿Qué tipo de interfaz de pantalla soporta tanto video como audio digital?",
      "VGA",
      "DVI-D",
      "HDMI",
      "DisplayPort",
      "HDMI")
    ],
    [
      "¿Qué modelo de color utilizan las impresoras?",
      "RGB",
      "CMYK",
      "HSL",
      "YUV",
      "CMYK",
    ],
    [
      "¿Qué tipo de impresora utiliza un haz láser para inducir cargas eléctricas sobre un tambor giratorio?",
      "Impresora de inyección de tinta",
      "Impresora térmica",
      "Impresora láser",
      "Impresora matricial",
      "Impresora láser",
    ],
    [
      "¿Qué tecnología de escáner convierte imágenes en texto digital editable?",
      "CCD",
      "CIS",
      "OCR",
      "OBR",
      "OCR",
    ],
    [
      "¿Qué diferencia principal existe entre imágenes vectoriales y de mapa de bits?",
      "Las vectoriales tienen mayor tamaño de archivo",
      "Las de mapa de bits se pueden redimensionar sin pérdida de calidad",
      "Las vectoriales se basan en fórmulas matemáticas y se pueden redimensionar sin pérdida de calidad",
      "Las vectoriales no pueden imprimir en color",
      "Las vectoriales se basan en fórmulas matemáticas y se pueden redimensionar sin pérdida de calidad",
    ],
    [
      "¿Cuál es la velocidad máxima de transferencia de datos del USB 4.0?",
      "5 Gb/s",
      "10 Gb/s",
      "20 Gb/s",
      "40 Gb/s",
      "40 Gb/s",
    ],
    [
      "¿Qué categoría de cable Ethernet permite velocidades de hasta 40 Gbps?",
      "CAT6",
      "CAT6a",
      "CAT7a",
      "CAT8",
      "CAT8",
    ],
    [
      "¿Cuál es la principal diferencia entre la fibra óptica monomodo y multimodo?",
      "La monomodo es más barata",
      "La multimodo es para largas distancias (>100 km)",
      "La monomodo usa un solo diodo láser para enviar señales a largas distancias",
      "La multimodo solo puede usarse en exteriores",
      "La monomodo usa un solo diodo láser para enviar señales a largas distancias",
    ],
    [
      "¿Cuál de los siguientes es un formato de audio comprimido sin pérdida?",
      "MP3",
      "AAC",
      "FLAC",
      "WMA",
      "FLAC",
    ],
    [
      "¿Qué distribución de teclado se utiliza principalmente en Francia y Bélgica?",
      "QWERTZ",
      "AZERTY",
      "QWERTY",
      "JCUKEN",
      "AZERTY",
    ],
    [
      "¿Qué tipo abstracto de datos sigue la propiedad LIFO (Last In, First Out)?",
      "Lista",
      "Pila",
      "Cola",
      "Mapa",
      "Pila",
    ],
    [
      "¿Qué estructura de datos sigue el principio FIFO (First In, First Out)?",
      "Pila",
      "Conjunto",
      "Cola",
      "Diccionario",
      "Cola",
    ],
    [
      "¿Qué método se utiliza para resolver colisiones en tablas hash donde cada posición contiene una lista?",
      "Hashing abierto",
      "Hashing cerrado",
      "Hashing lineal",
      "Doble hashing",
      "Hashing cerrado",
    ],
    [
      "En un árbol binario, ¿qué son los nodos hoja?",
      "Nodos que tienen exactamente un hijo",
      "Nodos que no tienen hijos",
      "El primer nodo del árbol",
      "Nodos que tienen dos hijos",
      "Nodos que no tienen hijos",
    ],
    [
      "¿Qué es un árbol binario perfecto?",
      "Un árbol donde todos los nodos tienen 1 o 2 hijos",
      "Un árbol donde todos los nodos tienen exactamente 2 hijos",
      "Un árbol lleno donde todas las hojas están en el mismo nivel",
      "Un árbol donde cada nodo solo tiene un subárbol",
      "Un árbol lleno donde todas las hojas están en el mismo nivel",
    ],
    [
      "¿Qué algoritmo encuentra el camino más corto desde un vértice origen al resto de vértices en un grafo ponderado?",
      "Floyd",
      "Dijkstra",
      "Tarjan",
      "Prim",
      "Dijkstra",
    ],
    [
      "¿Cuál de estos algoritmos de ordenación divide la lista en mitades, ordena recursivamente y luego combina?",
      "Quicksort",
      "Bubblesort",
      "Mergesort",
      "Insertion sort",
      "Mergesort",
    ],
    [
      "En un recorrido INORDEN de un árbol binario, ¿cuál es el orden correcto?",
      "Raíz, Izquierda, Derecha",
      "Izquierda, Raíz, Derecha",
      "Izquierda, Derecha, Raíz",
      "Derecha, Raíz, Izquierda",
      "Izquierda, Raíz, Derecha",
    ],
    [
      "¿Qué tipo de grafo tiene aristas con una dirección específica?",
      "Grafo no dirigido",
      "Grafo dirigido",
      "Grafo simple",
      "Grafo regular",
      "Grafo dirigido",
    ],
    [
      "¿Qué algoritmo de ordenación utiliza un pivote y divide la lista en elementos menores y mayores?",
      "Mergesort",
      "Heapsort",
      "Insertion sort",
      "Quicksort",
      "Quicksort",
    ],
    [
      "¿Qué término se refiere específicamente al núcleo del sistema operativo Linux?",
      "GNU",
      "Linux",
      "GNU/Linux",
      "Kernel",
      "Linux",
    ],
    [
      "¿Qué característica define al kernel de Linux?",
      "Es microkernel y modular",
      "Es monolítico y no modular",
      "Es monolítico y modular",
      "Es microkernel y no modular",
      "Es monolítico y modular",
    ],
    [
      "¿Qué gestor de paquetes es típicamente usado en Ubuntu?",
      "Rpm",
      "Pacman",
      "Apt",
      "Emerge",
      "Apt",
    ],
    [
      "¿Qué distribución Linux está especializada en seguridad informática y hacking ético?",
      "Ubuntu",
      "Kali Linux",
      "Fedora",
      "Linux Mint",
      "Kali Linux",
    ],
    [
      "¿Qué tipo de distribución se caracteriza por tener actualizaciones continuas?",
      "Rolling release",
      "LTS",
      "Enterprise",
      "Minimalista",
      "Rolling release",
    ],
    [
      "En Linux, ¿qué significa el acrónimo UID?",
      "Universal Identifier",
      "User Interface Design",
      "User Identifier",
      "Unix Internal Directory",
      "User Identifier",
    ],
    [
      "¿Qué comando se utiliza para cambiar el propietario de un archivo?",
      "chown",
      "chmod",
      "chgrp",
      "chuser",
      "chown",
    ],
    [
      "¿Qué comando muestra información en tiempo real de los procesos en ejecución?",
      "ps",
      "top",
      "ls",
      "grep",
      "top",
    ],
    [
      "¿Qué comando Linux se utiliza para buscar patrones en archivos de texto?",
      "find",
      "grep",
      "sed",
      "search",
      "grep",
    ],
    [
      "¿Qué directorio contiene los binarios necesarios para el funcionamiento del sistema?",
      "/usr",
      "/boot",
      "/bin",
      "/etc",
      "/bin",
    ],
    [
      "En el sistema de permisos de Linux, ¿qué representa la letra 'w'?",
      "Permiso de lectura",
      "Permiso de escritura",
      "Permiso de ejecución",
      "Permiso de acceso",
      "Permiso de escritura",
    ],
    [
      "¿Qué comando se utiliza para cambiar los permisos de un archivo?",
      "chown",
      "chmod",
      "chgrp",
      "chperm",
      "chmod",
    ],
    [
      "¿Para qué se utiliza el comando 'umask' en Linux?",
      "Para establecer los permisos predeterminados para nuevos archivos",
      "Para mostrar todos los permisos de un archivo",
      "Para cambiar el propietario de un archivo",
      "Para eliminar todos los permisos de un archivo",
      "Para establecer los permisos predeterminados para nuevos archivos",
    ],
    [
      "¿Qué llamada al sistema en Linux crea una copia de un proceso?",
      "exec()",
      "fork()",
      "wait()",
      "clone()",
      "fork()",
    ],
    [
      "En Linux, ¿qué tipo de usuario tiene acceso total al sistema?",
      "Usuario estándar",
      "Usuario administrativo",
      "Root (superusuario)",
      "Usuario sudo",
      "Root (superusuario)",
    ],
    [
      "¿Qué directorio de Linux contiene los ficheros de configuración del sistema host?",
      "/bin",
      "/boot",
      "/etc",
      "/usr",
      "/etc",
    ],
    [
      "¿Qué distribución es conocida por ser la versión gratuita de Red Hat?",
      "Ubuntu",
      "Fedora",
      "CentOS",
      "Debian",
      "Fedora",
    ],
    [
      "¿En qué generación de ordenadores se introdujeron los circuitos integrados?",
      "Primera generación",
      "Segunda generación",
      "Tercera generación",
      "Cuarta generación",
      "Tercera generación",
    ],
    [
      "¿Qué diferencia principal existe entre los directorios /bin y /sbin en Linux?",
      "/bin contiene binarios para usuarios y /sbin para el sistema",
      "/bin es para archivos binarios y /sbin para archivos de texto",
      "/bin contiene binarios para el funcionamiento del sistema y /sbin binarios de administración",
      "/bin es para aplicaciones y /sbin para librerías",
      "/bin contiene binarios para el funcionamiento del sistema y /sbin binarios de administración",
    ],
    [
      "¿Qué comando se utiliza para mostrar el directorio actual en Linux?",
      "cd",
      "ls",
      "pwd",
      "dir",
      "pwd",
    ],
    [
      "¿Qué distribución Linux está diseñada para privacidad y anonimato?",
      "Ubuntu",
      "Fedora",
      "Tails",
      "Arch Linux",
      "Tails",
    ],
    [
      "¿Qué gestor de paquetes utiliza Arch Linux?",
      "Apt",
      "Rpm",
      "Pacman",
      "Emerge",
      "Pacman",
    ],
    [
      "¿Qué significan las siglas PPID en el contexto de procesos Linux?",
      "Process Priority ID",
      "Parent Process ID",
      "Primary Process ID",
      "Process Protection ID",
      "Parent Process ID",
    ],
    [
      "¿Qué comando Linux se utiliza para terminar un proceso?",
      "end",
      "terminate",
      "kill",
      "stop",
      "kill",
    ],
    [
      "¿Qué directorio contiene puntos de montaje para dispositivos como USB?",
      "/dev",
      "/media",
      "/mnt",
      "/opt",
      "/media",
    ],
    [
      "¿Qué herramienta de Windows ayuda a gestionar certificados digitales?",
      "control",
      "certmgr.msg",
      "regedit",
      "gpedit.msc",
      "certmgr.msg",
    ],
    [
      "¿Qué sistema de archivos es utilizado por Windows?",
      "ext4",
      "APFS",
      "NTFS",
      "ZFS",
      "NTFS",
    ],
    [
      "¿Cuál es la utilidad de Windows para editar el registro del sistema?",
      "msinfo32",
      "winver",
      "regedit",
      "services.msc",
      "regedit",
    ],
    [
      "¿Qué comando en Windows muestra la información de configuración de red?",
      "ping",
      "netstat",
      "ipconfig",
      "xcopy",
      "ipconfig",
    ],
    [
      "¿Qué característica de Windows permite ejecutar máquinas virtuales?",
      "Windows Sandbox",
      "VirtualBox",
      "Hyper-V",
      "Docker",
      "Hyper-V",
    ],
    [
      "¿Qué componente es la parte central del sistema operativo que gestiona recursos?",
      "GUI",
      "Shell",
      "Kernel",
      "Control de cuentas de usuario",
      "Kernel",
    ],
    [
      "¿Qué archivo es un paquete de instalación de Windows Installer?",
      ".bat",
      ".exe",
      ".msi",
      ".cmd",
      ".msi",
    ],
    [
      "¿Qué permite la paginación en Windows?",
      "Dividir la CPU en núcleos virtuales",
      "Utilizar más memoria de la disponible mediante memoria virtual",
      "Reducir el tamaño de los archivos",
      "Mejorar la velocidad de la CPU",
      "Utilizar más memoria de la disponible mediante memoria virtual",
    ],
    [
      "¿Cuál es una mejora de Windows 11 respecto a versiones anteriores?",
      "Integración con Cortana",
      "Mejoras en compatibilidad con pantallas táctiles",
      "Compatibilidad con sistemas de archivos ext4",
      "Soporte nativo para servidores SQL",
      "Mejoras en compatibilidad con pantallas táctiles",
    ],
    [
      "¿Cuál es el IDE oficial para el desarrollo de aplicaciones Android?",
      "Eclipse",
      "Visual Studio",
      "Android Studio",
      "NetBeans",
      "Android Studio",
    ],
    [
      "¿Cuál es la tienda oficial de aplicaciones de Android?",
      "App Store",
      "Google Play Store",
      "Amazon Appstore",
      "Huawei AppGallery",
      "Google Play Store",
    ],
    [
      "¿Qué lenguaje NO es mencionado como compatible para apps Android según el contenido?",
      "Java",
      "Kotlin",
      "Ruby",
      "Python",
      "Ruby",
    ],
    [
      "¿Qué versión de Android introdujo el modo oscuro y compatibilidad 5G?",
      "Android 9 Pie",
      "Android 10",
      "Android 11",
      "Android 12",
      "Android 10",
    ],
    [
      "¿Cuál es una novedad de Android 14?",
      "Modo oscuro",
      "Magic Editor en Google Fotos",
      "Soporte para RCS",
      "Apple Intelligence",
      "Magic Editor en Google Fotos",
    ],
    [
      "¿Qué sistema operativo móvil introdujo Apple Intelligence?",
      "Android 14",
      "iOS 18",
      "macOS Sequoia",
      "WindowsPhone",
      "iOS 18",
    ],
    [
      "¿Qué novedad trajo macOS 15 Sequoia?",
      "Compatibilidad con Android",
      "Rediseño del Finder",
      "Espejado de iPhone",
      "Soporte para aplicaciones de Android",
      "Espejado de iPhone",
    ],
    [
      "¿Qué característica describe a las bases de datos NoSQL?",
      "Uso exclusivo de SQL",
      "Estructura fija de tablas",
      "Escalabilidad horizontal y flexibilidad",
      "Solo disponibles en la nube",
      "Escalabilidad horizontal y flexibilidad",
    ],
    [
      "¿Qué significa la 'C' en el principio ACID de las bases de datos relacionales?",
      "Consistencia",
      "Concurrencia",
      "Coherencia",
      "Conectividad",
      "Consistencia",
    ],
    [
      "¿Qué tipo de base de datos almacena datos en documentos JSON o BSON?",
      "Clave-Valor",
      "Columnares",
      "Documentales",
      "Grafos",
      "Documentales",
    ],
    [
      "¿Cuál es un ejemplo de base de datos clave-valor?",
      "MongoDB",
      "Redis",
      "Neo4j",
      "Cassandra",
      "Redis",
    ],
    [
      "¿Qué bases de datos son ideales para redes sociales o análisis de rutas?",
      "Columnares",
      "Grafos",
      "Documentales",
      "Relacionales",
      "Grafos",
    ],
    [
      "¿Qué base de datos relacional es un fork de MySQL?",
      "Aurora",
      "SQLite",
      "MariaDB",
      "Oracle DB",
      "MariaDB",
    ],
    [
      "¿Qué es una base de datos orientada a objetos (BDOO)?",
      "Una base de datos con solo filas y columnas",
      "Una base que almacena datos como objetos similares a POO",
      "Una base especializada en datos tabulares",
      "Una base que solo admite JSON",
      "Una base que almacena datos como objetos similares a POO",
    ],
    [
      "¿Qué operación del álgebra relacional es una operación NO básica?",
      "Proyección",
      "Unión natural",
      "Selección",
      "Producto cartesiano",
      "Unión natural",
    ],
    [
      "¿Qué nivel de aislamiento evita lecturas sucias pero permite lecturas fantasma?",
      "Serializable",
      "Repeatable Reads",
      "Read Committed",
      "Read Uncommitted",
      "Read Committed",
    ],
    [
      "¿Qué es la redundancia lógica en bases de datos?",
      "Copia física de datos entre servidores",
      "Duplicación intencional para respaldos",
      "Duplicación innecesaria que puede causar inconsistencias",
      "Sincronización entre nodos",
      "Duplicación innecesaria que puede causar inconsistencias",
    ],
    [
      "¿Qué base de datos orientada a objetos es usada en telecomunicaciones y finanzas?",
      "ObjectStore",
      "ObjectDB",
      "db4o",
      "ZODB",
      "ObjectStore",
    ],
    [
      "¿Qué puerto predeterminado usa PostgreSQL?",
      "3306",
      "5432",
      "1521",
      "1433",
      "5432",
    ],
    [
      "¿Qué puerto predeterminado usa Redis?",
      "6379",
      "7474",
      "50000",
      "27017",
      "6379",
    ],
    [
      "¿Qué describe mejor a Single Sign-On (SSO)?",
      "Permite acceder a varias aplicaciones con un solo inicio de sesión",
      "Divide los sistemas en múltiples interfaces",
      "Evita el uso de contraseñas en todas las aplicaciones",
      "Unifica varias bases de datos en un clúster",
      "Permite acceder a varias aplicaciones con un solo inicio de sesión",
    ],
    [
      "¿Qué bases de datos combinan la consistencia de SQL con la escalabilidad de NoSQL?",
      "Grafos",
      "NewSQL",
      "Documentales",
      "Clave-Valor",
      "NewSQL",
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
    (pregunta) => !preguntasVistas.includes(pregunta)
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
