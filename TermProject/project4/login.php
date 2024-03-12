<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valid_email = "user@example.com";
    $valid_password = "password";

    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($email === $valid_email && $password === $valid_password) {
        $_SESSION["email"] = $email;
        header("Location: ape.html");
        exit;
    } else {
        header("Location: login.html?error=invalid_credentials");
        exit;
    }
} else {
    header("Location: login.html");
    exit;
}