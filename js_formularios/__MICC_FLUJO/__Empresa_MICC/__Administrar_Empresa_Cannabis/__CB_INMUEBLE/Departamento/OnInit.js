var regAnterior= hfAuditoria.Get("RegistroAnterior");
if(typeof (regAnterior) != "undefined") {
    InvocarComandoLista(IDINMUEBLECIUDAD,
                        regAnterior.IDINMUEBLECIUDAD,
                        "CB_LISTACIUDAD",
                        regAnterior.IDINMUEBLEDEPARTAMENTO,
                        null,
                        null);
    IDINMUEBLECIUDAD.SetIsValid(true);
}else{
    RecargarLista("IDINMUEBLECIUDAD",s.GetValue());
}