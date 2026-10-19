# Pollazo Galapagueño — Presentación del 23 de octubre

Versión inicial interactiva con ocho escenas. **La web está publicada, pero sus recursos multimedia y datos comerciales definitivos aún están pendientes de incorporar.**

## Enlaces

- [Abrir presentación en Vercel](https://pollazo-galapagueno-pitch.vercel.app)
- [Repositorio de código](https://github.com/verdesotostiven4-commits/pollazo-galapagueno-pitch)

## Uso y controles

- Flechas izquierda/derecha para cambiar de escena.
- `F` para pantalla completa.
- `N` para notas del presentador.
- Botón **Escenas** para navegar directamente.
- Móvil: deslizar a izquierda o derecha.
- Para trabajar sin internet, descarga todos los archivos y abre `index.html`.

## Edición

- Editar textos y escenas desde `content.js`.
- Guardar fotos, videos y logo definitivos dentro de `assets/`.
- Cada objeto `media` contiene `src: null`. Sustituye por `src: "assets/nombre.mp4"` o `src: "assets/nombre.jpg"`.
- No introducir contactos, clientes, capacidades, certificaciones o cifras no verificadas.
- Materiales con IA: identificarlos como recreaciones cuando no sean documentación fiel.

## Despliegue

Proyecto estático sin dependencias, framework ni compilación. La primera versión se publicó a Vercel directamente desde los archivos del repositorio.

**Importante:** Los cambios nuevos en GitHub todavía **no** se despliegan automáticamente porque la cuenta de Vercel requiere que se autorice la conexión de GitHub (Login Connection). Al autorizarla, vincula este repo al proyecto ya existente `pollazo-galapagueno-pitch` en Vercel; **no crees otro proyecto**.

## Pendientes

Incorporar logo oficial, fotografías y videos aprobados, información comercial validada y contacto autorizado; revisar la presentación final antes del evento.


## Video de la primera pantalla (inicio)

**Recomendación:** colocar un clip de 8 a 12 segundos, sin textos integrados, que incluya: producto empaquetado (3-4 s), crianza y alimentación (3-4 s) y una toma del equipo o distribución (2-4 s). NO usar aquí la intro completa de seis segundos sola ni repetir el comercial entero de 60 segundos. El video debe reproducirse silencioso, en bucle y con controles de reproducción.

1. Exportar archivo MP4 H.264, horizontal 16:9, 1920 × 1080, velocidad de fotogramas constante y audio opcional (se reproducirá silenciado).
2. Añadir el archivo a GitHub mediante **Add file → Upload files** dentro de la carpeta \`assets\`, por ejemplo \`assets/apertura-pollazo.mp4\`. Para clips grandes, es preferible usar un almacenamiento de video y URL pública estable en lugar de subirlos a GitHub.
3. Abrir \`content.js\`, buscar la escena \`id:"inicio"\`, cambiar \`src:null\` de su primer objeto de \`media\` por \`src:"assets/apertura-pollazo.mp4"\`.
4. Volver a publicar en **el proyecto existente** de Vercel: actualmente el repositorio no está vinculado a despliegues automáticos, así que cambios en GitHub por sí solos no publican contenido. Autorizar la integración de GitHub desde Vercel y conectar el repositorio al proyecto existente o realizar un despliegue manual.
5. Probar la reproducción en computadora y móvil; mantener un respaldo offline con todos los archivos.

No mostrar reconstrucciones de IA como evidencia documental si cambian realmente los galpones, las aves, la maquinaria o las personas.


## Feria 20 octubre — recorrido completo

Se añadieron páginas independientes para la feria (sin modificar el proyecto de web comercial que pudiera existir fuera de este repositorio):

- **/feria.html** — experiencia VIDEO NARRADO → PRESENTACIÓN INTERACTIVA (8 escenas, notas y pantalla completa).
- **/pantalla.html** — pantalla de atracción con video en bucle, silencioso. Mientras no haya MP4, aparece un **diseño animado de demostración**, no el comercial final.
- **/sitio-concepto.html** — muestra visual del **futuro sitio oficial**, servicio separado y no incluido en los honorarios del evento.
- **/** — presentación previa del día 23, que se mantiene disponible.

### Añadir los videos (nombres exactos)

1. **Video principal con narración:** subir como \`assets/relato-pollazo.mp4\`. Se reproduce a petición del visitante desde \`/feria.html\`. Si falta el archivo, el sitio muestra que está pendiente.
2. **Video del televisor en la carpa:** subir como \`assets/loop-feria.mp4\`. Se reproduce continuamente, sin audio, desde \`/pantalla.html\`. Evitar textos demasiado pequeños porque es una pantalla de atracción.
3. Exportar ambos en MP4/H.264, 16:9, 1920×1080, ~24–30 fps; considerar compresión adecuada para carga por internet.
4. Los MP4 grandes pueden ser inapropiados para GitHub: en ese caso utilizar almacenamiento de archivos/video con enlaces estables y actualizar la etiqueta \`<source>\` correspondiente. Para la feria conservar copia en USB y ordenador sin depender del Wi-Fi.
5. La cuenta de Vercel aún requiere autorizar su conexión a GitHub. Tras un cambio en GitHub, se debe desplegar manualmente o habilitar esa integración. No crear un segundo proyecto de presentación.

### Datos indispensables antes de mostrar como documental

- Solicitar al responsable: foto/video auténtico del tratamiento de agua; fotos de bebederos y comederos reales; evidencia o descripción técnica precisa del sistema y registros de cuidado/alimentación.
- Definir qué mensajes pueden respaldarse; confirmar autorizaciones del personal, datos de contacto comercial, logos, productos y capacidades.
- Nunca presentar instalaciones/personas/máquinas generadas por IA como registros documentales de Pollazo.

### Diferencias del paquete comercial

El video en bucle y el recorrido interactivo son para el evento del 20. La propuesta de web corporativa (/sitio-concepto.html) es un trabajo **cotizable aparte**. El sitio corporativo existente —si lo hay— no fue reemplazado.
