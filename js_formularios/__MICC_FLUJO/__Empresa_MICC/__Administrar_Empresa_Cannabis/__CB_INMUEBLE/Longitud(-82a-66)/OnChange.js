if ((s.GetValue() < -82) || (s.GetValue() > -66)){
    alert('La Longitud no corresponde con coordenadas en Colombia (debe ser entre -82 y -66)');
    s.SetValue(null);
}
var str =s.GetValue().toString();
var numdigitos=0;
numdigitos = str.indexOf(".")+1;
if (numdigitos>0){
    numdigitos = str.slice(numdigitos).length;
}
if( numdigitos  < 6){
    alert("Debe ingresar al menos 6 dígitos para la Longitud");
    s.SetIsValid(false);
}   