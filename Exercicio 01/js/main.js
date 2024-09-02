var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var resultado = document.getElementById("resultado");


function Limpar() {
  valor1.value = "";
  valor2.value = "";
  resultado.innerText = 0; 
  valor1.focus();
}

function calculo(operador) {
 
  let n1 = Number(valor1.value);
  let n2 = Number(valor2.value);
  let res = Number();
    // verificador()
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
      return; 
    }
  } else {
    alert("Operador inválido");
    return;
  }

  
  resultado.innerText = res;

}

function bloquearLetras(tecla){
  console.log(tecla.charCode);
  if ( tecla.charCode >= 65 && tecla.charCode <=112){
    alert("Digite so numeros")
    return false;
  }
}

function verificador(){
  if (n1 || n2 == ''){
    alert("preenha os campos")
  } else{
    alert("td crto")
  }
}