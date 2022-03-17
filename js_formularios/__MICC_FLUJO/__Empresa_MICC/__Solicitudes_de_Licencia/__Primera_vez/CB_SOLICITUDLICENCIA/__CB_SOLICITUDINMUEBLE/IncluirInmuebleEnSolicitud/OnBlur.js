var l = "grdGeneralEdicionMultiple_APLICA_";
var Nro = s.name.substr(l.length);
if (!s.GetChecked()){
    var PRINCIPAL = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESPRINCIPAL_" + Nro);
    var AREAUSO =   ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_AREACULTIVO_" + Nro);
    AREAUSO.SetText(0);
    PRINCIPAL.SetChecked(false);   /*    AREAUSO.SetValue(0);  */
}