try{
    if(typeof(EMPRESA) != "undefined" ){
        if(EMPRESA.GetValue().toString()=="true"){
            FECHANACIMIENTO.SetIsValid(true);
            LUGARNACIMIENTO.SetIsValid(true);
        }else{
            if(FECHANACIMIENTO.GetText().trim() == ''){
                FECHANACIMIENTO.SetIsValid(false);
            }else{
                FECHANACIMIENTO.SetIsValid(true);
            }if(LUGARNACIMIENTO.GetText().trim() == ''){
                LUGARNACIMIENTO.SetIsValid(false);
            }else{
                LUGARNACIMIENTO.SetIsValid(true);
            }
        }
    }
}catch (e){
    alert("Error Java: " + e);
}