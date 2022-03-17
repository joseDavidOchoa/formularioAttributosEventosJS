var l = "grdGeneralEdicionMultiple_ESPROPIO_";
var Nro = s.name.substr(l.length);
var ESTERCERO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESTERCERO_" + Nro);
var APLICA =   ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
var ESPROPIO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ESPROPIO_" + Nro);
var ModalidadNombre = "grdGeneralEdicionMultiple_IDMODALIDAD_" + Nro;
var ModalidadValor =document.getElementById(ModalidadNombre + "_I").value;
var propio =0;
var tercero =0;
if (typeof(ESPROPIO)!= "undefined"){
    if(ESPROPIO.GetChecked()) propio =1;
}
if (typeof(ESTERCERO)!= "undefined"){
    if((ESTERCERO.GetChecked())) tercero =1;
}
if (propio + tercero ==0 ){
    APLICA.SetChecked(false);
    AsignarValorCambiado('APLICA_' + Nro, APLICA.GetChecked() );
}else{
    APLICA.isValid = true;
    APLICA.SetChecked(true);
    AsignarValorCambiado('APLICA_' + Nro,    APLICA.GetChecked() );
}
if (propio == 1){
    if ((ModalidadValor == 'Almacenamiento') || (ModalidadValor == 'Disposición Final')){
        alert('Para las modalidades de Almacenamiento o Disposición Final, no se puede escoger el tipo (Propio)');
        ESPROPIO.SetChecked(false);
        AsignarValorCambiado('ESPROPIO_' + Nro, ESPROPIO.GetChecked() );
        if(!(ESTERCERO.GetChecked())){
            APLICA.SetChecked(false);
            AsignarValorCambiado('APLICA_' + Nro, APLICA.GetChecked() );
        }
    }
} 