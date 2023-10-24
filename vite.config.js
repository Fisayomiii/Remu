import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: "Remu",
                short_name: "Remu",
                description: "Remu is an app that empowers users to effortlessly upload and enjoy AI-generated music.",
                icons: [
                    {
                        src: "/assets/remu.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/assets/remu.png",
                        sizes: "180x180",
                        type: "image/png",
                        purpose: "apple touch icon",
                    },
                    {
                        src: "/assets/remu.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable"
                    },
                    {
                        src: "/assets/remu.png",
                        sizes: "225x225",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
                theme_color: "#151515",
                background_color: "#151515",
                display: "standalone",
                scope: "/",
                start_url: "/",
                orientation: "portrait",
            },
        })
    ],
})
