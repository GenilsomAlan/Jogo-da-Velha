	var structData = [["1","2","1"],
					  ["1","1","2"],
					  ["2","1","2"]]
	const symbol = ["X","O"]
	var numberX = 0
	const button1 = document.querySelector("#piece1")
	const button2 = document.querySelector("#piece2")
	const button3 = document.querySelector("#piece3")
	const button4 = document.querySelector("#piece4")
	const button5 = document.querySelector("#piece5")
	const button6 = document.querySelector("#piece6")
	const button7 = document.querySelector("#piece7")
	const button8 = document.querySelector("#piece8")
	const button9 = document.querySelector("#piece9")

	button1.addEventListener("click", function(){
		const y = 0, renderButton = 1, position = document.querySelector("#piece1")
		var x = position.value
		start( x, y, renderButton)
	})
	button2.addEventListener("click", function(){
		const y = 1, renderButton = 2, position = document.querySelector("#piece2")
		var x = position.value
		start( x, y, renderButton)
	})
	button3.addEventListener("click", function(){
		const y = 2, renderButton = 3, position = document.querySelector("#piece3")
		var x = position.value
		start( x, y, renderButton)
	})
	button4.addEventListener("click", function(){
		const y = 0, renderButton = 4, position = document.querySelector("#piece4")
		var x = position.value
		start( x, y, renderButton)
	})
	button5.addEventListener("click", function(){
		const y = 1, renderButton = 5, position = document.querySelector("#piece5")
		var x = position.value
		start( x, y, renderButton)
	})
	button6.addEventListener("click", function(){
		const y = 2, renderButton = 6, position = document.querySelector("#piece6")
		var x = position.value
		start( x, y, renderButton)
	})
	button7.addEventListener("click", function(){
		const y = 0, renderButton = 7, position = document.querySelector("#piece7")
		var x = position.value
		start( x, y, renderButton)
	})
	button8.addEventListener("click", function(){
		const y = 1, renderButton = 8, position = document.querySelector("#piece8")
		var x = position.value
		start( x, y, renderButton)
	})
	button9.addEventListener("click", function(){
		const y = 2, renderButton = 9, position = document.querySelector("#piece9")
		var x = position.value
		start( x, y, renderButton)
	})
	function start(positionX, positionY, renderButton){
		var repeat = -1
			if(structData[positionX][positionY] == 'X' ||
				structData[positionX][positionY] == 'O'){
				console.log("posição já oculpada!")
				alert("Posição já oculpada!")
			}else{
				if(numberX % 2 == 0 ){
					structData[positionX][positionY] = symbol[0]
					render(renderButton, 0)
					repeat = verificationWinner()
				}else{
					structData[positionX][positionY] = symbol[1]
					render(renderButton, 1)
					repeat = verificationWinner()
				}
				numberX++
			}
		if(repeat == -1){
			console.log("continuando...")			
		}else if(repeat != 0){
			alert("player " + repeat + " venceu!!!")
		}else alert("Empate!!!")
	}
	function verificationWinner(){
	for(var i = 0; i < 3; i++){
		console.log("verificando linhas..")
		if(structData[i][0] == structData[i][1] &&//line check
			structData[i][1] == structData[i][2]){
				console.log("verificado")
				if(structData[i][0] == symbol[0]){
					return 1
				}else{
					return 2
				}
		}
	}
	for(var i = 0; i < 3; i++){
		console.log("verificando colunas...")
		if(structData[0][i] == structData[1][i] &&//column check
			structData[1][i] == structData[2][i]){
				console.log("verificado")
				if(structData[0][i] == symbol[0]){
					return 1
				}else{
					return 2
				}
		}
	}
		console.log("verificando diagonal principal...")
		if(structData[0][0] == structData[1][1] &&//checking the main diagonal
		 	structData[1][1] == structData[2][2]){
				console.log("verificado")
				if(structData[0][0] == symbol[0]){
					return 1
				}else{
					return 2
				}
		}
		console.log("verificando diagonal secondaria...")
		if(structData[0][2] == structData[1][1] &&//diagonal secondary check
		 	structData[1][1] == structData[2][0]){
				console.log("verificado")
				if(structData[0][2] == symbol[0]){
					return 1
				}else{
					return 2
				}
		}
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j++){
				if(structData[i][j] == 1 ||//check empty espaces
						structData[i][j] == 2){
					return -1
				}
			}
		}
	return 0;
}
function render(positionPiece, idSymbol){
		switch(positionPiece){
			case 1:
				console.log("case 1 ok!")
				document.getElementById("piece1").innerHTML = symbol[idSymbol]
				break
			case 2:
				console.log("case 2 ok!")
				document.getElementById("piece2").innerHTML = symbol[idSymbol]
				break
			case 3:
				console.log("case 3 ok!")
				document.getElementById("piece3").innerHTML = symbol[idSymbol]
				break
			case 4:
				console.log("case 4 ok!")
				document.getElementById("piece4").innerHTML = symbol[idSymbol]
				break
			case 5:
				console.log("case 5 ok!")
				document.getElementById("piece5").innerHTML = symbol[idSymbol]
				break
			case 6:
				console.log("case 6 ok!")
				document.getElementById("piece6").innerHTML = symbol[idSymbol]
				break
			case 7:
				console.log("case 7 ok!")
				document.getElementById("piece7").innerHTML = symbol[idSymbol]
				break
			case 8:
				console.log("case 8 ok!")
				document.getElementById("piece8").innerHTML = symbol[idSymbol]
				break
			case 9:
				console.log("case 9 ok!")
				document.getElementById("piece9").innerHTML = symbol[idSymbol]
				break
			default:
				console.log("case failed!")
				console.log(positionPiece)
				break
		}
	}