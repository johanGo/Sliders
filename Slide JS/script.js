const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', ()=>{
    console.log('flecha izquierda oprimida')
})
arrowRight.addEventListener('click',()=>{
    console.log('flecha derecha oprimida')
})


//first slider
let imagenes=[
    "imgs/imgscars/carro1.jpg",
    "imgs/imgscars/carro2.jpg",
    "imgs/imgscars/carro3.jpg",
    "imgs/imgscars/carro4.jpg",    
    "imgs/imgscars/carro5.jpg",
    "imgs/imgscars/carro6.jpg",
    "imgs/imgscars/carro7.jpg"
];
document.Imagen.src=imagenes[0];
let sliderDerecho=document.querySelector('.slider-derecho');
let sliderIzquierdo=document.querySelector('.slider-izquierdo');

let contador=0;

function moverDerecha(){
    contador++
    if(contador>imagenes.length-1){
        contador=0
    }
    document.Imagen.src=imagenes[contador];
}
let intervalo = setInterval(moverDerecha,2000)
sliderDerecho.addEventListener('click', function(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha,2000)
});


function moverIzquierdo(){    
    contador--
    if(contador<0){
        contador=imagenes.length-1
    }
    document.Imagen.src=imagenes[contador]
}

sliderIzquierdo.addEventListener('click', function(){
    clearInterval(intervalo);
    moverIzquierdo();
    intervalo = setInterval(moverIzquierdo,2000)
});





