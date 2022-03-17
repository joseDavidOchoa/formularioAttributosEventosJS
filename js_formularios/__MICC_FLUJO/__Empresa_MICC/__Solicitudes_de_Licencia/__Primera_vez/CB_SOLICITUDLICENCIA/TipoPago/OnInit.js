var regAnterior= hfAuditoria.Get("RegistroAnterior");
if (typeof (regAnterior) != "undefined"){
    ESTIPOLICENCIASIEMBRA.SetEnabled(false);
    ESTIPOLICENCIAPSICOACTIVO.SetEnabled(false);
    ESTIPOLICENCIANOPSICOACTIVO.SetEnabled(false);
}else{
    ESTIPOLICENCIASIEMBRA.SetEnabled(true);
    ESTIPOLICENCIAPSICOACTIVO.SetEnabled(true);
    ESTIPOLICENCIANOPSICOACTIVO.SetEnabled(true);
}