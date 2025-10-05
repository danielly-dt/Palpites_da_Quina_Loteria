document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-sorteador');
    const saida = document.getElementById('resultado-valor');
    const blocoResultado = document.querySelector('.resultado');

    const MAX = 80;
    const QTD = 5;

    form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const numeros = new Set();
    while (numeros.size < QTD) {
      numeros.add(Math.floor(Math.random() * MAX) + 1);
    }

    const dezenas = [...numeros].sort((a, b) => a - b);
    // Se preferir com 2 dígitos: const texto = dezenas.map(n => String(n).padStart(2,'0')).join(' - ');
    const texto = dezenas.join(' - ');

    saida.textContent = texto;
    blocoResultado.style.display = 'block';
    });
});
