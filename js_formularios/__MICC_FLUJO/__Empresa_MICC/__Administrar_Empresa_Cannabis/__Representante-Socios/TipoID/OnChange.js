try{
    if(s.GetValue()== 2 || s.GetValue()== 4 || s.GetValue()== 8 ){
        FECHAVENCIMIENTO.SetIsValid(false);
        splFormulario_cbpSecundario_Fila_VISA.style.display="table-row";
    }else{
        FECHAVENCIMIENTO.SetIsValid(true);
        splFormulario_cbpSecundario_Fila_VISA.style.display="none";
    }if(s.GetValue()==2 || s.GetValue()==4 || s.GetValue()==8){
        /*FECHAEXPEDICION.SetEnabled(true);
        LUGAREXPEDICION.SetEnabled(true);*/
        FECHAVENCIMIENTO.SetEnabled(true);
    }else{
        /*FECHAEXPEDICION.SetEnabled(false);
        LUGAREXPEDICION.SetEnabled(false);*/
        FECHAVENCIMIENTO.SetEnabled(false);
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}