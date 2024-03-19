// Takes a string of HTML and returns the text inside of a span tag
function getCourseId(html) {
    let pieces = html.split("<");
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].includes("span")) {
            return pieces[i].split(">")[1];
        }
    }
}

function getHours(courseTag) {
    return Number(catalog.courses[courseTag].credits);
}

function onDragStart(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    let tag = getCourseId(event.target.innerHTML);
    
    if (event.target.hasAttribute("id")) {
        event.dataTransfer.setData("text", event.target.id);

        // Fade out paragraph, reduce credits
        let hours = getHours(tag);
        let $currSemester = $("#" + event.target.id + " span").closest(".semester");
        let semHours = $currSemester.find(".semester-info span").text();
        $currSemester.find(".semester-info span").text(Number(semHours) - hours);
        // console.log(semHours);

    } else {
        event.dataTransfer.setData("text", tag);
    }
}

function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    event.currentTarget.style.backgroundColor = "var(--primary)";
}

function onDragLeave(event) {
    event.preventDefault();
    event.currentTarget.style.backgroundColor = "white";
}

function onDrop(event) {
    let $course;
    let data = event.dataTransfer.getData("text");
    let hours = 0;

    if (isNaN(Number(data))) {
        let tag = event.dataTransfer.getData("text");
        let name = catalog.courses[tag].name;
        
        $course = $(`<p id="${id}" draggable="true" ondragstart="onDragStart(event)"><span class="tag">${tag}</span> ${name}</p>`);
        id += 1;

        hours = getHours(tag);
        totalHours += hours;
        
        $(".plan-info p").html(`<span class="tag">GPA</span> 3.7
            <span class="tag">Major GPA</span> 3.2
            <span class="tag">Total Hours</span> ${totalHours}`)

    } else {
        let courseId = event.dataTransfer.getData("text");
        $course = $("#" + courseId).detach();

        let tag = getCourseId($course.html());
        hours = getHours(tag);
    }

    event.dataTransfer.dropEffect = "move";
    event.currentTarget.style.backgroundColor = "white";
    
    let $current = $("#" + event.currentTarget.id);
    $current.append($course);

    let currHours = $("#" + event.currentTarget.id + " div p span").text();
    $("#" + event.currentTarget.id + " div p span").text(Number(currHours) + hours);
}

function deleteCourse(event) {
    event.dataTransfer.dropEffect = "move";

    let courseId = event.dataTransfer.getData("text");
    $course = $("#" + courseId).detach();
    let tag = getCourseId($course.html());
    hours = getHours(tag);
    totalHours -= hours;

    $(".plan-info p").html(`<span class="tag">GPA</span> 3.7
            <span class="tag">Major GPA</span> 3.2
            <span class="tag">Total Hours</span> ${totalHours}`)
}