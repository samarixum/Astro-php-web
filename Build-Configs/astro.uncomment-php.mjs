import fs from 'fs';
import path from 'path';

// Function to uncomment PHP code in a file
function uncommentPHPCode(filePath) {
    // Read the content of the file
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Log for debugging when processing a file
    console.log(`Processing file: ${filePath}`);

    // Replace all occurrences of <!--?php with <?php
    fileContent = fileContent.replace(/<!--\?php/g, '<?php');

    // Replace all occurrences of ?--> with ?>
    fileContent = fileContent.replace(/\?-->/g, '?>');

    fileContent = fileContent.replace(/\?--/g, '?>');

    // If changes were made, update the file
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`Updated file: ${filePath}`);
}

// Function to process all .phtml and .astro files in a directory and its subfolders
function processFilesInDirectory(directory) {
    // Read all files and subdirectories in the specified directory
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        // If the file is a directory, process it recursively
        if (stat.isDirectory()) {
            processFilesInDirectory(filePath);
        } else if (filePath.endsWith('.html') || filePath.endsWith('.astro')) {
            uncommentPHPCode(filePath);
        }
    });
}

// Directories to process
const directoriesToProcess = [
    path.join('./sourceCode/html/pages'),
    path.join('./sourceCode/html/components'),
    path.join('./Distribution-Build-Output')
];

// Process each directory
directoriesToProcess.forEach(directory => {
    processFilesInDirectory(directory);
});
