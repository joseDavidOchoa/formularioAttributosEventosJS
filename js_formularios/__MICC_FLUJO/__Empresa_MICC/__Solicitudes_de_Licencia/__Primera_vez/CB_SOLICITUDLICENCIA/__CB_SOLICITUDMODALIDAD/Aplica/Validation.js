try {
    e.isValid = true; var l = "grdGeneralEdicionMultiple_APLICA_";
    var Nro = s.name.substr(l.length);
    var ESTERCERO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESTERCERO_" + Nro);
    var APLICA =   ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
    var ESPROPIO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESPROPIO_" + Nro);
    var propio =0;
    var tercero =0;
    if (typeof(ESPROPIO)!= "undefined"){
        if(ESPROPIO.GetChecked()) propio =1;
    }
    if(typeof(ESTERCERO)!= "undefined"){
        if((ESTERCERO.GetChecked())) tercero =1;
    }
    if((propio + tercero ==0 ) && (APLICA.GetChecked())){
        alert('Debe indicar el tipo (Propio y/o Tercero), donde aplica la modalidad');
        APLICA.SetChecked(false);
        AsignarValorCambiado('APLICA_' + Nro, APLICA.GetChecked() );
        e.isValid = false;
    }else{
        e.isValid = true;
    }
}catch(err){
    alert(err.message);
}