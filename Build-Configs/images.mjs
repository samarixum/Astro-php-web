import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

/**
 *  Convert source images (any format) to WebP with specified sizes and filenames.
 *  @param {string} inputDir - Directory containing source images.
 *  @param {string} outputDir - Directory to save converted images.
 *  @param {Array<number>} sizes - Array of sizes for output images.
 */
async function convertImages(inputDir, outputDir, sizes) {
    try {
        // Ensure output directory exists
        await fs.mkdir(outputDir, { recursive: true });

        // Read all files in the input directory
        const files = await fs.readdir(inputDir);

        for (const file of files) {
            const filePath = path.join(inputDir, file);
            const fileInfo = path.parse(file);

            // Filter supported image formats
            const supportedFormats = ['.png', '.svg', '.webp', '.jpg', '.jpeg'];
            if (supportedFormats.includes(fileInfo.ext.toLowerCase())) {
                const baseName = fileInfo.name.split('-Source-')[0];

                for (const size of sizes) {
                    const outputFileName = `${baseName}-x${size}.webp`;
                    const outputFilePath = path.join(outputDir, outputFileName);

                    console.log(`Processing ${file} -> ${outputFileName}`);

                    await sharp(filePath)
                        .resize({ width: size })
                        .toFormat('webp', { quality: 85 }) // Adjust WebP quality as needed
                        .toFile(outputFilePath);

                    console.log(`Saved: ${outputFilePath}`);
                }
            } else {
                console.warn(`Skipping unsupported file format: ${file}`);
            }
        }

        console.log('Conversion complete.');
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

// Configuration
const inputDirectory = path.resolve('sourceCode\\data\\images\\Source'); // Replace with your source images folder
const outputDirectory = path.resolve('sourceCode\\data\\images\\prod'); // Replace with your output folder
// set output webp sizes
const outputSizes = [16, 32, 50, 64, 128, 180, 1024];

// Run the conversion
convertImages(inputDirectory, outputDirectory, outputSizes);
