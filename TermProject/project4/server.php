<?php
header('Content-Type: application/json');

$server = "james.cedarville.edu";    
$username = "cs3220_sp24";           
$password = "OqagokbAg9DzKZGb";      
$database = "cs3220_sp24";           

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

$currentUserID = 1; 
$currentPlanID = 1; 
$year = 2023;

//getRequirements.php
$stmt = $conn->prepare("SELECT R.majorID, R.courseID, R.Category FROM HMS_Reqs R JOIN HMS_MajorPlan MP ON R.majorID = MP.majorID JOIN HMS_Plan P ON MP.planID = P.planID JOIN HMS_User U ON P.userID = U.userID WHERE U.userID = 1 AND MP.majorID = 0");
$stmt->execute();
$result = $stmt->get_result();

$requirements = [
    "categories" => [
        "Core" => ["courses" => []],
        "Electives" => ["courses" => []],
        "Cognates" => ["courses" => []],
        "GenEds" => ["courses" => []]
    ]
];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        switch ($row["Category"]) {
            case "Core":
                $requirements["categories"]["Core"]["courses"][] = $row["courseID"];
                break;
            case "Electives":
                $requirements["categories"]["Electives"]["courses"][] = $row["courseID"];
                break;
            case "Cognates":
                $requirements["categories"]["Cognates"]["courses"][] = $row["courseID"];
                break;
            case "Gen Eds":
                $requirements["categories"]["GenEds"]["courses"][] = $row["courseID"];
                break;
        }
    }
} else {
    $requirements = ["message" => "No results found"];
}

$stmt->close();

//plan.php

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

//catalog.php
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

//echo data back to client

echo json_encode([
    "requirements" => $requirements,
    "plan" => $planData,
    "catalog" => $catalog
], JSON_PRETTY_PRINT);

//close
$conn->close();