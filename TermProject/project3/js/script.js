let plan = {
  "student": "joe",
  "name": "myPlan",
  "major": "Computer Science",
  "currYear": 2022,
  "currTerm": "Spring",
  "courses": {
    "CS-1210": {
      "id": "CS-1210",
      "year": 2021,
      "term": "Fall"
    },
    "MATH-1710": {
      "id": "MATH-1710",
      "year": 2022,
      "term": "Spring"
    },
    "EGCP-1010": {
      "id": "EGCP-1010",
      "year": 2021,
      "term": "Fall"
    },
    "CS-1220": {
      "id": "CS-1220",
      "year": 2022,
      "term": "Spring"
    },
    "BTGE-1725": {
      "id": "BTGE-1725",
      "year": 2022,
      "term": "Spring"
    },
    "PHYS-2110": {
      "id": "PHYS-2110",
      "year": 2022,
      "term": "Spring"
    },
    "CS-2210": {
      "id": "CS-2210",
      "year": 2022,
      "term": "Fall"
    },
    "PHYS-2120": {
      "id": "PHYS-2120",
      "year": 2022,
      "term": "Fall"
    },
    "CS-3310": {
      "id": "CS-3310",
      "year": 2023,
      "term": "Spring"
    },
    "CS-3350": {
      "id": "CS-3350",
      "year": 2023,
      "term": "Spring"
    },
    "MATH-2520": {
      "id": "MATH-2520",
      "year": 2023,
      "term": "Spring"
    },
    "EGCP-3210": {
      "id": "EGCP-3210",
      "year": 2023,
      "term": "Spring"
    },
    "CS-3410": {
      "id": "CS-3410",
      "year": 2023,
      "term": "Fall"
    },
    "EGCP-4310": {
      "id": "EGCP-4310",
      "year": 2023,
      "term": "Fall"
    },
    "CS-3610": {
      "id": "CS-3610",
      "year": 2024,
      "term": "Spring"
    },
    "CS-3220": {
      "id": "CS-3220",
      "year": 2024,
      "term": "Spring"
    },
    "CS-4810": {
      "id": "CS-4810",
      "year": 2024,
      "term": "Fall"
    },
    "EGGN-4010": {
      "id": "EGGN-4010",
      "year": 2024,
      "term": "Fall"
    },
    "EGGN-3110": {
      "id": "EGGN-3110",
      "year": 2025,
      "term": "Spring"
    },
    "CS-3510": {
      "id": "CS-3510",
      "year": 2025,
      "term": "Spring"
    }
  },
  "catYear": 2021
};
let catalog = {
  "year": 2021,
  "courses": {
    "CS-1210": {
      "id": "CS-1210",
      "name": "C++ Programming",
      "description": "Feeble effort to teach programming",
      "credits": 2
    },
    "CS-1220": {
      "id": "CS-1220",
      "name": "Object-Oriented DesignD",
      "description": "Why do we still teach C++",
      "credits": 3
    },
    "CS-2210": {
      "id": "CS-2210",
      "name": "Data Structures Using Java",
      "description": "What an awesome prof!!!!",
      "credits": 3
    },
    "CS-3210": {
      "id": "CS-3210",
      "name": "Programming Language Survey",
      "description": "Three cheers for Prof Dude",
      "credits": 3
    },
    "CS-3220": {
      "id": "CS-3220",
      "name": "Web Applicationss",
      "description": "Who won the Medal of Honor at Gettysburg",
      "credits": 3
    },
    "CS-3310": {
      "id": "CS-3310",
      "name": "Operating Systems",
      "description": "Forget Windows; Let's do Linux!",
      "credits": 3
    },
    "CS-3350": {
      "id": "CS-3350",
      "name": "Foundations of Computer Security",
      "description": "Authentication",
      "credits": 3
    },
    "CS-3410": {
      "id": "CS-3410",
      "name": "Algorithms",
      "description": "The heart of Computer Science",
      "credits": 3
    },
    "CS-3510": {
      "id": "CS-3510",
      "name": "Compiler Theory & Practice",
      "description": "The BEST!  Way Cool!",
      "credits": 3
    },
    "CS-3610": {
      "id": "CS-3610",
      "name": "Database Organization & Design",
      "description": "What's a left join?",
      "credits": 3
    },
    "CS-4410": {
      "id": "CS-4410",
      "name": "Parallel Computing",
      "description": "Impossible",
      "credits": 3
    },
    "CS-4430": {
      "id": "CS-4430",
      "name": "Machine Learning for Intelligent Agents",
      "description": "AI",
      "credits": 3
    },
    "CS-4710": {
      "id": "CS-4710",
      "name": "Computer Graphics",
      "description": "Just games",
      "credits": 3
    },
    "CS-4730": {
      "id": "CS-4730",
      "name": "Virtual Reality Applications",
      "description": "Is it real?",
      "credits": 3
    },
    "CS-4810": {
      "id": "CS-4810",
      "name": "Software Engineering I",
      "description": "Love Senior Design!",
      "credits": 3
    },
    "CS-4820": {
      "id": "CS-4820",
      "name": "Software Engineering II",
      "description": "To infinity and beyond",
      "credits": 4
    },
    "CY-1000": {
      "id": "CY-1000",
      "name": "Introduction to Cybersecurity",
      "description": "Attack!",
      "credits": 3
    },
    "CY-2310": {
      "id": "CY-2310",
      "name": "Cyber Forensics",
      "description": "Investigate!",
      "credits": 3
    },
    "CY-3320": {
      "id": "CY-3320",
      "name": "Linux System Programming",
      "description": "Control!",
      "credits": 3
    },
    "CY-3420": {
      "id": "CY-3420",
      "name": "Cyber Defense",
      "description": "Defend!",
      "credits": 3
    },
    "CY-4310": {
      "id": "CY-4310",
      "name": "Cyber Operations",
      "description": "Adversarial Mindset",
      "credits": 3
    },
    "CY-4330": {
      "id": "CY-4330",
      "name": "Software Security",
      "description": "buffer overflow",
      "credits": 3
    },
    "CY-4810": {
      "id": "CY-4810",
      "name": "Secure Software Engineering I",
      "description": "Love Senior Design!",
      "credits": 3
    },
    "CY-4820": {
      "id": "CY-4820",
      "name": "Secure Software Engineering II",
      "description": "To infinity and beyond",
      "credits": 4
    },
    "EGCP-1010": {
      "id": "EGCP-1010",
      "name": "Digital Logic Design",
      "description": "Cool course with AND, OR, and NOT",
      "credits": 3
    },
    "EGCP-3010": {
      "id": "EGCP-3010",
      "name": "Advanced Digital Logic Design",
      "description": "I AM ROBOT",
      "credits": 3
    },
    "EGCP-2120": {
      "id": "EGCP-2120",
      "name": "Microcontrollers",
      "description": "They are really tiny",
      "credits": 3
    },
    "EGCP-3210": {
      "id": "EGCP-3210",
      "name": "Computer Architecture",
      "description": "Build the Pipeline!",
      "credits": 3
    },
    "EGCP-4210": {
      "id": "EGCP-4210",
      "name": "Advanced Computer Architecture",
      "description": "We love Tomasulo",
      "credits": 3
    },
    "EGCP-4310": {
      "id": "EGCP-4310",
      "name": "Computer Networks",
      "description": "Networking is very importing for finding a job",
      "credits": 3
    },
    "EGGN-3110": {
      "id": "EGGN-3110",
      "name": "Professional Ethics",
      "description": "Politicians need to take this course!",
      "credits": 3
    },
    "EGGN-4010": {
      "id": "EGGN-4010",
      "name": "Senior Seminar",
      "description": "Wrong Major!",
      "credits": 0
    },
    "MATH-1710": {
      "id": "MATH-1710",
      "name": "Calculus I",
      "description": "A weedout course",
      "credits": 5
    },
    "MATH-1720": {
      "id": "MATH-1720",
      "name": "Calculus II",
      "description": "For the few who passed Calc I",
      "credits": 5
    },
    "MATH-2520": {
      "id": "MATH-2520",
      "name": "Discrete Math w/ Prob",
      "description": "We should always be discrete",
      "credits": 3
    },
    "MATH-3500": {
      "id": "MATH-3500",
      "name": "Number Theory",
      "description": "Why?",
      "credits": 3
    },
    "MATH-3610": {
      "id": "MATH-3610",
      "name": "Linear Algebra",
      "description": "As opposed to non-linear algegra?",
      "credits": 3
    },
    "MATH-3760": {
      "id": "MATH-3760",
      "name": "Numerical Analysis",
      "description": "Painful!",
      "credits": 3
    },
    "PHYS-2110": {
      "id": "PHYS-2110",
      "name": "General Physics I",
      "description": "Distance, Velocity, Acceleration",
      "credits": 4
    },
    "PHYS-2120": {
      "id": "PHYS-2120",
      "name": "General Physics II",
      "description": "Why do we take this again?",
      "credits": 4
    },
    "BTGE-1725": {
      "id": "BTGE-1725",
      "name": "The Bible and the Gospel",
      "description": "Truly why we are here",
      "credits": 3
    },
    "BTGE-2730": {
      "id": "BTGE-2730",
      "name": "Old Testament Literature",
      "description": "In the Beginning!",
      "credits": 3
    },
    "BTGE-2740": {
      "id": "BTGE-2740",
      "name": "New Testament Literature",
      "description": "In the Beginning Part 2!",
      "credits": 3
    },
    "BTGE-3755": {
      "id": "BTGE-3755",
      "name": "Theology I",
      "description": "Let's learn about God",
      "credits": 3
    },
    "BTGE-3765": {
      "id": "BTGE-3765",
      "name": "Theology II",
      "description": "Let's learn more about God",
      "credits": 3
    },
    "CHEM-1050": {
      "id": "CHEM-1050",
      "name": "Chemistry for Engineers",
      "description": "The lab is fun!",
      "credits": 3.5
    }
  }
};
let requirements = {
  "Core": {
    "courses": [
      "CS-1210",
      "CS-1220",
      "CS-2210",
      "CS-3210",
      "CS-3220",
      "CS-3310",
      "CS-3410",
      "CS-3510",
      "CS-3610",
      "CS-4810",
      "CS-4820",
      "CY-1000",
      "CY-3420",
      "EGCP-1010",
      "EGCP-3210",
      "EGCP-4310",
      "EGGN-3110",
      "EGGN-4010",
      "MATH-2520"
    ]
  },
  "Electives": {
    "courses": [
      "CY-3320",
      "CY-4310",
      "CY-4330",
      "CS-4430",
      "CS-4710",
      "CS-4730",
      "EGCP-3010",
      "EGCP-4210",
      "MATH-3610"
    ]
  },
  "Cognates": {
    "courses": [
      "CHEM-1050",
      "MATH-1710",
      "MATH-1720",
      "PHYS-2110",
      "PHYS-2120"
    ]
  },
  "GenEds": {
    "courses": [
      "BTGE-1725",
      "BTGE-2730",
      "BTGE-2740",
      "BTGE-3755",
      "BTGE-3765"
    ]
  }
};

