try{
      e.isValid = true;
      var vIDEMPRESA = IDEMPRESA.GetValue();
      var vMENSAJE = "";
      var items = [ { Key : "IDEMPRESA", Value : vIDEMPRESA } ];
      var arrResultado = InvocarComando("CB_EMPRESA_ValModRS",items,false);  /*var arrResultado2 = InvocarComando("CB_SOLICITUDLICENCIA_ModificacionRazonSocial",items,false);*/  
      if(arrResultado.length > 0 /*&& arrResultado2.length == 0*/){
        for(var i=0; i<arrResultado.length; i++){
            vMENSAJE = vMENSAJE + arrResultado[i].RESPUESTA + '\n\n';
        }
        alert('La razón social no se puede modificar, está incluida en las siguientes solicitudes en trámite o licencias sin solicitud de modificación de razón social: \n\n' + vMENSAJE);
        e.isValid = false;
      }
    }catch(err){
        alert(err.message);
    }