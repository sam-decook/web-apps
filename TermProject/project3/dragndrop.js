function onDragStart(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.id);
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
    let courseId = event.dataTransfer.getData("text");
    let course = document.getElementById(courseId);

    event.dataTransfer.dropEffect = "move";
    event.currentTarget.style.backgroundColor = "white";
    
    event.currentTarget.insertBefore(course, null);
}