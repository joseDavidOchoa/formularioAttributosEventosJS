if (s.GetChecked()){
    var l = "grdGeneralEdicionMultiple_ESPRINCIPAL_";
    var Nro = s.name.substr(l.length);
    var APLICA= ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
    APLICA.SetChecked(true);
    AsignarValorCambiado('APLICA_' +Nro, APLICA.GetChecked() );
    var TipoLicenciaNombre = "grdGeneralEdicionMultiple_IDTIPOLICENCIA_" + Nro;
    var TipoLicenciaValor =document.getElementById(TipoLicenciaNombre + "_I").value;
    var grid = document.getElementById("grdGeneralEdicionMultiple");
    var inputs = grid.getElementsByTagName("INPUT"); //Coleccion completa de inputs
    var Tipo = 0;
    var cantidad = 0;
    for (var i = 0; i < inputs.length; i++){
        if ( inputs[i].id.indexOf("grdGeneralEdicionMultiple_IDTIPOLICENCIA") == 0 && inputs[i].id.substr(inputs[i].id.length - 2) == "_I"){
            if (inputs[i].value == TipoLicenciaValor){
                Tipo = 1;
            }else{
                Tipo = 0;
            };
        };
        if( inputs[i].id.indexOf("grdGeneralEdicionMultiple_ESPRINCIPAL") == 0){
            if (inputs[i].value == "C" && Tipo  == 1){
                cantidad  = cantidad  +1;
            }
        }
    };
    if (cantidad >= 2){
        alert ('No pueden existir dos predios principales para el mismo tipo de licencia');
        s.SetChecked(false);
        AsignarValorCambiado('ESPRINCIPAL_' +Nro, s.GetChecked() );
        APLICA.SetChecked(false);
        AsignarValorCambiado('APLICA_' +Nro, APLICA.GetChecked() );
    }
}