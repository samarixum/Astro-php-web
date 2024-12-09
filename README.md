# Astro PHP-Integrated Web Template

A web development template for php web Servers using the static site generation capabilities of Astro to make life easier and the not javascript of PHP.
This template forces astro to ignore PHP directly into the Astro source files.

## Purpose
The purpose of this template is to use **Astro** exclusively in my web development workflow for consistency, while still ensuring compatibility with PHP-only servers. This allows me to use Astro's features and more importantly avoid using JavaScript.

## Features

- **Astro for Static Site Generation** - Use Astro for building fast, static websites, with dynamic content via PHP.
- **PHP Compatibility** - almost seamlessly integrate PHP code within .astro source files.
- **almost JavaScript-Free** - Avoid the need for JavaScript in my development workflow, exluding the custom build scripts...
- **Custom Build Process** - Automatically comment out php code blocks in source files then build with astro then remove phpcomment blocks from source files and output files then rename all .html output to .phtml to run the php then the other stuff and also copy all .php and .phtml files from the sourcecode/html folder to the build, simple right?!

Unfortunately, live development from the source is not possible because Astro doesn’t support PHP. But, since your code is perfect, who needs tests anyway?

To test it, I set my **XAMPP** `www` directory to the build output for the project to see the changes after every build.


## Installation

1. Clone the repository if your feeling crazy:

```pwsh
git clone https://github.com/samarixum/Astro-php-web.git
```

2. Install dependencies:

```pwsh
npm update
```

## Build Process

The build process automates several steps to handle Astro and PHP integration. You can run the main build command using:

```pwsh
npm run build
```


### this script is used to execute all build commands
```pwsh
build 
```
- npm-run-all astro-check:1 php-commentout:2 compile-html:3 html-format:4 php-uncomment:5 rename:6 generate-webp:7 copy-assets:8 js:9 ts:10 css-compile:11 copy-php:12

check astro
```pwsh
astro-check:1
```
- astro --config Build-Configs/astro.config.mjs check --verbose

node script to comment out php code in astro source to prevent astro build errors
```pwsh
php-commentout:2
```
- node Build-Configs/astro.commentout-php.mjs

astro build command for compiling html
```pwsh
compile-html:3
```
- astro --config Build-Configs/astro.config.mjs build

format output html
```pwsh
html-format:4
```
- js-beautify -r --type html --no-preserve-newlines Distribution-Build-Output/**/*.html

remove html comments around php code blocks in astro source and build output, run this manually if the build failes before this point
```pwsh
php-uncomment:5
```
- node Build-Configs/astro.uncomment-php.mjs

node script to rename output .html files to .phtml
```pwsh
rename:6
```
- node Build-Configs/phtml.rename.mjs

generate webp images
```pwsh
generate-webp:7
```
- node Build-Configs/images.mjs

copy contents of assets folder to build dir
```pwsh
copy-assets:8
```
- node Build-Configs/assets.mjs

copy source js to build js dir
```pwsh
js:9
```
- node Build-Configs/js.mjs

compile type script to outdir
```pwsh
ts:10
```
- npx tsc

generate css from scss
```pwsh
css-compile:11
```
- sass --style expanded --load-path=\node_modules\--source-map --embed-sources --no-error-css sourceCode/css/:Distribution-Build-Output/data/css/

copy .php files from sourcecode/html to build dir
```pwsh
copy-php:12
```
- node ./Build-Configs/php-files.mjs


