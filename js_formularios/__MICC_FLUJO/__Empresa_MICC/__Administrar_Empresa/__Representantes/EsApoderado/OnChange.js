try{
    if(REPRESENTANTELEGAL.GetChecked() && s.GetChecked()){
        alert('El representante y el apoderado son excluyentes.');
        s.SetChecked(false);
    }
}catch(ex){
    alert('Error: '+'\n'+ex);
}