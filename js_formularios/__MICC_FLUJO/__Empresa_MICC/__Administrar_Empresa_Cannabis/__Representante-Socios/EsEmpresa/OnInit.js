try{
    if(typeof(EMPRESA) != "undefined" ){
        if(EMPRESA.GetValue().toString()=="true"){
            FECHAEXPEDICION.SetEnabled(false);
            LUGAREXPEDICION.SetEnabled(false);
            FECHANACIMIENTO.SetEnabled(false);
            LUGARNACIMIENTO.SetEnabled(false);
            APELLIDO.SetEnabled(false);
            FECHAEXPEDICION.SetText("");
            LUGAREXPEDICION.SetText("");
            FECHANACIMIENTO.SetText("");
            LUGARNACIMIENTO.SetText("");
            APELLIDO.SetText("");
        }else{
            FECHAEXPEDICION.SetEnabled(true);
            LUGAREXPEDICION.SetEnabled(true);
            FECHANACIMIENTO.SetEnabled(true);
            LUGARNACIMIENTO.SetEnabled(true);
            APELLIDO.SetEnabled(true);
        }
    }
}catch(e){
    alert("Error Java: " + e);
}