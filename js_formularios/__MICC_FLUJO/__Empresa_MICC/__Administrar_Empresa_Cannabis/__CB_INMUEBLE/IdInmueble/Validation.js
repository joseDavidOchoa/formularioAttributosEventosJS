try{
    var regAnterior= hfAuditoria.Get("RegistroAnterior");
    e.isValid = true;  var vIDINMUEBLE = IDINMUEBLE.GetValue();
    var vIDEMPRESA = IDEMPRESA.GetValue();
    var vMENSAJE = "";
    if(regAnterior.INMUEBLEDERECHO == null){
        var items = [{ Key : "IDINMUEBLE", Value : vIDINMUEBLE },
                    { Key : "IDEMPRESA", Value : vIDEMPRESA },
                    { Key : "BANDERA", Value : 0 }];
    }else{
        var items = [ { Key : "IDINMUEBLE", Value : vIDINMUEBLE } ,
                    { Key : "IDEMPRESA", Value : vIDEMPRESA },
                    { Key : "BANDERA", Value : 1 }];
    }
    var arrResultado = InvocarComando("CB_INMUEBLE_ValModificar",items,false);
    if(arrResultado.length > 0){
        for(var i=0; i<arrResultado.length; i++){
            vMENSAJE = vMENSAJE + arrResultado[i].RESPUESTA + '\n\n';
        }
        alert('El inmueble no se puede modificar, está incluido en las siguientes solicitudes o licencias sin solicitud de modificación de derecho de propiedad de inmueble: \n\n' + vMENSAJE);   e.isValid = false;
    }
}catch(err){
    alert(err.message);

}try{
    var regAnterior= hfAuditoria.Get("RegistroAnterior");
    e.isValid = true;
    var vIDINMUEBLE = IDINMUEBLE.GetValue();
    var vIDEMPRESA = IDEMPRESA.GetValue();
    var vMENSAJE = "";
    if(regAnterior.INMUEBLEDERECHO == null){
        var items = [ { Key : "IDINMUEBLE", Value : vIDINMUEBLE },
                    { Key : "IDEMPRESA", Value : vIDEMPRESA },
                    { Key : "BANDERA", Value : 0 }];
    }else{
        var items = [ { Key : "IDINMUEBLE", Value : vIDINMUEBLE },
                    { Key : "IDEMPRESA", Value : vIDEMPRESA },
                    { Key : "BANDERA", Value : 1 }];
    }
    var arrResultado = InvocarComando("CB_INMUEBLE_ValModificar",items,false);
    if(arrResultado.length > 0){
        for(var i=0; i<arrResultado.length; i++){
            vMENSAJE = vMENSAJE + arrResultado[i].RESPUESTA + '\n\n';
        }
        alert('El inmueble no se puede modificar, está incluido en las siguientes solicitudes o licencias sin solicitud de modificación de derecho de propiedad de inmueble: \n\n' + vMENSAJE);
        e.isValid = false;
    }
}catch(err){
    alert(err.message);
}