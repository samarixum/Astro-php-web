import fs from 'fs';
import path from 'path';

function renameHtmlToPhtml(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recursively handle subdirectories
            renameHtmlToPhtml(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            const newFileName = entry.name.replace('.html', '.phtml');
            const newFullPath = path.join(dir, newFileName);
            fs.renameSync(fullPath, newFullPath);
            console.log(`Renamed: ${fullPath} -> ${newFullPath}`);
        }
    }
}

// Set the directory you want to process
const outputDir = path.resolve('./Distribution-Build-Output');

console.log(`Starting rename process in: ${outputDir}`);
renameHtmlToPhtml(outputDir);
console.log('Rename process complete.');
