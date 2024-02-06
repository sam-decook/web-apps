let plan = {
  name: "Whatever you want really",
  catalogYear: "2020-2021",
  major: "Bachelor of Science in Computer Engineering",
  minor: "Bible",
  studentName: "John Doe",
  currentSemester: "Fall 2022",
  courses: [
    {
      term: "Spring",
      year: 2024,
      courseDesignator: "CS-3510",
      courseName: "Compiler Theory & Practice",
    },
    {
      term: "Fall",
      year: 2023,
      courseDesignator: "EGCP-2200",
      courseName: "Digital Systems",
    },
    {
      term: "Fall",
      year: 2020,
      courseDesignator: "MATH-1710",
      courseName: "Calculus I",
    },
    {
      term: "Spring",
      year: 2021,
      courseDesignator: "EGCP-3400",
      courseName: "Microcontrollers",
    },
    {
      term: "Fall",
      year: 2021,
      courseDesignator: "EGCP-2200",
      courseName: "Embedded Systems",
    },
    {
      term: "Fall",
      year: 2023,
      courseDesignator: "EGGN-4010",
      courseName: "Senior Seminar",
    },
    {
      term: "Spring",
      year: 2022,
      courseDesignator: "EGCP-2200",
      courseName: "Operating Systems",
    },
    {
      term: "Summer",
      year: 2022,
      courseDesignator: "EGCP-2270",
      courseName: "Java & Data Structures",
    },
    {
      term: "Fall",
      year: 2020,
      courseDesignator: "MATH-3220",
      courseName: "Discrete Mathematics",
    },
  ],
};

function renderPlan() {
  let elem = document.querySelector(".plan-grid");

  let organizedCourses = sortCourses(plan.courses);

  // Iterate through years
  Object.keys(organizedCourses).forEach((year) => {
    // Iterate through terms within each year
    Object.keys(organizedCourses[year]).forEach((term) => {
      const semesterDiv = document.createElement("div");
      semesterDiv.classList.add("semester");
      semesterDiv.setAttribute("ondragover", "onDragOver(event);");
      semesterDiv.setAttribute("ondragleave", "onDragLeave(event);");
      semesterDiv.setAttribute("ondrop", "onDrop(event);");
      semesterDiv.id = `${term.toLowerCase()}${year}`;

      const heading = document.createElement("h3");
      heading.textContent = `${term} ${year}`;
      semesterDiv.appendChild(heading);

      // Iterate through courses within each term. Create:
      // <p><span class="tag" draggable="true">EGCP-3223</span> Class 1</p>
      organizedCourses[year][term].forEach((course) => {
        const courseParagraph = document.createElement("p");
        courseParagraph.setAttribute("draggable", "true");
        courseParagraph.setAttribute("ondragstart", "onDragStart(event);")
        const courseSpan = document.createElement("span");
        courseSpan.classList.add("tag");
        courseSpan.textContent = course.courseDesignator;
        courseParagraph.appendChild(courseSpan);
        courseParagraph.append(` ${course.courseName}`);
        semesterDiv.appendChild(courseParagraph);
      });

      elem.appendChild(semesterDiv);
    });
  });
}

//Course[{}] => Year[Term[Course[{}]]]
function sortCourses(courseObj) {
  const organizedCourses = {};
  const terms = ["Fall", "Spring", "Summer"];
  courseObj.forEach((course) => {
    if (!organizedCourses[course.year]) {
      organizedCourses[course.year] = {};
      terms.forEach((term) => {
        organizedCourses[course.year][term] = [];
      });
    }
    organizedCourses[course.year][course.term].push({
      courseDesignator: course.courseDesignator,
      courseName: course.courseName,
    });
  });
  return organizedCourses;
}

document.addEventListener("DOMContentLoaded", renderPlan);
