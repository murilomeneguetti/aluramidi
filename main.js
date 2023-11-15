//função recebe o id de um elemento que vai ser buscado e reproduzido pelo .play
//para reproduzir o som (audios do html)
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    //condição para tocar o som somente se o parametro não for nulo e a tag for audio
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}
//seleciona uma lista de elementos html com a classe .tecla (as 9 teclas) 
const listaDeTeclas = document.querySelectorAll('.tecla');

//laço para percorrer todas as teclas da página
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    //template string (string dinâmica)
    const idAudio = `#som_${instrumento}`

    //atribui a função tocaSom ao onclick das teclas
    //ex html: <button onclick="myFunction()">Click me</button>
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    //pinta a tecla de vermelho quando aperto alguma tecla do teclado quando uma tecla do Midi estiver selecionada
    tecla.onkeydown = function(evento) {
        //condição para ficar vermelho só quando apertar espaço ou enter
        //usa === para também comparar o tipo da variável
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }


}
