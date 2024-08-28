var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var resultado = document.getElementById("resultado");

function transformarNumero() {
  valor1.value;
  valor2.value;

  let n1 = Number(valor1);
  let n2 = Number(valor2);
  

  console.log(n1);
}

function Limpar() {
  valor1.value = "";
  valor2.value = "";
}

function calculo(operadorador, n1, n2) {
  if (operadorador === "+") {
    return (resultado = n1 + n2);
  } else if (operadorador === "-") {
    return (resultado = n1 - n2);
  } else if (operadorador === "*") {
    return (resultado = n1 * n2);
  } else if (operadorador === "/") {
    return (resultado = n1 / n2);
  }

  let res = Number(resultado);
  console.log(res);
}
