
function valida_envia(){
    
    //Valida que el nombre y apellido no pueda estar vacio
    if (document.form.nombre.value.length==0)
    {
        alert("Escriba su nombre y apellido")
        document.form.nombre.focus()
        
    }
    
    //Valida el correo 
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length == 0))
    {
        alert("Introduzca una direccion de email valida");
        document.form.email.focus();
        
    } 
    else 
    {
        var c_email=true;
    }
    
    //Valida que el telefono contenga 9 digitos
    telefono = document.form.telefono.value;
    if( !(/^\d{9}$/.test(telefono)) ) 
    {
        alert("Tiene que escribir un telefono de 9 digitos");
        document.form.telefono.focus();

    }
}    
    //Cuenta la cantidad de caracteres usados en la consulta
    function countChars(obj){
        var maxLength = 1000;
        var strLength = obj.value.length;
        var charRemain = (maxLength - strLength);
        
        if(charRemain < 0){
            document.getElementById("charNum").innerHTML = '<span style="color: red;">Ha excedido el limite de caracteres</span>';
        }else{
            document.getElementById("charNum").innerHTML = charRemain;
        }
    }



