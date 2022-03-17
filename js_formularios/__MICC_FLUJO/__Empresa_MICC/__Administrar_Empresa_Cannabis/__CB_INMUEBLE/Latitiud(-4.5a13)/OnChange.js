if ((s.GetValue() < -4.5) || (s.GetValue() > 13)){
    alert('La Latitud no corresponde con coordenadas en Colombia (debe estar entre -4.5 y 13)');
    s.SetValue(null);
}
var str =s.GetValue().toString();
var numdigitos=0;
numdigitos = str.indexOf(".")+1;
if (numdigitos>0){
    numdigitos = str.slice(numdigitos).length;
}
if( numdigitos  < 6) {
    alert("Debe ingresar al menos 6 dígitos para la Latitud");
    s.SetIsValid(false);
}