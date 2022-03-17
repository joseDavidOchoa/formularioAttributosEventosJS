try{
    if(s.GetChecked() && APODERADO.GetChecked()){
        alert('El representante y el apoderado son excluyentes.');
        s.SetChecked(false);
    }
    if(s.GetChecked() && EMPRESA.GetChecked()){
        //alert('Una empresa no puede ser representante legal');
        // s.SetChecked(false);
    }
    if (s.GetChecked() || SOCIO.GetChecked()){
        FECHANACIMIENTO.SetIsValid(false);
        LUGARNACIMIENTO.SetIsValid(false);
    }else{
        FECHANACIMIENTO.SetIsValid(true);
        LUGARNACIMIENTO.SetIsValid(true);
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}