// fetch("~knoerr/cs3220/termProject/getCombined.php")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok 1");
//     }
//     return response.json();
//   })
//   .then(data => {
//     plan = data.plan;
//     catalog = data.catalog;
//   })
//   .catch(error => console.error("Request failed: ", error));

//   fetch("~knoerr/cs3220/termProject/getCombined.php")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok 1");
//     }
//     return response.json();
//   })
//   .then(data => {
//     requirements = data
//   })
//   .catch(error => console.error("Request failed: ", error));


// let plan = {
//   name: "Whatever you want really",
//   catalogYear: "2020-2021",
//   major: "Bachelor of Science in Computer Engineering",
//   minor: "Bible",
//   studentName: "John Doe",
//   currentSemester: "Fall 2022",
//   courses: [
//     {
//       term: "Spring",
//       year: 2024,
//       courseDesignator: "CS-3510",
//       courseName: "Compiler Theory & Practice",
//     },
//     {
//       term: "Fall",
//       year: 2023,
//       courseDesignator: "EGCP-2200",
//       courseName: "Digital Systems",
//     },
//     {
//       term: "Fall",
//       year: 2020,
//       courseDesignator: "MATH-1710",
//       courseName: "Calculus I",
//     },
//     {
//       term: "Spring",
//       year: 2021,
//       courseDesignator: "EGCP-3400",
//       courseName: "Microcontrollers",
//     },
//     {
//       term: "Fall",
//       year: 2021,
//       courseDesignator: "EGCP-2200",
//       courseName: "Embedded Systems",
//     },
//     {
//       term: "Fall",
//       year: 2023,
//       courseDesignator: "EGGN-4010",
//       courseName: "Senior Seminar",
//     },
//     {
//       term: "Spring",
//       year: 2022,
//       courseDesignator: "MATH-3220",
//       courseName: "Discrete Mathematics",
//     },
//     {
//       term: "Fall",
//       year: 2020,
//       courseDesignator: "EGCP-1010",
//       courseName: "Digital Logic Design",
//     },
//     {
//       term: "Fall",
//       year: 2020,
//       courseDesignator: "CS-1210",
//       courseName: "C++ Programming",
//     },
//     {
//       term: "Spring",
//       year: 2021,
//       courseDesignator: "PHYS-2110",
//       courseName: "Physics I",
//     },
//     {
//       term: "Spring",
//       year: 2021,
//       courseDesignator: "MATH-1720",
//       courseName: "Calculus II",
//     },
//     {
//       term: "Spring",
//       year: 2021,
//       courseDesignator: "CS-1220",
//       courseName: "Object Oriented Design with C++",
//     },
//     {
//       term: "Fall",
//       year: 2021,
//       courseDesignator: "PHYS-2120",
//       courseName: "Physics II",
//     },
//     {
//       term: "Fall",
//       year: 2021,
//       courseDesignator: "CS-2210",
//       courseName: "Data Structures using JAVA",
//     },
//     {
//       term: "Spring",
//       year: 2022,
//       courseDesignator: "EGCP-3210",
//       courseName: "Computer Architecture",
//     },
//     {
//       term: "Spring",
//       year: 2022,
//       courseDesignator: "CS-3310",
//       courseName: "Operating Systems",
//     },
//     {
//       term: "Fall",
//       year: 2022,
//       courseDesignator: "CS-3410",
//       courseName: "Algorithims",
//     },
//     {
//       term: "Fall",
//       year: 2022,
//       courseDesignator: "CS-4710",
//       courseName: "Computer Graphics",
//     },
//     {
//       term: "Fall",
//       year: 2022,
//       courseDesignator: "COM-1100",
//       courseName: "Speech",
//     },
//     {
//       term: "Summer",
//       year: 2022,
//       courseDesignator: "ENG-1400",
//       courseName: "Composition",
//     },
//     {
//       term: "Summer",
//       year: 2023,
//       courseDesignator: "BTGE-3765",
//       courseName: "Theology II",
//     },
//     {
//       term: "Spring",
//       year: 2023,
//       courseDesignator: "EGCP-3010",
//       courseName: "Advanced Digital Logic Design",
//     },
//     {
//       term: "Spring",
//       year: 2023,
//       courseDesignator: "CS-3320",
//       courseName: "Linux System Programming",
//     },
//     {
//       term: "Fall",
//       year: 2023,
//       courseDesignator: "EGCP-4810",
//       courseName: "Senior Design",
//     },
//     {
//       term: "Fall",
//       year: 2023,
//       courseDesignator: "EGCP-4310",
//       courseName: "Computer Networks",
//     },
//     {
//       term: "Spring",
//       year: 2024,
//       courseDesignator: "CS-3220",
//       courseName: "Web Apps",
//     },
//     {
//       term: "Spring",
//       year: 2024,
//       courseDesignator: "CS-3610",
//       courseName: "Database Organization and Design",
//     },
//   ],
// };

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

  courseObj.forEach(course => {
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
