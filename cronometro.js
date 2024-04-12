var hh = 0;
var mm = 0;
var ss = 0;
var ms = 0;

var tempo = 20; // Declarando a velocidade da contagem
var cronometro;

// Inicia o contador do cronometro, chamando a função timer a cada milissegundo dentro de tempo
function start() {
    cronometro = setInterval(() => { timer(); }, tempo)
}

// Cancela o funcionamento do Interval
function pause() {
    clearInterval(cronometro);
}

// Cancela o funcionamento do Interval e zera as variáveis
function reset() {
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;
    ml = 0;
    document.getElementById('contador').innerHTML = '00:00:00.00';
}

function timer() {
    // Incrementa +1 ms
    ms++;
    if (ms == 60) {
        // Incrementa +1 ss e zera ms
        ms = 0
        ss++;
        if (ss == 60) {
            // Incrementa +1 mm e zera ss
            ss = 0;
            mm++;
            if (mm == 60) {
                // Incrementa +1 hh e zera mm
                mm = 0;
                hh++;
            }
        }
    }

    // Utilizando operadores ternários para escrever a resposta na tela em tempo real
    // Exemplo: se o valor de hh for menor que 10, adicione o valor de hh na unidade,
    // caso contrário adicione o valor de hh na casa decimal
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + '.' + (ms < 10 ? '0' + ms : ms)
    document.getElementById('contador').innerHTML = format
}