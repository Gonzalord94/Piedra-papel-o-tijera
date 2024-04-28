
//Piedra, papel o tijera

// 1. Pedir al usuario que elija una opcion
// 2. Generar una opcion aleatoria para la computadora
// 3. Comparar las opciones y determinar un ganador
// 4. Mostrar el resultado

let jugador;
let pc;

function aleatoria(){
    return Math.ceil(Math.random()*3)          
}

jugador = prompt('Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA')
pc = aleatoria();
alert('tu elegiste:'+ eleccion(jugador))
alert('PC eligio:'+ eleccion(pc))


if(jugador == pc){
    alert('EMPATE')
}else if (jugador ==1 && pc ==3){
    alert('GANASTE')
}else if(jugador == 2 && pc == 1){
    alert('GANASTE')
}else if (jugador == 3 && pc == 2){
    alert('GANASTE')
}else{
    alert('PERDISTE')
}

function eleccion(jugada){
    let resultado = ''
    if (jugada == 1){
        resultado ='PIEDRA🥌'
    }else if (jugada == 2){
        resultado = 'PAPEL🧻'
    }else if (jugada == 3){
        resultado = 'TIJERA ✂'
    }else{
        resultado ='TU ELECCION ES INCORRECTA ❌'
    }
    return resultado
}

