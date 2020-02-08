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