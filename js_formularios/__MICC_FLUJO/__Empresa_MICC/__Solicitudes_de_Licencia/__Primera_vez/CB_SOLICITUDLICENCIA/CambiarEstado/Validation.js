try {
    if (s.GetText() == "Creada"){
        e.isValid = true;
        var items = [ { Key : "IDEMPRESA", Value : IDEMPRESA.GetValue()},
                    { Key : "IDSOLICITUD", Value : IDSOLICITUDLICENCIA.GetValue() },
                    { Key : "SEMILLA", Value : ESTIPOLICENCIASIEMBRA.GetValue() },
                    { Key : "PSICO", Value : ESTIPOLICENCIAPSICOACTIVO.GetValue()} ,
                    { Key : "NOPSICO", Value : ESTIPOLICENCIANOPSICOACTIVO.GetValue()},];
        var arrValidar = InvocarComando("CB_SOLICITUDLICENCIA_Guardar",items,false);
        if(arrValidar.length>0){
            if (arrValidar[0].RESPUESTA != "COMPLETA"){
                alert(arrValidar[0].RESPUESTA);  e.isValid = false;
            }
        }
    }
}catch(err){
    alert(err.message);
}