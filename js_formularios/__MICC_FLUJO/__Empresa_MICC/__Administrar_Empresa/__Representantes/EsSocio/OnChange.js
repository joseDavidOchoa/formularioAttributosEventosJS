try{
    if(s.GetChecked() || REPRESENTANTELEGAL.GetChecked()){
        FECHANACIMIENTO.SetIsValid(false);
        LUGARNACIMIENTO.SetIsValid(false);
    }else{
        FECHANACIMIENTO.SetIsValid(true);
        LUGARNACIMIENTO.SetIsValid(true);
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}