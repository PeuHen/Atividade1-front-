var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var resultado = document.getElementById("resultado");
var n1 = Number(valor1.value);
var n2 = Number(valor2.value);

function Limpar() {
  valor1.value = "";
  valor2.value = "";
  resultado.value = ""; // Limpar o resultado também
}

function calculo(operador) {
  // Obtendo os valores dos inputs e convertendo para números
  let n1 = Number(document.getElementById("valor1").value);
  let n2 = Number(document.getElementById("valor2").value);
  let res;

  // Verificar se os valores são válidos
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  // Realizar o cálculo baseado no operador
  if (operador === "+") {
    res = n1 + n2;
  } else if (operador === "-") {
    res = n1 - n2;
  } else if (operador === "*") {
    res = n1 * n2;
  } else if (operador === "/") {
    if (n2 !== 0) {
      res = n1 / n2;
    } else {
      alert("Divisão por 0 não é possível");
      return; // Saia da função se houver divisão por zero
    }
  } else {
    alert("Operador inválido");
    return;
  }

  // Atualizar o elemento resultado com o valor calculado
  document.getElementById("resultado").textContent = res;
  
  console.log(res); // Log do resultado para verificação
}
