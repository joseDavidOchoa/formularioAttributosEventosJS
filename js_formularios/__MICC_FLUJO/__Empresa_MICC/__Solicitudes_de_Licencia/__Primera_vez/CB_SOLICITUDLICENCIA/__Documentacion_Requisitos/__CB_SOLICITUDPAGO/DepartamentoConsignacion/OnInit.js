var regAnterior= hfAuditoria.Get("RegistroAnterior");
if (typeof (regAnterior) != "undefined"){
    InvocarComandoLista (IDCIUDAD,regAnterior.IDCIUDAD,"CB_LISTACIUDAD",regAnterior.IDDEPARTAMENTO,null,null);
    IDCIUDAD.SetIsValid(true);
}else{
    RecargarLista("IDCIUDAD",s.GetValue());
} 