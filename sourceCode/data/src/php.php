<?php

    // Initialize the session
    session_start();

    // Check if the user is logged in, otherwise redirect to login page
    function requireloggedin() {
        if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
            header("location: /auth/login.php");
            exit;
        }
    }

    /**
     * Finds a file in the data folder by traversing the directory tree.
     *
     * @param string $fileName The name of the file to search for.
     * @return string|null The absolute path of the file if found, or null if not found.
     */
    function includeDataSrc($fileName) {
        // Start from the current directory
        $currentDir = __DIR__;

        // Traverse the directory tree upwards until the root directory
        while ($currentDir !== false) {
            $possiblePath = $currentDir . '/data/src/' . $fileName;
            if (file_exists($possiblePath)) {
                return $possiblePath;  // File found, return its absolute path
            }
            $currentDir = dirname($currentDir); // Move up one directory level
        }

        // Return null if the file is not found
        return null;
    }

    require_once('global.php');

?>