// Make requirements HTML:
// <h3> Section </h3>
// <div>
//   content...
// </div>
// ...

document.addEventListener("DOMContentLoaded", renderReqs);

function renderReqs() {
    let acc = $("#accordion");
    console.log(acc);

    header = $("h3");
    console.log(header);
    header.text("Core");
    console.log(header);
    div = $("div");

    Object.values(reqs.Core.courses).forEach((course) => {
    let span = $("span");
    span.addClass("tag");
    span.html(course);
    let p = $("p").append(span);
    div.append(p);
    });
    acc.append(header);
    acc.append(div);

    // JQuery accordion
    $(function () {
    $("#accordion").accordion({
        collapsible: true,
    });
    });
}
