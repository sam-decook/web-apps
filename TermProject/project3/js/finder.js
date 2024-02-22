document.addEventListener("DOMContentLoaded", renderCourseFinder);

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

  for (let i = 1; i < rows.length; i++){
    let matchFound = false;
    for (let j = 0; j < rows[i].cells.length; j++){
      let cellText = rows[i].cells[j].innerText.toUpperCase();
      if (cellText.includes(input)){
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