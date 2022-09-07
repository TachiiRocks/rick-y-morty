var carton = document.querySelector(".numeros");
var numeros = ""
var miCarton = []
var miNumero = document.querySelector(".numero-random")
var cajaDeNumeros = []
var counter = 0

var crearCarton = () => {
    var contador = 0
    while(contador<12){ 
            var numAleatorio =  Math.floor(Math.random()*100)
            if(!(miCarton.includes(numAleatorio)) || miCarton[0] === undefined){
                miCarton.push(numAleatorio)
                numeros +=  `<div id="${miCarton.indexOf(numAleatorio)}" class="dia__siguiente${miCarton.indexOf(numAleatorio)}">${numAleatorio}</div>`
                contador++
                carton.innerHTML = numeros
            }else {
                console.log('repetido el numero ' + numAleatorio)
            }         
    }
        
}

document.querySelector('.boton').addEventListener('click',() => {
    var myNumAleatorio =  Math.floor(Math.random()*100)
    console.log(cajaDeNumeros)
    if(!(cajaDeNumeros.includes(myNumAleatorio))){
        comparador(myNumAleatorio)
    }else {
        while(!(cajaDeNumeros.includes(myNumAleatorio))){
            myNumAleatorio =  Math.floor(Math.random()*100)
            comparador(mynumAleatorio)
        }
    }
})


var comparador = (myNumAleatorio) => {
        cajaDeNumeros.push(myNumAleatorio)  
        miNumero.innerHTML = myNumAleatorio
            if(miCarton.includes(myNumAleatorio)){
                document.getElementById(miCarton.indexOf(myNumAleatorio)).innerHTML = "X"
                alert('el numero ' + myNumAleatorio + " está en tu carton") 
                counter++
                console.log(counter)
                if(counter === 12) alert('Bingo')  
    }
}

crearCarton()

 