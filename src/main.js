


function calculate(){
    var valorTotal = document.getElementById("valorTotal").value
    var horas = document.getElementById("horas").value
    var diasE = document.getElementById("diasE").value
    var diasF = document.getElementById("diasF").value
    
    

    

    var valorHora = (valorTotal / (diasE * 4 * horas) ) + ( ( diasF * diasE * horas ) )
   
    
    console.log(valorHora)
    document.getElementById("result").innerHTML =+valorHora;
    
    


}
function main(){
    var stateMain = document.getElementById("main")
    var stateSobre = document.getElementById("sobre")

    if (stateMain.style.display === "none") {
        stateMain.style.display = "block";
    }
    if(stateSobre.style.display === "block"){
        stateSobre.style.display = "none"
    } 

}

function sobre(){
    var stateMain = document.getElementById("main")
    var stateSobre = document.getElementById("sobre")

    if (stateSobre.style.display === "none") {
        stateSobre.style.display = "block";
    }
    if(stateMain.style.display === "block"){
        stateMain.style.display = "none"
    } 

}