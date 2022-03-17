try {
    var Id = IDSOLICITUDLICENCIA.GetValue();
    var items = [ { Key : "IDSOLICITUD", Value : Id  } ];
    if (Id != null){
        var arrValidarEnvio = InvocarComando("CB_FRM_SOLICITUDLICENCIA_ValorPagar",items,false);
    }
}catch(err){
    alert(err.message);
}