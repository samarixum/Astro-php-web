
<?php
    $host = "localhost";
    $username = "useridentifingstring";
    $user_pass = "totallysupersecretmegastrongultrasecurepassword@69";
    $database_in_use = "perfectdatabasename";

    /* Attempt to connect to MySQL database */
    $link = mysqli_connect($host, $username, $user_pass, $database_in_use);
    $mysqli = new mysqli($host, $username, $user_pass, $database_in_use);

    // Check connection
    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
?>
