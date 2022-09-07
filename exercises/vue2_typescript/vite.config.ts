import { defineConfig, UserConfig } from 'vite';

import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import createVuePlugin from '@vitejs/plugin-vue2';

export default defineConfig(({ command, mode }) => {


    const config = {
        plugins: [
            createVuePlugin(),
            Components({
                resolvers: [VuetifyResolver()],
            }),
        ],
        server: {
            host: '0.0.0.0',
            port: 8080,
            fs: { strict: false },
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: [
                        // vuetify variable overrides
                        //  '@import "@/assets/styles/variables"',
                        '',
                    ].join('\n'),
                },
            },
        },

       
    } as UserConfig;
    
    return config;
});
