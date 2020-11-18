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

function iniciar(){
    document.getElementById("btn").addEventListener("click",validarCampos,false)
}


function validarCampos(e){
   /* let var1=validarNombre();
    let var2=validarTelefono();
    let var3=validarDni();

    if(var3){
        alert(`datos cargados correctamente!!`);
    }*/

    if(validarDni() && validarNombre() && validarTelefono()){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}


function validarNombre(){
     let apto=false;

    var nombre=document.querySelector(".validar").value;

   
    if (nombre.length ==0) {
        alert("Complete con nombre y apellido");
    }else{
        apto=true;
    }

    return apto;
}


function validarDni(){
    let apto=false;

    var dni=document.querySelector(".validacionDni").value;

   
    if (dni.length <8 || dni.length>8) {
        alert("El dni debe contener 8 digitos numericos");
    }else{
        apto=true;
    }

    return apto;
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