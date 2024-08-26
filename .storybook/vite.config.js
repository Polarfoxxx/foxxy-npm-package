import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './', // Nastavenie základnej cesty pre správne načítanie zdrojov v produkcii
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'), 
      '@components': path.resolve(__dirname, '../src/components'), 
    },
  },
});
