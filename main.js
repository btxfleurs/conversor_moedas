function Converter() {
  var valorElemento = document.getElementById("valor").value
  var valorEmDolarNumerico = parseFloat(valorElemento)
  
  var valorEmReal = valorEmDolarNumerico * 5.16
  console.log(valorEmReal)
  
  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado é R$" + valorEmReal.toFixed(2)
  elementoValorConvertido.innerHTML = valorConvertido
}