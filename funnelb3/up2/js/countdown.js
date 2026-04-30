const countdownDuration = 10; // Em minutos
let timeRemaining = countdownDuration * 60; // Convertendo minutos para segundos

// Atualize a contagem a cada segundo
const x = setInterval(function() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Exibir os resultados
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // Reduzir o tempo restante
    timeRemaining--;

    // Se a contagem regressiva terminar
    // if (timeRemaining < 0) {
    //     clearInterval(x);
    //     document.getElementById("countdown").innerHTML = "TEMPO ESGOTADO!";
    // }
}, 1000);