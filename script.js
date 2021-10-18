var structureDate = [ " ", " ", " ", " ", " ", " ", " ", " ", " "]
const letra = ["X", "O"]
var cont = 0
function startGame(){
        console.log("function startGame() ok")
        if(cont == 0){
                var vez = sorteioPlayer()
                if(vez < 0.5){
                        player1()
                }else
                if(vez >= 0.5){
                        player2()
                }
                cont++
        }
}
function sorteioPlayer(){
        var number
        console.log("function sorteioPlayer() ok")
        number = Math.random()
        console.log(number)
        return number
}
function player1(){
        console.log("function player1() ok")
        document.getElementById("result").innerHTML = "Player 1"
}
function player2(){
        console.log("function player2() ok")
        document.getElementById("result").innerHTML = "Player 2"
}