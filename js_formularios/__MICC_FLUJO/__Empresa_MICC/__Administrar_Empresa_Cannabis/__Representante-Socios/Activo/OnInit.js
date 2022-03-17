if(IDESTADO.GetValue()==4){
    ACTIVO.SetEnabled(false);
}else{
    ACTIVO.SetEnabled(true);
}if(REPRESENTANTELEGAL.GetChecked()==false && SOCIO.GetChecked()==false && APODERADO.GetChecked()==false && JUNTADIRECTIVA.GetChecked()==false){
    REPRESENTANTELEGAL.SetEnabled(true);
    SOCIO.SetEnabled(true);
    APODERADO.SetEnabled(true);
    JUNTADIRECTIVA.SetEnabled(true);
}else{
    REPRESENTANTELEGAL.SetEnabled(false);
    SOCIO.SetEnabled(false);
    APODERADO.SetEnabled(false);
    JUNTADIRECTIVA.SetEnabled(false);
}