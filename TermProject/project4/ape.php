<?php
if (!isset($_COOKIE["PHPSESSID"])) {
  header("Location: login.php");
}
// header("Cache-Control: no-cache, no-store, must-revalidate"); 
// header("Pragma: no-cache");
// header("Expires: 0");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Academic Planning Environment</title>
  <link rel="stylesheet" href="css/main.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script src="js/script.js"></script>
  <script src="js/dragndrop.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<body>
  <!-- The header across the top -->
  <header>
    <div id="personal">
      <p id="nameHeader"><b class="tag">Student</b></p>
      <p id="majorHeader"><b class="tag">Major</b></p>
      <p id="catalogHeader"><b class="tag">Catalog</b></p>
      <p id="minorHeader"><b class="tag">Minor</b> Bible</p>
    </div>
    <h1>ACADEMIC PLANNING</h1>


    <div class="controls">
      <div class="custom-dropdown">
        <button class="dropbtn">Options</button>
        <div class="dropdown-content">
          <a href="#">Create Plan</a>
          <div class="submenu">
            <a href="#" class="submenu-title">Manage Plans</a>
            <div class="submenu-content">
            </div>
          </div>
          <a href="#">Print</a>
          <a href="#">Show Grades</a>
          <a href="#">Waivers</a>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Report Bug</a>
        </div>
      </div>
      <button class="btn" onclick="logout()">Log out</button>
      <button class="btn">Save</button>
    </div>
  </header>
  <main>
    <!-- The requirements section down the left-hand side -->
    <div id="requirements">
      <h2>Requirements</h2>
      <div id="accordion">
      </div>
    </div>

    <!-- The main section containing the scheduled plan -->
    <div class="plan">
      <div class="plan-info">
        <h2>Academic Plan</h2>
        <p>
          <span class="tag">GPA</span> 3.7
          <span class="tag">Major GPA</span> 3.2
          <span class="tag">Total Hours</span> 137
        </p>
      </div>
      <div class="plan-grid">
      </div>
    </div>

    <!-- The section containing the links to our respective homepages -->
    <div id="homepages">
      <h2>Home Pages</h2>
      <a class="btn" href="/~deCook/cs3220.html" target="_blank">Sam</a>
      <a class="btn" href="/~medeiro/cs3220.html" target="_blank">Henrique</a>
      <a class="btn" href="/~brugel/cs3220.html" target="_blank">Matt</a>
      <a class="btn" href="http://judah.cedarville.edu" target="_blank">Home</a>
    </div>

    <!-- The section containing the course finder -->
    <div class="course-finder">
    <div id="courseHeader">
        <h2>Course Finder</h2>
        <input type="text" id="searchBar" onkeyup="searchCourses()" name="courseSearch">
        <p id="numEntries"></p>
        <div class="btn" id="delete-button" ondragover='onDragOver(event);' ondragleave='onDragLeave(event);' ondrop='deleteCourse(event);'>
          <img src="delete-button.png" alt="delete icon" width="30" height="30">
          <p><b>Delete</b></p>
        </div>
      </div>
      <table id="coursesTable">
        <thead>
          <tr>
            <th onclick="sortTable(0)">Credits</th>
            <th onclick="sortTable(1)">Course ID</th>
            <th onclick="sortTable(2)">Course Name</th>
            <th onclick="sortTable(3)">Description</th>
          </tr>
        </thead>
        <tbody id="coursesBody">
        </tbody>
      </table>
    </div>
  </main>
</body>

</html>