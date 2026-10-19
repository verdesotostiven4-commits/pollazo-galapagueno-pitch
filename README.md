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
