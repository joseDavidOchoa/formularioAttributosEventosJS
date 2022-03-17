if(s.GetChecked()==true){
    if(!EMAIL.GetText()){
        EMAIL.SetIsValid(false);
        EMAIL.SetErrorText('Para Apoderados este campo es requerido');
    }else{
        EMAIL.SetIsValid(true);
    }
}