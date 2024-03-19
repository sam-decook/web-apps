<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APE Registration Page</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body>
<div class="login-container">
    <h2>Register for the Academic Planning Environment</h2>
    <form id="login-form" action="register.php" method="POST">
        <div class="form-group">
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" required>
        </div>
        <div class="form-group">
            <label for="major">Major:</label>
            <input type="text" id="major" name="major" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
            <button class="btn" type="submit" name="register">Register</button>
        </div>
    </form>
</div>
</body>
</html>


<?php

if(isset($_POST['register'])) {
    $server = "james.cedarville.edu";    
    $username = "cs3220_sp24";           
    $password = "OqagokbAg9DzKZGb";      
    $database = "cs3220_sp24";
    
    $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);
    

    if(!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    

    $full_name = $_POST['full-name'];
    $major = $_POST['major'];
    $email = $_POST['email'];
    $password = $_POST['password']; 
    
 
    $sql = "INSERT INTO HMS_User (full_name, email, password) VALUES ('$full_name', '$email', '$password')";
    
    if(mysqli_query($conn, $sql)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    

    mysqli_close($conn);
}
?>
