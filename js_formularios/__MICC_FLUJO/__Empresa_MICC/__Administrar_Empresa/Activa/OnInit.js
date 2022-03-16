if(typeof(OCULTAREMPRESACONSUMASIV) != "undefined"){
    OCULTAREMPRESACONSUMASIV.SetEnabled(false);
    if(OCULTAREMPRESACONSUMASIV.GetValue()=="SI"){
        splFormulario_cbpSecundario_Fila_METODOLOGIAPERDIDA.hidden=true;
        splFormulario_cbpSecundario_Fila_METODOLOGIAGANANCIA.hidden=true;
        splFormulario_cbpSecundario_Fila_IDESTADO.hidden=true;
        splFormulario_cbpSecundario_Fila_OCULTAREMPRESACONSUMASIV.hidden=true;
        splFormulario_cbpSecundario_Fila_USUARIOAUTORIZADO.hidden=true;
    }else {
        splFormulario_cbpSecundario_Fila_METODOLOGIAPERDIDA.hidden=false;
        splFormulario_cbpSecundario_Fila_METODOLOGIAGANANCIA.hidden=false;
        splFormulario_cbpSecundario_Fila_IDESTADO.hidden=false;
        splFormulario_cbpSecundario_Fila_OCULTAREMPRESACONSUMASIV.hidden=true;
        splFormulario_cbpSecundario_Fila_USUARIOAUTORIZADO.hidden=false;
    }
}

if(IDESTADO.GetValue()==4){
    ACTIVA.SetEnabled(false);
}else{
    ACTIVA.SetEnabled(true);
}

if(IDESTADO.GetValue()==2 || IDESTADO.GetValue()==3){
    if(typeof(HABILITADA) != "undefined"){
        if(typeof(splFormulario_cbpSecundario_Fila_HABILITADA) != "undefined"){
            splFormulario_cbpSecundario_Fila_HABILITADA.hidden=false;
        }
        if(HABILITADA.GetValue()=="NO"){
            ACTIVA.SetEnabled(false);
        }
    }
}
if(typeof(splFormulario_cbpSecundario_Fila_HABILITADA) != "undefined"){
    splFormulario_cbpSecundario_Fila_HABILITADA.hidden=true;
}