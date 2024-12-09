<?php

$page_descriptions = [
    '/index' => 'This is a description for the index page.',
    '/' => 'This is a description for the home page.',
    '/features/index' => 'This is a description for the features index page.',
    '/features/' => 'This is a description for the features page.',
];

$path = strtok($_SERVER['REQUEST_URI'], '?');
$description = $page_descriptions[$path] ?? 'description error.';

?>
<meta name="description" content="<?php echo htmlspecialchars($description); ?>">
<meta property="og:description" content="<?php echo htmlspecialchars($description); ?>">