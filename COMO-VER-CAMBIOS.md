# Feria: espacio de edición sin despliegues Vercel

La presentación pública sigue en `main` y NO se cambia hasta que el dueño lo autorice.
Esta rama `feria-preview` contiene las correcciones en curso y una configuración de
vista previa web para StackBlitz. No se deben fusionar `package.json`,
`vite.config.js` ni el bloqueo `git.deploymentEnabled:false` a producción.

## Abrir la vista previa
1. Abrir `https://stackblitz.com/github/verdesotostiven4-commits/pollazo-galapagueno-pitch/tree/feria-preview?startScript=dev`
2. Esperar a que se inicie Vite en el propio entorno de StackBlitz.
3. En el panel Preview ver `/feria.html`. El servidor redirige
   automáticamente desde `/` hacia esa ruta.
4. Recargar o reabrir el enlace después de nuevos commits en `feria-preview`.

No genera desplegados de Vercel. El funcionamiento de StackBlitz depende de su
servicio y compatibilidad del navegador. Como alternativa, clonar `feria-preview`
y abrir `feria.html` con VS Code Live Server en localhost.

## Publicación final
- Mantener `main` intacta hasta aprobación.
- Migrar solo HTML, CSS, JS y assets aprobados (excluir infraestructura de preview).
- Reactivar compilación Vercel y hacer un despliegue de producción.
- Confirmar que el alias existente de exposición apunta al nuevo deploy.
