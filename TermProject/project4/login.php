<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APE Login Page</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<body>
    <div class="login-container">
        <h2>Welcome to the Academic Planning Environment</h2>
        <form id="login-form" action="login.php" method="POST">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <button class="btn" type="submit">Login</button>
            </div>
        </form>
    </div>
</body>

</html>
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

    $stmt = $conn->prepare("SELECT email, password FROM HMS_User WHERE email = ?");
    $stmt->bind_param("s", $_POST["email"]);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();

        if (password_verify($_POST["password"], $row["password"])) {
            $_SESSION["email"] = $row["email"];
            header("Location: ape.php");
            $conn->close();
            exit;
        }
    }

    header("Location: login.html?error=invalid_credentials");
    $conn->close();
    exit;
}
?>