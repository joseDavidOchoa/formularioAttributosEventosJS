try {
    if(typeof(EMPRESA) != "undefined" ){
        if (EMPRESA.GetValue().toString()!="true"){
            var fecha=new Date();
            FECHANACIMIENTO.SetMaxDate(fecha);
            var intAno = fecha.getFullYear()-100;
            var fechaMin = new Date(intAno, fecha.getMonth(), fecha.getDay());
            FECHANACIMIENTO.SetMinDate(fechaMin);
        }
    }
}catch(e){
    alert("Error Java: " + e);
}