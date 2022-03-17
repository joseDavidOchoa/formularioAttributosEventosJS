/* area de uso */
var l = "grdGeneralEdicionMultiple_AREACULTIVO_";
var Nro = s.name.substr(l.length);
var AreaInmuebleTotalValor =document.getElementById("grdGeneralEdicionMultiple_AREAINMUEBLE_" + Nro + "_I").value;
var AreaInmuebleCultivoValor =document.getElementById("grdGeneralEdicionMultiple_AREACULTIVO_" + Nro + "_I").value;
var DireccionValor =document.getElementById("grdGeneralEdicionMultiple_CALC_INFOINMMATICEDC_" + Nro + "_I").value;
var DireccionActual =" ";
var grid = document.getElementById("grdGeneralEdicionMultiple");
var inputs = grid.getElementsByTagName("INPUT");
var Tipo = 0;  var SumaTotal = 0;
if (AreaInmuebleCultivoValor < 0) {
    s.SetText(0);
    alert('El área de uso no puede ser negativa.');
} else {
    for (var i = 0; i < inputs.length; i++){
        if ( inputs[i].id.indexOf("grdGeneralEdicionMultiple_AREACULTIVO") == 0){
            Nro_i = inputs[i].id.substr("grdGeneralEdicionMultiple_AREACULTIVO".length);
            DireccionActual= document.getElementById("grdGeneralEdicionMultiple_CALC_INFOINMMATICEDC" + Nro_i).value;
            if (DireccionActual  == DireccionValor){
                SumaTotal= SumaTotal+ parseFloat(inputs[i].value);
            }
        }
    };
    console.log ("SumaTotal: " + SumaTotal + " AreaInmueble: " + AreaInmuebleTotalValor);
    if (SumaTotal > parseFloat(AreaInmuebleTotalValor)){
        alert ('El área total no puede ser superior al valor total del inmueble');
        s.SetText(0);
        var APLICA= ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
        APLICA.SetChecked(false);
        AsignarValorCambiado('APLICA_' +Nro, APLICA.GetChecked() );
    } else {
        var APLICA= ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_APLICA_" + Nro);
        if (s.GetText(0) == 0){
            APLICA.SetChecked(false);
            AsignarValorCambiado('APLICA_' +Nro, APLICA.GetChecked() );
        }else{
            APLICA.SetChecked(true);
            AsignarValorCambiado('APLICA_' +Nro, APLICA.GetChecked() );
        }
    }
} 