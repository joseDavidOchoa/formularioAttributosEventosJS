try {
    if (s.GetText() == "Inicial"){
        var Id = "0";
        if (IDSOLICITUDLICENCIA.GetText() != ""){
            Id = IDSOLICITUDLICENCIA.GetText();
        }
        var items = [ { Key : "IDSOLICITUD", Value : Id  } ];
        var arrValidarEnvio = InvocarComando("CB_FRM_SOLICITUDLICENCIA_ValidarEnvio",items,false);
        if(arrValidarEnvio.length>0){
            if (arrValidarEnvio[0].RESPUESTA != "COMPLETA"){
                alert(arrValidarEnvio[0].RESPUESTA);
                s.SetText("Creada");
            }
        }
    }
}catch(err){
    alert(err.message);
}