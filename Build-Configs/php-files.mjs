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
        } else if (path.extname(src) === '.php') {
            // Copy PHP file
            await fs.copyFile(src, dest);
        } else if (path.extname(src) === '.phtml') {
            // Copy PHP file
            await fs.copyFile(src, dest);
        } else if (path.extname(src) === '.shtml') {
            // Copy PHP file
            await fs.copyFile(src, dest);
        }
    } catch (error) {
        console.error(`Failed to copy ${src} to ${dest}:`, error);
    }
}

async function main() {
    // Define the source and destination directories
    const srcDir = './sourceCode/html/pages';
    const destDir = './Distribution-Build-Output';

    // Start the copy process
    await copyItem(srcDir, destDir);

    console.log('Copy operation completed.');
}

// Run the script
main().catch(console.error);
