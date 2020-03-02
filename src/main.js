function calculate() {
    var valorTotal = document.getElementById("valorTotal").value
    var horas = document.getElementById("horas").value
    var diasE = document.getElementById("diasE").value
    var diasF = document.getElementById("diasF").value
    var x = document.getElementById("resultado");





    var valorHora = (valorTotal / (diasE * 4 * horas)) + ((diasF * diasE * horas))



    document.getElementById("result").innerHTML = "Valor total da hora é: R$:" + valorHora;







}