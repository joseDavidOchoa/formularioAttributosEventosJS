try{
    if(IDSOLICITUDREQDOC.GetText()!=""){
        e.isValid = true;
        var vIDSOLICITUDREQDOC    = IDSOLICITUDREQDOC.GetText();
        var vIDSOLICITUDREQUISITO = IDSOLICITUDREQUISITO.GetText();
        var vNROCICLO             = NROCICLO.GetValue();
        var items = [ { Key : "IDSOLICITUDREQDOC", Value : vIDSOLICITUDREQDOC },
                    { Key : "IDSOLICITUDREQUISITO", Value : vIDSOLICITUDREQUISITO },
                    { Key : "NROCICLO", Value : vNROCICLO }];
        var arrResultado = InvocarComando("CB_SOLICITUDREQDOC_ValidarActEli",items,false);
        if(arrResultado.length>0){
            if (arrResultado[0].RESPUESTA != "COMPLETA"){
                alert(arrResultado[0].RESPUESTA);
                e.isValid = false;
            }
        }
        /*
        if(IDFSDOCUMENTO_HFValorID_.Get("ID") != ""){
            IDFSDOCUMENTO_txtEditar_.SetVisible(false);
            IDFSDOCUMENTO_txtEditarEscanear_.SetVisible(false);
        }else{
            IDFSDOCUMENTO_txtEscanear_.SetVisible(false);
            IDFSDOCUMENTO_txtNuevo_.SetVisible(false);
        }
        */
    }
}catch(err){
    alert(err.message);
}