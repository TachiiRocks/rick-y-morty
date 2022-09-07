var date = new Date()

//getDay: Devuelve el dia de la semana
//getMounth: Devuelve el mes
//getFullYear: Devuelve el año
//getDate: Devuelve el dia del mes

var calendario = () => {

    date.setDate(1)

    var diasMes = document.querySelector(".dias")

    var ultimoDia = new Date(date.getFullYear(), date.getMonth() +1,0).getDate()

    var diaAnterior = new Date(date.getFullYear(), date.getMonth(),0).getDate()

    var primerDiaIndex = date.getDay()-1

    var ultimoDiaIndex = new Date(date.getFullYear(), date.getMonth() +1,0).getDay()

    var siguientesDias = 7 - ultimoDiaIndex 


    var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio',
               'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre']

    document.querySelector(".mes__abril").innerHTML = meses[date.getMonth()]

    var dias = ""

    for(var i = primerDiaIndex ; i > 0 ; i--){
    dias += `<div class="dia__anterior">${diaAnterior - i +1}</div>`
    }

    for(var i = 1;i <= ultimoDia;i++ ){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            dias+= `<div class="hoy">${i}</div>`
        }else {
            dias+= `<div>${i}</div>`
        }
    }

    for(var i = 1 ;i <= siguientesDias ; i++ ){
        dias += `<div class="dia__siguiente">${i}</div>`
        diasMes.innerHTML = dias
    }
}



document.querySelector('.anterior').addEventListener('click',() => {
    date.setMonth(date.getMonth() -1)
    calendario()
})

document.querySelector('.siguiente').addEventListener('click',() => {
    date.setMonth(date.getMonth() +1)
    calendario()
})

calendario()