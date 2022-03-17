try{
    var vIDEMPRESA = IDEMPRESA.GetValue();
    var items = [ { Key : "IDEMPRESA", Value : vIDEMPRESA } ];
    var arrResultado = InvocarComando("CB_SOLICITUDLICENCIA_ValEsPersNatural",items,false);
    alert("vIDEMPRESA: " + vIDEMPRESA);
    if(arrResultado.length > 0){
        if (arrResultado[0].RESPUESTA == "SI"){     // Al codigo original le hacen falta los parentesis del if.
            splFormulario_cbpSecundario_Fila_CALC_ESPEQMEDCULTIVADOR.hidden=false;
        }else{
            splFormulario_cbpSecundario_Fila_CALC_ESPEQMEDCULTIVADOR.hidden=true;
        }
    }
}catch(err){
    alert(err.message);
}