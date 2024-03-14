<?php

$server = "james.cedarville.edu";    
$username = "cs3220_sp24";           
$password = "OqagokbAg9DzKZGb";      
$database = "cs3220_sp24";           

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$year = 2023;


$sql = "SELECT HMS_CatalogCourse.courseID, HMS_Courses.name, HMS_Courses.description, HMS_Courses.credits 
        FROM HMS_CatalogCourse 
        JOIN HMS_Courses ON HMS_CatalogCourse.courseID = HMS_Courses.courseID 
        WHERE HMS_CatalogCourse.year = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $year);
$stmt->execute();
$result = $stmt->get_result();

$catalog = array(
    'year' => $year,
    'courses' => array()
);

while($row = $result->fetch_assoc()) {
    $catalog['courses'][$row['courseID']] = array(
        'id' => $row['courseID'],
        'name' => $row['name'],
        'description' => $row['description'],
        'credits' => $row['credits']
    );
}


$stmt->close();

$conn->close();

echo json_encode($catalog, JSON_PRETTY_PRINT);
