window.onload=function() {
    $("#about-container").load("/abepark26.github.io/about.html");
    $("#project-container").empty();
}

function load_about() {
    $("#about-container").load("/abepark26.github.io/about.html");
    $("#project-container").empty();
}

function load_project() {
    $("#about-container").empty();
    $("#project-container").load("/abepark26.github.io/project.html");
}