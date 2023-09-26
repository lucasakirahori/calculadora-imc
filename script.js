const form = document.getElementById('formImc')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const altura =  document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value;
    
    const IMC = peso / (altura * altura);
    
    const resultado = document.getElementById('valor');
    let descricao = '';

    
    if(IMC <= 18.5){
        descricao = "Você está abaixo do Normal!"
        
    }else if(IMC > 18.5 && IMC <= 24.9){
        descricao = "Você está no peso Normal"
        
    }else if(IMC > 24.9 && IMC <= 29.9){
        descricao = "Você está com Sobrepeso"
        
    }else if(IMC > 29.9 && IMC <= 40){
        descricao = "Você está com Obesidade!"
        
    }else{
        descricao = "Você está com Obesidade Grave!!"
        
    }
    
    resultado.textContent = IMC.toFixed(2)
    document.getElementById('descricao').textContent = descricao;
});