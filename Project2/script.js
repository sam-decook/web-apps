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
      courseDesignator: "MATH-3220",
      courseName: "Discrete Mathematics",
    },
    {
      term: "Fall",
      year: 2020,
      courseDesignator: "EGCP-1010",
      courseName: "Digital Logic Design",
    },
    {
      term: "Fall",
      year: 2020,
      courseDesignator: "CS-1210",
      courseName: "C++ Programming",
    },
    {
      term: "Spring",
      year: 2021,
      courseDesignator: "PHYS-2110",
      courseName: "Physics I",
    },
    {
      term: "Spring",
      year: 2021,
      courseDesignator: "MATH-1720",
      courseName: "Calculus II",
    },
    {
      term: "Spring",
      year: 2021,
      courseDesignator: "CS-1220",
      courseName: "Object Oriented Design with C++",
    },
    {
      term: "Fall",
      year: 2021,
      courseDesignator: "PHYS-2120",
      courseName: "Physics II",
    },
    {
      term: "Fall",
      year: 2021,
      courseDesignator: "CS-2210",
      courseName: "Data Structures using JAVA",
    },
    {
      term: "Spring",
      year: 2022,
      courseDesignator: "EGCP-3210",
      courseName: "Computer Architecture",
    },
    {
      term: "Spring",
      year: 2022,
      courseDesignator: "CS-3310",
      courseName: "Operating Systems",
    },
    {
      term: "Fall",
      year: 2022,
      courseDesignator: "CS-3410",
      courseName: "Algorithims",
    },
    {
      term: "Fall",
      year: 2022,
      courseDesignator: "CS-4710",
      courseName: "Computer Graphics",
    },
    {
      term: "Fall",
      year: 2022,
      courseDesignator: "COM-1100",
      courseName: "Speech",
    },
    {
      term: "Summer",
      year: 2022,
      courseDesignator: "ENG-1400",
      courseName: "Composition",
    },
    {
      term: "Summer",
      year: 2023,
      courseDesignator: "BTGE-3765",
      courseName: "Theology II",
    },
    {
      term: "Spring",
      year: 2023,
      courseDesignator: "EGCP-3010",
      courseName: "Advanced Digital Logic Design",
    },
    {
      term: "Spring",
      year: 2023,
      courseDesignator: "CS-3320",
      courseName: "Linux System Programming",
    },
    {
      term: "Fall",
      year: 2023,
      courseDesignator: "EGCP-4810",
      courseName: "Senior Design",
    },
    {
      term: "Fall",
      year: 2023,
      courseDesignator: "EGCP-4310",
      courseName: "Computer Networks",
    },
    {
      term: "Spring",
      year: 2024,
      courseDesignator: "CS-3220",
      courseName: "Web Apps",
    },
    {
      term: "Spring",
      year: 2024,
      courseDesignator: "CS-3610",
      courseName: "Database Organization and Design",
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
