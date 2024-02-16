console.log("Getting combined")

fetch("/~knoerr/cs3220/termProject/getCombined.php")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

console.log("Getting requirements")

fetch("/~knoerr/cs3220/termProject/getRequirements.php")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

console.log("Done")

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

// Give each course a unique ID for drag and drop
let courseId = 0;

function renderPlan() {
  let elem = document.querySelector(".plan-grid");

  let organizedCourses = sortCourses(plan.courses);

  Object.keys(organizedCourses).forEach((year) => {
    Object.keys(organizedCourses[year]).forEach((term) => {
      let trueYear = Number(year);
      if (term != "Fall") {
        trueYear += 1;
      }

      let semesterDiv = document.createElement("div");
      semesterDiv.classList.add("semester");
      semesterDiv.setAttribute("ondragover", "onDragOver(event);");
      semesterDiv.setAttribute("ondragleave", "onDragLeave(event);");
      semesterDiv.setAttribute("ondrop", "onDrop(event);");
      semesterDiv.id = `${term.toLowerCase()}${trueYear}`;

      const heading = document.createElement("h3");
      heading.textContent = `${term} ${trueYear}`;
      semesterDiv.appendChild(heading);

      organizedCourses[year][term].forEach((course) => {
        let courseParagraph = document.createElement("p");
        courseParagraph.setAttribute("draggable", "true");
        courseParagraph.setAttribute("ondragstart", "onDragStart(event);");
        courseParagraph.setAttribute("id", String(courseId));
        courseId += 1;

        let courseSpan = document.createElement("span");
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
  let organizedCourses = {};
  const terms = ["Fall", "Spring", "Summer"];

  courseObj.forEach((course) => {
    let year = course.year;
    if (course.term != "Fall") {
      year -= 1;
    }

    if (!organizedCourses[year]) {
      organizedCourses[year] = {};
      terms.forEach((term) => {
        organizedCourses[year][term] = [];
      });
    }

    organizedCourses[year][course.term].push({
      courseDesignator: course.courseDesignator,
      courseName: course.courseName,
    });
  });

  return organizedCourses;
}

document.addEventListener("DOMContentLoaded", renderPlan);
