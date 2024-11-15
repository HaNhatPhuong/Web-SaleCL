import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // Nếu bạn muốn sử dụng các biến mặc định cho Sass (ví dụ, global variables), có thể định nghĩa tại đây
        additionalData: `@use '@styles/variables' as *;`, // thêm vào bất kỳ biến toàn cục nào ở đây
        additionalData: `@use '@styles/mixin' as *;`, // thêm vào bất kỳ biến toàn cục nào ở đây
      },
    },
  },
});
