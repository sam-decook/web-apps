<?php
$server = "james.cedarville.edu";    
$username = "cs3220_sp24";           
$password = "OqagokbAg9DzKZGb";      
$database = "cs3220_sp24";           

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$currentUserID = 1; 
$currentPlanID = 1; 

$userQuery = "SELECT full_name FROM HMS_User WHERE userID = $currentUserID";
$userResult = mysqli_query($conn, $userQuery);
$userRow = mysqli_fetch_assoc($userResult);
$studentName = $userRow['full_name'];


$planQuery = "SELECT p.name AS planName, mp.majorID AS majorID
              FROM HMS_Plan AS p 
              INNER JOIN HMS_MajorPlan AS mp ON p.planID = mp.planID 
              WHERE p.planID = $currentPlanID";

$planResult = mysqli_query($conn, $planQuery);
$planRow = mysqli_fetch_assoc($planResult);
$planName = $planRow['planName'];
$majorID = $planRow['majorID'];


$majorQuery = "SELECT Major FROM HMS_Major WHERE majorID = $majorID";
$majorResult = mysqli_query($conn, $majorQuery);
$majorRow = mysqli_fetch_assoc($majorResult);
$majorName = $majorRow['Major'];


$currentYear = date("Y");
$currentMonth = date("n");
$currentTerm = '';

if ($currentMonth >= 1 && $currentMonth <= 5) {
    $currentTerm = "Spring";
} elseif ($currentMonth == 6 || $currentMonth == 7) {
    $currentTerm = "Summer";
} else {
    $currentTerm = "Fall";
}


$coursesQuery = "SELECT CourseID, yearTaken, termTaken FROM HMS_PlanCourses WHERE planID = $currentPlanID";
$coursesResult = mysqli_query($conn, $coursesQuery);
$courses = array();
while ($courseRow = mysqli_fetch_assoc($coursesResult)) {
    $courseID = $courseRow['CourseID'];
    $yearTaken = $courseRow['yearTaken'];
    $termTaken = $courseRow['termTaken'];
    
    $courses[$courseID] = array(
        'id' => $courseID,
        'year' => $yearTaken,
        'term' => $termTaken
    );
}

$planData = array(
    'student' => $studentName,
    'name' => $planName,
    'major' => $majorName,
    'currYear' => $currentYear,
    'currTerm' => $currentTerm,
    'courses' => $courses
);


echo json_encode($planData, JSON_PRETTY_PRINT);

mysqli_close($conn);

