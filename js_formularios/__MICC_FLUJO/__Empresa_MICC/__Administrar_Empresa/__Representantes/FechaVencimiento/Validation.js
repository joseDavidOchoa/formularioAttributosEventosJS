try{
    if(s.GetValue()!="" && s.GetValue()!=null){
        var fecha=new Date();
        if(s.GetValue() < fecha){
            alert('No se permite el registro de la persona debido a que su documento esta vencido');
            e.isValid = false;
            e.errorText = "No es posible registrar la persona";
            s.Focus();
        }
    }else if((IDTIPOID.GetValue()==2 || IDTIPOID.GetValue()==4 || IDTIPOID.GetValue()==8) && (s.GetValue()=="" || s.GetValue()==null)){
        e.isValid=false;
        e.errorText='Fecha de vencimiento obligatoria para documentos extranjeros';
    }else{
        e.isValid = true;
    }
}catch(e){
    alert("Error Java: " + e);
}