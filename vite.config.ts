import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'

const prefix = `monaco-editor/esm/vs`;

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
    // 编辑器打包配置 vite 打包是基于 rollup 实现的，这里可以利用 rollup 的手动分片选项，将 worker 相关的单独打包来解决这个问题
    base: './',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    jsonWorker: [`${prefix}/language/json/json.worker`],
                    cssWorker: [`${prefix}/language/css/css.worker`],
                    htmlWorker: [`${prefix}/language/html/html.worker`],
                    tsWorker: [`${prefix}/language/typescript/ts.worker`],
                    editorWorker: [`${prefix}/editor/editor.worker`],
                },
            },
        },
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
