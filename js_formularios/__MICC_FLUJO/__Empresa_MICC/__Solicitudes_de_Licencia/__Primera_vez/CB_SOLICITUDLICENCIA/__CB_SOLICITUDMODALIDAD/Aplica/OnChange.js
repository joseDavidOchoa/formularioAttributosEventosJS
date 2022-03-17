var l = "grdGeneralEdicionMultiple_APLICA_";
var Nro = s.name.substr(l.length);
var ESTERCERO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESTERCERO_" + Nro);
var APLICA =   ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
var ESPROPIO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESPROPIO_" + Nro);
if (typeof(APLICA)!= "undefined"){
    if (!APLICA.GetChecked()){
        ESTERCERO.SetChecked(false);
        AsignarValorCambiado('ESTERCERO_' + Nro, ESTERCERO.GetChecked() );
        ESPROPIO.SetChecked(false);
        AsignarValorCambiado('ESPROPIO_' + Nro, ESPROPIO.GetChecked() );
    }
}