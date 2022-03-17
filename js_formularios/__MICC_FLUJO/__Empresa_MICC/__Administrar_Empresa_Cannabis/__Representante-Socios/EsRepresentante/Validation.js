try{
    FECHANACIMIENTO.SetIsValid(true);
    LUGARNACIMIENTO.SetIsValid(true);
    if(s.GetChecked() || REPRESENTANTELEGAL.GetChecked()){
        if(FECHANACIMIENTO.GetValue() == null || FECHANACIMIENTO.GetValue() =="" ){
            FECHANACIMIENTO.SetIsValid(false);
        }if(LUGARNACIMIENTO.GetValue() == null || LUGARNACIMIENTO.GetValue() =="" ){
            LUGARNACIMIENTO.SetIsValid(false);
        }
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}