<?php
header('Content-Type: application/json');

$servername = "james.cedarville.edu";
$username = "cs3220_sp24";
$password = "OqagokbAg9DzKZGb";
$dbname = "cs3220_sp24";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

$stmt = $conn->prepare("SELECT R.majorID, R.courseID, R.Category FROM HMS_Reqs R JOIN HMS_MajorPlan MP ON R.majorID = MP.majorID JOIN HMS_Plan P ON MP.planID = P.planID JOIN HMS_User U ON P.userID = U.userID
WHERE U.userID = 1 AND MP.majorID = 0");

$stmt->execute();

$result = $stmt->get_result();

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data = ["message" => "No results found"];
}

echo json_encode($data);

$stmt->close();
$conn->close();
