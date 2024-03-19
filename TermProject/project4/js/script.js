let plan = {};
let catalog = {};
let requirements = {};
let planNames = [];
let planIDs = [];

fetch("/~medeiro/TermProject/project4/server.php")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    catalog = data.catalog;
    requirements = data.requirements;
    plan = data.plan;
    planNames = data.planNames;
    planIDs = data.planIDs;

    renderPlan();
    renderCourseFinder();
    renderReqs();
    renderManagePlans();

  })
  .catch(error => console.error("Request failed: ", error));


  function renderManagePlans() {
    let $subMenu = $(".submenu-content");
    $subMenu.html("");
    
    for (let i = 0; i < planNames.length; i++) {
      let $a = $(`<a href="#" onclick="renderAgain(${planIDs[i]})">${planNames[i]}</a>`);
      $subMenu.append($a);
    }
  }

  function renderAgain(planID) {
    //let formData = new FormData();
    //formData.append('planID', planID);
    
    fetch(`/~medeiro/TermProject/project4/changePlan.php`, {
      method: "POST",
      body: JSON.stringify({planID: planID}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {

        console.log("HELLO WORLD HAHAHAHA");
        console.log(data);
        // requirements = data.requirements;
        // plan = data.planData;
        // planNames = data.planNames;
        // planIDs = data.planIDs;
        // renderPlan();
      })
      .catch(error => console.error("Request failed: ", error));
  }
  
  


/* Plan */
// Give each course a unique ID for drag and drop
let id = 0;
let totalHours = 0.0;

function renderPlan() {
  $(".plan-info h2").text(plan.name);
  $("#nameHeader").html(`<b class="tag">Student</b> ${plan.student}`);
  $("#majorHeader").html(`<b class="tag">Major</b> ${plan.major}`);
  $("#catalogHeader").html(`<b class="tag">Catalog</b> ${catalog.year}`);

  let $elem = $(".plan-grid");

  let courses = organizeCourses(plan);

  Object.keys(courses).forEach(year => {

    Object.keys(courses[year]).forEach(term => {
      let trueYear = Number(year);
      if (term != "Fall") {
        trueYear += 1;
      }

      let semester = `${term.toLowerCase()}${trueYear}`;
      let dnd = "ondragover='onDragOver(event);' ondragleave='onDragLeave(event);' ondrop='onDrop(event);'";
      let $div = $(`<div id=${semester} class="semester" ${dnd}></div>`);

      let hours = 0.0;
      courses[year][term].forEach(course => {
        let name = catalog.courses[course].name;
        let $course = $(`<p id="${id}" draggable="true" ondragstart="onDragStart(event)"><span class="tag">${course}</span> ${name}</p>`);
        $div.append($course);
        hours += catalog.courses[course].credits;
        id += 1;
      });
      totalHours += hours;

      let $header = $(`<div class="semester-info"></div>`)
      $header.append($(`<h3>${term} ${trueYear}</h3>`))
      $header.append($(`<p><span class="tag">${hours}</span></p>`))

      $div.prepend($header)

      $elem.append($div);
    });
  });

  // update total hours
  $(".plan-info p").html(`<span class="tag">GPA</span> 3.7
  <span class="tag">Major GPA</span> 3.2
  <span class="tag">Total Hours</span> ${totalHours}`)
}

function organizeCourses(plan) {
  let courses = {};
  let terms = ["Fall", "Spring", "Summer"];

  Object.keys(plan.courses).forEach(courseId => {
    let course = plan.courses[courseId];
    let year = course.year;
    if (course.term != "Fall") {
      year -= 1;
    }

    if (!courses[year]) {
      courses[year] = {};
      terms.forEach(term => {
        courses[year][term] = [];
      });
    }

    courses[year][course.term].push(course.id);
  });

  return courses;
}

/* Requirements */
function getName(courseId) {
  return catalog.courses[courseId].name;
}

function renderReqs() {
  let $acc = $("#accordion");
  let sections = Object.keys(requirements.categories);

  sections.forEach(s => {
    let section = requirements.categories[s];
    let $header = $(`<h3>${s}</h3>`);
    let $div = $("<div></div>");
    let courses = section.courses;
    courses.forEach(course => {
      $div.append($(`<p draggable="true" ondragstart="onDragStart(event)"><span class="tag">${course}</span> ${getName(course)}</p>`));
    });

    $acc.append($header);
    $acc.append($div);
  });

  // JQuery accordion
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
    });
  });
}

/* Course Finder */
function renderCourseFinder() {
  let courses = catalog.courses;
  let tbody = $("#coursesBody");

  for (let courseId in courses) {
    let course = courses[courseId];
    let $newRow = $('<tr draggable="true" ondragstart="onDragStart(event)"></tr>');
    $newRow.append($(`<td>${course.credits}</td>`));
    $newRow.append($(`<td><span class="tag">${course.id}</span></td>`));
    $newRow.append($(`<td>${course.name}</td>`));
    $newRow.append($(`<td>${course.description}</td>`));
    tbody.append($newRow);
  }

  let number = $('#coursesBody tr').length;
  updateNumberOfEntries(number);
}

function updateNumberOfEntries(totalVisibleEntries) {
  if (totalVisibleEntries === 0) {
    $('#numEntries').text("No entries found");
    return;
  }
  $('#numEntries').text(`Showing 1 to ${totalVisibleEntries} of ${totalVisibleEntries} entries`);
}

function searchCourses() {
  let input = document.getElementById("searchBar").value.toUpperCase();
  let table = document.getElementById("coursesTable");
  let rows = table.getElementsByTagName("tr");
  let visibleCount = 0;

  for (let i = 1; i < rows.length; i++) {
    let matchFound = false;
    for (let j = 0; j < rows[i].cells.length; j++) {
      let cellText = rows[i].cells[j].innerText.toUpperCase();
      if (cellText.includes(input)) {
        matchFound = true;
        visibleCount++;
        break;
      }
    }
    if (matchFound) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
  updateNumberOfEntries(visibleCount);
}

function logout() {
  fetch("/~medeiro/TermProject/project4/logout.php", {
    method: "POST"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      window.location.href = "login.php";
    })
    .catch(error => console.error("Request failed: ", error));
}

function sortTable(column) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("coursesTable");
  switching = true;

  dir = "asc";

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

