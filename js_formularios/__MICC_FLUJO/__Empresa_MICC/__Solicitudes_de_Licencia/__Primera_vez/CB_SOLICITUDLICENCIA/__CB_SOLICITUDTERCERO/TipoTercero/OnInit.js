try{
    if (s.GetText() == "Actividad Autónoma"){
        splFormulario_cbpSecundario_Fila_ACTIVIDAD.hidden=false;
        splFormulario_cbpSecundario_Fila_NROLICENCIA.hidden=true;
        splFormulario_cbpSecundario_Fila_CERTIFICADO.hidden=true;
    }
    if (s.GetText() == "Destinatario Cosecha"){
        splFormulario_cbpSecundario_Fila_ACTIVIDAD.hidden=true;
        splFormulario_cbpSecundario_Fila_NROLICENCIA.hidden=false;
        splFormulario_cbpSecundario_Fila_CERTIFICADO.hidden=true;
    }
    if (s.GetText() == "Proveedor Semilla"){
        splFormulario_cbpSecundario_Fila_ACTIVIDAD.hidden=true;
        splFormulario_cbpSecundario_Fila_NROLICENCIA.hidden=true;
        splFormulario_cbpSecundario_Fila_CERTIFICADO.hidden=false;
    }
    if (s.GetText() == "Disposición Final"){
        splFormulario_cbpSecundario_Fila_ACTIVIDAD.hidden=true;
        splFormulario_cbpSecundario_Fila_NROLICENCIA.hidden=true;
        splFormulario_cbpSecundario_Fila_CERTIFICADO.hidden=true;
    }
    if(s.GetText() == "Almacenamiento"){
        splFormulario_cbpSecundario_Fila_ACTIVIDAD.hidden=true;
        splFormulario_cbpSecundario_Fila_NROLICENCIA.hidden=true;
        splFormulario_cbpSecundario_Fila_CERTIFICADO.hidden=true;
    }
}catch(err){
    alert(err.message);
}