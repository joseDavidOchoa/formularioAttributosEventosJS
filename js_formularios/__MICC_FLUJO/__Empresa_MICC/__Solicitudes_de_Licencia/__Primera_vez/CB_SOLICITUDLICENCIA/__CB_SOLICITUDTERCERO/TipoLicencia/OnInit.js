var regAnterior= hfAuditoria.Get("RegistroAnterior");
if (typeof (regAnterior) != "undefined"){
    InvocarComandoLista( IDMODALIDAD,regAnterior.IDMODALIDAD ,"CB_LISTAMODALIDADTERCERO" ,regAnterior.IDTIPOLICENCIA ,null ,null);
    IDMODALIDAD.SetIsValid(true);
}else{
    RecargarLista("IDMODALIDAD",s.GetValue());
}