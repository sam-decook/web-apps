function onDragStart(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/html", event.target.innerHTML);
}

function onDragOver(event) {
    event.preventDefault();
    event.currentTarget.style.backgroundColor = "var(--primary)";
    event.dataTransfer.dropEffect = "move";
}

function onDragLeave(event) {
    event.preventDefault();
    event.currentTarget.style.backgroundColor = "white";
}

function onDrop(event) {
    event.dataTransfer.dropEffect = "move";
    event.currentTarget.style.backgroundColor = "white";
    
    const course = document.createElement("p");
    course.setAttribute("draggable", "true");
    course.innerHTML = event.dataTransfer.getData("text/html");
    
    event.currentTarget.insertBefore(course, null);
    event.dataTransfer.clearData();
    course = "";
}