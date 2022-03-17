try{
    if(!SOCIO.GetChecked() && !REPRESENTANTELEGAL.GetChecked() && !APODERADO.GetChecked() && !s.GetChecked()){
        REPRESENTANTELEGAL.SetIsValid(false);
        REPRESENTANTELEGAL.SetErrorText('Debe Seleccionar Al menos un tipo');
        SOCIO.SetIsValid(false);
        SOCIO.SetErrorText('Debe Seleccionar Al menos un tipo');
        APODERADO.SetIsValid(false);
        APODERADO.SetErrorText('Debe Seleccionar Al menos un tipo');
        e.isValid=false;
        e.errorText='Debe Seleccionar Al menos un tipo';
        EMAIL.SetIsValid(true);
    }else{
        REPRESENTANTELEGAL.SetIsValid(true);
        SOCIO.SetIsValid(true);
        APODERADO.SetIsValid(true);
        e.isValid=true;
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}