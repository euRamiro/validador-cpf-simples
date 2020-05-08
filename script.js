function validacao(){
  let cpf_digitado = document.getElementById('cpf_digitado').value.replace(/[^\d]+/g,'');
  document.getElementById('error').style.display = 'none';
  document.getElementById('success').style.display = 'none';
 
  let resultadoValidacao = validaCPF(cpf_digitado);

  // if (resultadoValidacao) {
  //   document.getElementById('success').style.display = 'block';
  // } else {
  //   document.getElementById('error').style.display = 'block';
  // }
   //usando operador ternário deixa o if mais elegante.
   resultadoValidacao ? 
   document.getElementById('success').style.display = 'block' : 
   document.getElementById('error').style.display = 'block';
}

function validaCPF(cpf){
   if(cpf.length != 11){
     return false
   } else {
    let numeros = cpf.substring(0,9);
    let digitos = cpf.substring(9);

    let soma = 0;

    for (i = 10; i > 1; i--){
      soma += numeros.charAt(10 - i) * i;
    } 

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //validação do primeiro digito
    if (resultado != digitos.charAt(0)){
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0,10);
    
    for (k = 11; k > 1; k--){
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //validação do segundo digito
    if (resultado != digitos.charAt(1)){
      return false;
    }
    
    return true;
   }
  
}