import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'preserve',
    },
    markdown: {
        shikiConfig: {
            theme: 'dark-plus'
        }
    },
    //integrations: [mdx()],
    srcDir: './sourceCode/html',
    cacheDir: './Distribution-Build-Output/pages',
    outDir: './Distribution-Build-Output',
    compressHTML: false
});