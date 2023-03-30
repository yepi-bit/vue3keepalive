import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import prismjs from 'vite-plugin-prismjs';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
        open: true,
        host: '0.0.0.0',
        // proxy: {
        //   '/api': {
        //     target: 'http://39.101.195.215:18003',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, ''),
        //   },
        // },
    },
    plugins: [
        vue(),
        vueJsx(),
        prismjs({
            languages: ['json'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
