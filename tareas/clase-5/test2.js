let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;
const agregarVideo = document.querySelector("#agregar")
const botonCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado")

const calcularTiempoTotal = (horas, minutos, segundos) => {
    if (segundos >= 60) {
        minutos += Math.floor(segundos/60);
        segundos = segundos % 60;
    }
    if (minutos >= 60) {
        horas += Math.floor(minutos/60);
        minutos = minutos % 60;
    }

    return `${horas} horas, ${minutos} minutos, ${segundos} segundos.`

}

agregarVideo.onclick = function()  {
    const horas = Number(document.querySelector("#horas").value);
    const minutos = Number(document.querySelector("#minutos").value);
    const segundos = Number(document.querySelector("#segundos").value);
    totalHoras += horas;
    totalMinutos += minutos;
    totalSegundos += segundos;
}

botonCalcular.onclick = function() {
    resultado.innerText = calcularTiempoTotal(totalHoras, totalMinutos, totalSegundos);
    resultado.style.display = "block";

}