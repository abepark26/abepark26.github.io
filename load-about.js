window.onload=function() {
    $("#about-container").load("./about.html");
    $("#project-container").empty();
}

function load_about() {
    $("#about-container").load("./about.html");
    $("#project-container").empty();
}

function load_project() {
    $("#about-container").empty();
    $("#project-container").load("./project.html");
}