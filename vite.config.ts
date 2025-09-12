import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
    plugins: [react()],
    assetsInclude: ["**/*.lottie"],
    resolve: {
        alias: {
            "@/": path.resolve(__dirname, "./src"),
            "@/components": path.resolve(__dirname, "./src/components"),
            "@/assets": path.resolve(__dirname, "./src/assets"),
            "@/core": path.resolve(__dirname, "./src/core"),
            "@/shared": path.resolve(__dirname, "./src/shared"),
            "@/modules": path.resolve(__dirname, "./src/modules"),
        },
    },
})
