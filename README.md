# Astro PHP-Integrated Web Template

A web development template for php web Servers using the static site generation capabilities of Astro to make life easier and the not javascript of PHP.
This template forces astro to ignore PHP directly into the Astro source files.

## Purpose
The purpose of this template is to use **Astro** exclusively in my web development workflow for consistency, while still ensuring compatibility with PHP-only servers. This allows me to use Astro's features and more importantly avoid using JavaScript.

## Features

- **Astro for Static Site Generation**: Use Astro for building fast, static websites, with dynamic content via PHP.
- **PHP Compatibility**: almost seamlessly integrate PHP code within .astro source files.
- **almost JavaScript-Free**: Avoid the need for JavaScript in my development workflow, exluding the custom build scripts...
- **Custom Build Process**: Automatically comment out php code blocks in source files then build with astro then remove phpcomment blocks from source files and output files then rename all .html output to .phtml to run the php then the other stuff and also copy all .php and .phtml files from the sourcecode/html folder to the build, simple right?!

Unfortunately, live development from the source is not possible because Astro doesn’t support PHP. But, since your code is perfect, who needs tests anyway?

## Installation

1. Clone the repository if your feeling crazy:

    ```bash
        git clone https://github.com/samarixum/Astro-php-web.git
    ```

2. Install dependencies:

    ```bash
        npm update
    ```

## Build Process

The build process automates several steps to handle Astro and PHP integration. You can run the main build command using:

```bash
npm run build

- to test it i set my xampp www directory to the build output for the project to see the changes after every build
