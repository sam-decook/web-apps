let plan;
let catalog;
let requirements;

fetch("/~knoerr/cs3220/termProject/getRequirements.php")
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  requirements = data;
})
.catch(error => console.error("Request failed: ", error));

fetch("/~knoerr/cs3220/termProject/getCombined.php")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    plan = data.plan;
    catalog = data.catalog;
    renderPlan();
    renderCourseFinder();
    renderReqs();
  })
  .catch(error => console.error("Request failed: ", error));

/* Plan */
// Give each course a unique ID for drag and drop
let id = 0;

function renderPlan() {
  let $elem = $(".plan-grid");

  let courses = organizeCourses(plan);

  Object.keys(courses).forEach(year => {
    let trueYear = Number(year);

    Object.keys(courses[year]).forEach(term => {
      if (term != "Fall") {
        trueYear += 1;
      }

      let semester = `${term.toLowerCase()}${trueYear}`;
      let dnd = "ondragover='onDragOver(event);' ondragleave='onDragLeave(event);' ondrop='onDrop(event);'";
      let $div = $(`<div id=${semester} class="semester" ${dnd}></div>`);

      const heading = document.createElement("h3");
      heading.textContent = `${term} ${trueYear}`;
      $div.append(heading);

      courses[year][term].forEach(course => {
        let name = catalog.courses[course].name;
        let $course = $(`<p id="${id}" draggable="true" ondragstart="onDragStart(event)"><span class="tag">${course}</span> ${name}</p>`);
        id += 1;
        $div.append($course);
      });

      $elem.append($div);
    });
  });
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
  console.log(plan);

  let sections = Object.keys(requirements);
  sections.forEach(s => {
      let section = requirements[s];
      let $header = $(`<h3>${s}</h3>`);
      let $div = $("<div></div>");

      let courses = section.courses;
      courses.forEach(course => {
          $div.append($(`<p><span class="tag">${course}</span> ${getName(course)}</p>`));
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

  for (let courseId in courses){
    let course = courses[courseId];
    let $newRow = $('<tr></tr>');
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
  if(totalVisibleEntries === 0){
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
