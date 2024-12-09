import fs from 'fs';
import path from 'path';

// Function to comment out PHP code in a file
function commentOutPHPCode(filePath) {
    // Read the content of the file
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Log for debugging when processing a file
    console.log(`Processing file: ${filePath}`);

    // Replace all occurrences of <?php with <!--?php
    fileContent = fileContent.replace(/<\?php/g, '<!--?php');

    // Replace all occurrences of ?> with ?-->
    fileContent = fileContent.replace(/\?>/g, '?-->');

    // If changes were made, update the file
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`Updated file: ${filePath}`);
}

// Example usage:
const directoryPath = path.join('./sourceCode/html'); // Path to the sourceCode/html/pages directory
processAstroFilesInDirectory(directoryPath);

// Function to process all .astro files in a directory and its subfolders
function processAstroFilesInDirectory(directory) {
    // Read all files and subdirectories in the specified directory
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        // If the file is a directory, process it recursively
        if (stat.isDirectory()) {
            processAstroFilesInDirectory(filePath);
        } else if (filePath.endsWith('.astro')) {
            commentOutPHPCode(filePath);
        }
    });
}
