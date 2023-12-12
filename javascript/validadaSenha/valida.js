


function validando(){
 let senhaUsuario = document.getElementById("senha").value
if(!senhaUsuario.includes(0 ||1||2||3||4||5||6||7||8||9) & !senhaUsuario.includes('!'||'@'||'#'||'%')){
    console.log('senha invalida, inclua algum número')
}else{
    console.log('senha valida')
}
}