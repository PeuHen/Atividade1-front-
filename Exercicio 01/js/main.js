var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var resultado = document.getElementById("resultado");


function converter() {
  let n1 = Number(valor1.value);
  let n2 = Number(valor2.value);
  return { n1, n2 };
}


function calculo(operador) {
  const { n1, n2 } = converter(); 

  
  if (!verificador(n1, n2)) {
    return; 
  }

  let res;

 
  switch (operador) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      if ( n1 !== 0 && n2 !== 0) {
        res = n1 / n2;
      } else {
        alert("Divisão por 0 não é possível.");
        return; 
      }
      break;
    default:
      alert("Operador inválido.");
      return;
  }

  resultado.innerText = res;
}

// Função para verificar se os campos estão preenchidos
function verificador() {
  if (valor1.value === '' || valor2.value === '') {
    alert("Por favor, preencha os campos com números válidos.");
    return false; 
  }
  return true; 
}

function bloquearLetras(tecla) {
  if (  tecla.charCode >= 65 && tecla.charCode <=126)  { 
    alert("Digite apenas números.");
    return false;
  }
}


function Limpar() {
  valor1.value = "";
  valor2.value = "";
  resultado.innerText = 0; 
  valor1.focus();
}