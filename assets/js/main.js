function main(){
    const relogio = document.querySelector('.timer');
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        },1000);
    }

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    document.addEventListener('click', function(event){
        const elem = event.target;

        if(elem.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }else if(elem.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }else if(elem.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}

main();



