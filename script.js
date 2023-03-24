
const retornarDiagnosticoDoUsuario = () => {

    const altura =  document.formImc.elements["altura"].value;
    const peso =  document.formImc.elements["peso"].value;
    const IMC = peso / (altura * altura);
    let resultadoIMC = undefined

    if(IMC <= 18.5){
        resultadoIMC = "Você está abaixo do Normal"
        return resultadoIMC

    }else if(IMC > 18.5 && IMC <= 24.9){
        resultadoIMC = "Você está no peso Normal"
        return resultadoIMC

    }else if(IMC > 24.9 && IMC <= 29.9){
        resultadoIMC = "Você está com Sobrepeso"
        return resultadoIMC

    }else if(IMC > 29.9 && IMC <= 40){
        resultadoIMC = "Você está com Obesidade"
        return resultadoIMC

    }else{
        resultadoIMC = "Você está com Obesidade Grave"
        return resultadoIMC
    }
    
}