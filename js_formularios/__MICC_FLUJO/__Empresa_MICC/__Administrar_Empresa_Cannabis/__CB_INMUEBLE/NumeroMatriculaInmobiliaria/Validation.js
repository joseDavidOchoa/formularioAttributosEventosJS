e.isValid = true;
var vMensaje = "";
var vMatInm = INMUEBLEMATRICULANUMERO.GetText().trim();
var vCedCat = INMUEBLECASTASTRONUMERO.GetText().trim();
if (vMatInm.length == 0 && vCedCat.length == 0){
    vMensaje = vMensaje + 'No se han registrado información para matrícula inmobiliaria o cédula catastral.';
}
if (vMensaje.length > 0){
    alert(vMensaje);
    e.isValid = false;
}