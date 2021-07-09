
function inserir(num){
    document.getElementById("visor").innerText += num;
}

function deletar(){
    let visor = document.getElementById("visor").innerText
    document.getElementById("visor").innerText = visor.substring(0, visor.length -1)
}

function resetar(){
    document.getElementById("visor").innerText = ""
}

function resolver(){
    let expressao = document.getElementById("visor").innerHTML

    if(expressao){
        document.getElementById("visor").innerHTML = eval(expressao)
    } else {
        document.getElementById("visor").innerText = 0   
    }
}
