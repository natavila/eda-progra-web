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
   
    let mensaje=`El formulario fue completado correctamente. ${contador} síntomas de COVID-19 fueron registrados`;
    alert(mensaje);
}

function validarCampos(){
    let var1=validacionNombre();
    let var2=validarTelefono();

    if(var2){
        alert(`datos cargados correctamente!!`);
    }
}

function validacionNombre(){
    let elements=document.getElementById("nya");

    let c=elements.getAttribute("required");
    
    if (c == null) {
        elements.setAttribute("required", "true");
    }
    
}

function validarTelefono(){
    let apto=false;

    var telefono=document.querySelector(".validarTelefono").value;
    let separador= "";

    telefono = telefono.split(separador);

    let checkGuion=false;

    if(telefono[4] == "-"){
          checkGuion=true;         
    }      
   
    if (telefono.length != 9 || !checkGuion) {
        alert("El telefono debe contener 8 caracteres y un Guion");
    }else{
        apto=true;
    }

    return apto;
}