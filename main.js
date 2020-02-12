function ocultar1() {
    var x = document.getElementById("css");
    var y = document.getElementById("cssresp");
    var z = document.getElementById("jsresp");
    var p = document.getElementById("htmlresp");
    if (y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
function ocultar2() {
    var x = document.getElementById("html");
    var y = document.getElementById("htmlresp")
    var z = document.getElementById("jsresp");
    if (y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
function ocultar3() {
    var x = document.getElementById("js");
    var y = document.getElementById("jsresp")
    if (y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}


function alerta(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var tlf = document.getElementById("tlf");
    var message = document.getElementById("message");
    if (name == null || valor.length == 0 || /^\s+$/.test(name)){
        return false;
    }
    else if (email == null || valor.length == 0 || /^\s+$/.test(email)){
        return false;
    }
    else if(tlf == null || valor.length == 0 || /^\s+$/.test(tlf)){
        return false;
    }
    else if (message == null || valor.length == 0 || /^\s+$/.test(message)){
        return false;
    }
    else{
        return true;
    }
}

function error(){
  if (alerta()=true){
    alert('Debe llenar todos los campos');
  }
}

ocultar1();
ocultar2();
ocultar3();
error();