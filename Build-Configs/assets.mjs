import { promises as fs } from 'fs';
import path from 'path';

async function copyItem(src, dest) {
    try {
        const stats = await fs.stat(src);

        if (stats.isDirectory()) {
            // Ensure the destination directory exists
            await fs.mkdir(dest, { recursive: true });
            const items = await fs.readdir(src);

            // Recursively copy directory contents
            for (const item of items) {
                const srcPath = path.join(src, item);
                const destPath = path.join(dest, item);
                await copyItem(srcPath, destPath);
            }
        } else {
            // Copy file
            await fs.copyFile(src, dest);
        }
    } catch (error) {
        console.error(`Failed to copy ${src} to ${dest}:`, error);
    }
}

async function main() {
    // Define specific folders and files to copy
    const itemsToCopy = [
        { src: './sourceCode/data', dest: './Distribution-Build-Output/data' },
        { src: './sourceCode/assets', dest: './Distribution-Build-Output/' }
    ];

    // Process each item
    for (const item of itemsToCopy) {
        await copyItem(item.src, item.dest);
    }

    console.log('Copy operation completed.');
}

// Run the script
main().catch(console.error);
