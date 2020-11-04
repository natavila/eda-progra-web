function mostrarPaises(){
    const menuPaises=document.querySelector(".paisesVisitados");
    menuPaises.removeAttribute("hidden");
}

function ocultarPaises(){
    const menuPaises=document.querySelector(".paisesVisitados");
    menuPaises.setAttribute("hidden", "true");
}

function mostrarDireccion(){
    const menuDireccion=document.querySelector(".direccion");
    menuDireccion.removeAttribute("hidden");
}

function ocultarDireccion(){
    const menuDireccion=document.querySelector(".direccion");
    menuDireccion.setAttribute("hidden", "true");
}



function mostrarSintomas(){
    let opcioneSi= document.getElementsByClassName("opcionSi");
    let contador= 0;

    for (let i = 0; i < opcioneSi.length; i++) {
        let valor=opcioneSi[i].value;
        if (valor == "si" && opcioneSi[i].checked) {
            contador++;
        }
        
    }
   
    let mensaje=`total de sintomas ${contador}`;
    alert(mensaje);
}




