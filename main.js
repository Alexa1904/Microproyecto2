function ocultar1() {
    var x = document.getElementById("contenedor1");
    x.display="none";
}
function ocultar2() {
    var x = document.getElementById("contenedor2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function ocultar3() {
    var x = document.getElementById("contenedor3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
ocultar1();
ocultar2();
ocultar3();