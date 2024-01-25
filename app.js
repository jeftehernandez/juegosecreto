let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log('el numero generado es ' + numeroSecreto);

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

/*funciones */
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);//conectat con las etiquetas de html (document.querySelector())
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    //alert('click desde el boton');
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}`);//usando operador terniario
        //habilitar el boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');//funcion que remueve el atributo bloqueado (desabled)
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
    }
    return;
}

function limpiarCaja(params) {
    let valorCaja = document.getElementById('valorUsuario'); //limpia la caja donde se ingresa el numero
    valorCaja.value = ''; //limpia caja 
}
function generaNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; //retorna numero secreto
    //si el numero generado esta incluido en la lista hacemos una operacion sino hacemos otra

    //control de recursividad
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();//recursividad;
    }
    else{
        //se guarda el numero al final que no esta en la lista
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(params) {
    asignarTextoElemento('h1', 'Juego del número secreto');//indicar el mensaje
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);//indicar el mensaje
    numeroSecreto = generaNumeroSecreto();//generar numero aleatorio
    intentos = 1;//reiniciar contador
}
function reiniciarJuego(params) {
    limpiarCaja();//limpiar caja
    condicionesIniciales();//llamar a condicones iniciales
    
    //desahibilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

