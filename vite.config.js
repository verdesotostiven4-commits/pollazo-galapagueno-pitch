import { defineConfig } from 'vite';

// Solo existe en la rama feria-preview. StackBlitz muestra feria.html
// al abrir el preview y conserva todos los enlaces a CSS, JS y assets.
export default defineConfig({
  plugins: [{
    name: 'open-feria-first',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url === '/' || request.url?.startsWith('/?')) {
          response.statusCode = 302;
          response.setHeader('Location', '/feria.html');
          response.end();
          return;
        }
        next();
      });
    },
  }],
  server: { host: '0.0.0.0', port: 5173 },
});
