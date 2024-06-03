// Lógica JavaScript para gerenciar os pontos e o reset
const numPartidasInput = document.getElementById('numPartidas');
const jogador1Button = document.getElementById('jogador1');
const jogador2Button = document.getElementById('jogador2');
const resetButton = document.getElementById('reset');
const placarAtual = document.querySelector('.placar-atual h1');
const pontosSelect = document.querySelector('#pontos-select')

let pontosJogador1 = 0;
let pontosJogador2 = 0;
let colorJogador1 = '#6f00ff';
let colorJogador2 = '#ff6912';
let metaPontos = '';

const updateScore = () => {
    placarAtual.innerText = `${pontosJogador1} a ${pontosJogador2}`
    if(pontosJogador1 === metaPontos){
        placarAtual.style.color = colorJogador1;
        triggerConfetti(colorJogador1);
        console.log('Top 1 global ganhou!!')
        return
    }
    if(pontosJogador2 === metaPontos){
        placarAtual.style.color = colorJogador2;
        triggerConfetti(colorJogador2);
        console.log('Top 1 BR ganhou!!')
        return
    }
    placarAtual.style.color = 'black';
    
}   

const reset = () => {
    pontosJogador1 = 0;
    pontosJogador2 = 0;
    metaPontos = '';
    pontosSelect.value = '';
    updateScore();
    console.log('Pontos resetados');

    for (let option of pontosSelect.options) {
        option.disabled = false;
    }
}

resetButton.addEventListener('click', reset);

pontosSelect.addEventListener('click', () => {
    if(pontosJogador1 === metaPontos || pontosJogador2 === metaPontos){
        reset();
    }
});

pontosSelect.addEventListener('change', function () {
    metaPontos = parseInt(this.value);
    for(option of this.options){
        if(parseInt(option) !== metaPontos){
            option.disabled = true;
        }
    }
});

jogador1Button.addEventListener('click', () => {
    if(metaPontos === '' || pontosJogador1 === metaPontos || pontosJogador2 === metaPontos){
        alert('Escolha a quantidade de pontos');
        return
    }
    pontosJogador1++;
    updateScore();
    console.log(`Pontos do Jogador 1: ${pontosJogador1} Pontos do Jogador 2: ${pontosJogador2}`);
});

jogador2Button.addEventListener('click', () => {
    if(metaPontos === '' || pontosJogador1 === metaPontos || pontosJogador2 === metaPontos){
        alert('Escolha a quantidade de pontos');
        return
    }
    pontosJogador2++;
    updateScore();
    console.log(`Pontos do Jogador 1: ${pontosJogador1} Pontos do Jogador 2: ${pontosJogador2}`);
});

const triggerConfetti = (color) => {
    console.log(color);
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [color]
    });
}