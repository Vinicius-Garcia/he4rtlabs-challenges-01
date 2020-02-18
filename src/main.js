


function calculate(){
    var valorTotal = document.getElementById("valorTotal").value
    var horas = document.getElementById("horas").value
    var diasE = document.getElementById("diasE").value
    var diasF = document.getElementById("diasF").value
    var x = document.getElementById("resultado");

    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    
    

    

    var valorHora = (valorTotal / (diasE * 4 * horas) ) + ( ( diasF * diasE * horas ) )
   
    
    console.log(valorHora)
    document.getElementById("result").innerHTML =+valorHora;
    
    


}

