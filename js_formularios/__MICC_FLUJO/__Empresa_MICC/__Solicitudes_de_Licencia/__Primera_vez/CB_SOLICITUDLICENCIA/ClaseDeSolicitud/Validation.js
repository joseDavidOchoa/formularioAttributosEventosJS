e.isValid = true;
if(ESTIPOLICENCIASIEMBRA.GetValue() == false && ESTIPOLICENCIAPSICOACTIVO.GetValue() == false && ESTIPOLICENCIANOPSICOACTIVO.GetValue() == false){
    alert('Se debe seleccionar un tipo de licencia.');
    e.isValid = false;
}
if((ESTIPOLICENCIASIEMBRA.GetValue() + ESTIPOLICENCIAPSICOACTIVO.GetValue() + ESTIPOLICENCIANOPSICOACTIVO.GetValue()) > 1){
    alert('Solo se permite seleccionar un tipo de licencia.');
    e.isValid = false;
} 