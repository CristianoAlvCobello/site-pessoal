function copiaNick(texto){
    navigator.clipboard.writeText(texto).then(() =>{
        alert("Nick copiado");
    }).catch(err => {
        alert("erro", err);
    });
}
