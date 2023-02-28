import path from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineNuxtConfig({
    app: {
        head: {
            title: 'nuxt3-template-project',
            meta: [],
            link: [],
            script: []
        }
    },
    css: [
        'element-plus/dist/index.css',
        'assets/css/index.css',
    ],
    nitro: {
        // 开发环境代理
        devProxy: {
            '/api': {
                target: 'https://example.com',
                changeOrigin: true,
            }
        }
    },
    vite: {
        plugins: [viteCompression()],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    modifyVars: {
                        hack: `true; @import (reference) "${path.resolve('assets/css/index.less')}"`
                    }
                }
            }
        },
    }
})
