import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        agent: resolve(__dirname, 'agent.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
