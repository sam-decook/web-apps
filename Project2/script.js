let plan = {
  name: "Whatever you want really",
  catalogYear: "2020-2021",
  major: "Bachelor of Science in Computer Engineering",
  minor: "Bible",
  studentName: "John Doe",
  currentSemester: "Fall 2022",
  arrayOfCourseObjs: [
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
    }
  ],
};

function sortCourses(courseObj){
    const organizedCourses = {};

    courseObj.forEach((course) => {
        if (!organizedCourses[course.year]) {
             organizedCourses[course.year] = {};
        }
        if (!organizedCourses[course.year][course.term]) {
             organizedCourses[course.year][course.term] = [];
        }
        organizedCourses[course.year][course.term].push({
            courseDesignator: course.courseDesignator,
            courseName: course.courseName,
        });
    });

    return organizedCourses;
}

//Course[{}] => Year[Term[Course[{}]]]

// Pre-build years with
// - 4 years, with each year having
//   - Fall, Spring, and Summer semesters
// Loop through courses, putting them in the correct term
function org(courses) {
    // Find earliest year
    let startYear = courses[0].year;
    courses.forEach(course => {
        if (course.year < startYear) {
            startYear = course.year;
        }
    });

    let years = [
        {
            year: startYear,
            terms: [
                { semester: "Fall", courses: [], },
                { semester: "Spring", courses: [], },
                { semester: "Summer", couses: [] }
            ]
        },
        {
            year: startYear + 1,
            terms: [
                { semester: "Fall", courses: [], },
                { semester: "Spring", courses: [], },
                { semester: "Summer", couses: [] }
            ]
        },
        {
            year: startYear + 2,
            terms: [
                { semester: "Fall", courses: [], },
                { semester: "Spring", courses: [], },
                { semester: "Summer", couses: [] }
            ]
        },
        {
            year: startYear + 3,
            terms: [
                { semester: "Fall", courses: [], },
                { semester: "Spring", courses: [], },
                { semester: "Summer", couses: [] }
            ]
        }
    ];

    courses.forEach(course => {
        let year = years[course.year];
        if (course.term != "Fall") {
            year -= 1;
        }

        console.log(course.year);
        console.log(course.term);

        year.terms.forEach(term => {
            if (course.term === term.semester) {
                term.courses.push(course);
            }
        });
    });
}

// Assumes the courses are in order
function organizeCourses(courses) {
  let years = [];
  let currYear = courses[0].year;
  let year = {};
  let currTerm = courses[0].term;
  let term = {};

  courses.forEach((course) => {
    if (currYear != course.year) {
      years.push(year);
      currYear = course.year;
      year = {};
    }
    if (currTerm != course.term) {
      year.push(term);
      currTerm = course.term;
      term = {};
    }
    term.push(course);
  });

  return years;
}

function renderPlan() {
    let elem = document.querySelector(".plan-grid");
  
    // Assuming organizeCoursesByYearAndTerm is the function that organizes the courses
    let organizedCourses = sortCourses(plan.arrayOfCourseObjs);
  
    // Iterate through years
    Object.keys(organizedCourses).forEach(year => {
      // Iterate through terms within each year
      Object.keys(organizedCourses[year]).forEach(term => {
        const semesterDiv = document.createElement("div");
        semesterDiv.classList.add("semester");
        semesterDiv.id = `${term.toLowerCase()}${year}`;
  
        const heading = document.createElement("h3");
        heading.textContent = `${term} ${year}`;
        semesterDiv.appendChild(heading);
  
        // Iterate through courses within each term
        organizedCourses[year][term].forEach(course => {
          const courseParagraph = document.createElement("p");
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

document.addEventListener("DOMContentLoaded", renderPlan);
