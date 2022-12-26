


let seg = 0
let min = 0
var intervalo 
let whatch = document.querySelector('#whatch')

function iniciar() {
    intervalo = setInterval(counter,10)
}

function parar() {
    clearInterval(intervalo)
}

function limpar() {
    clearInterval(intervalo)
    seg = 0
    min = 0
    hrs = 0
    whatch.innerText = '00:00:00'
}

function counter() {
    seg++
    if (seg == 60) {
        min++
        seg = 0
    }

    if (min == 60) {
        hrs ++
        min = 0
    }
    whatch.innerText = hrs + ':' + min + ':' + seg
}