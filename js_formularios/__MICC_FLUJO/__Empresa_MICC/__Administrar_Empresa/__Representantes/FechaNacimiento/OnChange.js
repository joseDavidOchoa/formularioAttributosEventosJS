try{
    var fechaNacim= FECHANACIMIENTO.GetValue();
    var fecha= FECHAEXPEDICION.GetValue();
    if (fecha< fechaNacim){
        FECHAEXPEDICION.SetValue( fechaNacim);
    }
}catch(e){
    alert("Error Java: " + e);
} 