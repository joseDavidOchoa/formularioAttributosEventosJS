try{
    if(typeof(EMPRESA) != "undefined"){
        if(EMPRESA.GetValue().toString()=="true"){
            FECHAEXPEDICION.SetEnabled(false);
            LUGAREXPEDICION.SetEnabled(false);
            FECHANACIMIENTO.SetEnabled(false);
            LUGARNACIMIENTO.SetEnabled(false);
            control_FECHANACIMIENTO.SetText('Fecha Nacimiento');
            control_LUGARNACIMIENTO.SetText('Lugar Nacimiento');
            //APELLIDO.SetEnabled(false);
            FECHAEXPEDICION.SetText("");
            LUGAREXPEDICION.SetText("");
            FECHANACIMIENTO.SetText("");
            LUGARNACIMIENTO.SetText("");
            APELLIDO.SetText("");
            control_APELLIDO.SetText('Representante(*)');
            control_NOMBREREPRESENTANTE.SetText('Razón Social(*)');
        }else{
            FECHAEXPEDICION.SetEnabled(true);
            LUGAREXPEDICION.SetEnabled(true);
            FECHANACIMIENTO.SetEnabled(true);
            LUGARNACIMIENTO.SetEnabled(true);
            control_FECHANACIMIENTO.SetText('Fecha Nacimiento (*)');
            control_LUGARNACIMIENTO.SetText('Lugar Nacimiento (*)');
            APELLIDO.SetEnabled(true);    control_APELLIDO.SetText('Apellido(*)');
            control_NOMBREREPRESENTANTE.SetText('Nombre(*)');
        }
    }
    if(s.GetChecked() && REPRESENTANTELEGAL.GetChecked()){
        //alert('Una empresa no puede ser representante legal');
        //s.SetChecked(false);
    }
}catch(e){
    alert("Error Java: " + e);
}