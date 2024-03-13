<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $server = "james.cedarville.edu";    
    $username = "cs3220_sp24";           
    $password = "OqagokbAg9DzKZGb";      
    $database = "cs3220_sp24";           

    $conn = new mysqli($server, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully";

    $stmt = $conn->prepare("SELECT email, password FROM HMS_User WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $_POST["email"], $_POST["password"]);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $_SESSION["email"] = $row["email"];
        header("Location: ape.html");
        exit;
    } else {
        header("Location: login.html?error=invalid_credentials");
        exit;
    }

    $conn->close();
} else {
    header("Location: login.html");
    exit;
}
?>
