function calcularIMC(peso,altura,imc){
   imc =  peso/(altura*altura)
   return imc
}

function statusIMC(imc){
    let status;
if(imc < 18.5)
    {
        status = 'Abaixo do peso';
    }
    else if(imc >= 18.5 && imc < 24.9)
    {
        status = 'Peso Normal';
    }
    else if(imc >= 24.9 && imc < 30)
    {
        status = 'Acima do peso';
    }
    else
    {
        status = 'Obeso';
    }

    return status;
}

function validaParametros(parametro){
    if (isNaN(parametro)) {
        return false
    } else {
        return true
    }
}

exports.calcularIMC = calcularIMC
exports.statusIMC = statusIMC
exports.validaParametros = validaParametros