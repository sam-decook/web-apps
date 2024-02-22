function getName(courseId) {
    return catalog.courses[courseId].name;
}

document.addEventListener("DOMContentLoaded", renderReqs);

function renderReqs() {
    let $acc = $("#accordion");

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