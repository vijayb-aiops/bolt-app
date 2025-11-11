// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/  
export default defineConfig(({ mode }) => {
  // Replace 'your-new-repo-name' with the actual name of the new GitHub repository
  const REPO_NAME = "bolt-app";

  return {
    // ✅ Add base path for GitHub Pages deployment
    base: mode === "production" ? `/${REPO_NAME}/` : "/",
    
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
