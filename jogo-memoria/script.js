//1 COISA ACDSSAR AS CARTAS
//EMBARALHAR
//3 VIRAR CARTAS


const cartas = document.querySelectorAll('.carta')
// se colocar consloe aparece todas as cartas - console.log(cartas)
function embaralhar() {
    cartas.forEach(carta => {
        let numeroAleatorio = Math.floor(Math.random()*12);//p/ cada carta gera um numro aleatorio, QUD CARREGA O JOGO JA embaralha para qud se o usuariio abrir o console nao ver os numero das posicoes
        carta.style.order = numeroAleatorio
    })

}
embaralhar();

cartas.forEach(carta=>{carta.addEventListener('click', virarCarta)})

let primeiraCarta = null
let segundaCarta = null

function virarCarta(){
    if (primeiraCarta && segundaCarta){
        return
    }else{
        this.classList.add('flip')
    }
    if(primeiraCarta == null){
        primeiraCarta = this
        console.log('1aCarta',primeiraCarta)
    }else{
        if (segundaCarta!== null){
            return
        }
        if (this === primeiraCarta){
            return
        }else{
            segundaCarta = this
            console.log('2aCarta',segundaCarta)
        if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework){
            primeiraCarta = null
            segundaCarta = null
            return
        }else{
            setTimeout(()=>{
                primeiraCarta.classList.remove('flip')
                segundaCarta.classList.remove('flip')
                primeiraCarta = null
                segundaCarta = null
            },1500)
        }
        }
    }
}
