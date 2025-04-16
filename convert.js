// Funções para o conversor de moedas
const taxasFixas = {
    "USD": { "BRL": 5.0, "EUR": 0.93, "GBP": 0.80, "JPY": 150.5, "CNY": 7.2, "CAD": 1.34, "AUD": 1.52, "CHF": 0.91, "ARS": 860 },
    "BRL": { "USD": 0.20, "EUR": 0.19, "GBP": 0.16, "JPY": 30.1, "CNY": 1.44, "CAD": 0.27, "AUD": 0.24, "CHF": 0.18, "ARS": 171 },
    "EUR": { "USD": 1.08, "BRL": 5.3, "GBP": 0.86, "JPY": 161.5, "CNY": 7.75, "CAD": 1.45, "AUD": 1.63, "CHF": 0.98, "ARS": 920 },
    "GBP": { "USD": 1.25, "BRL": 6.1, "EUR": 1.16, "JPY": 188.4, "CNY": 9.0, "CAD": 1.69, "AUD": 1.88, "CHF": 1.14, "ARS": 1070 },
    "JPY": { "USD": 0.0066, "BRL": 0.033, "EUR": 0.0062, "GBP": 0.0053, "CNY": 0.048, "CAD": 0.009, "AUD": 0.008, "CHF": 0.0061, "ARS": 5.7 },
    "CNY": { "USD": 0.14, "BRL": 0.69, "EUR": 0.13, "GBP": 0.11, "JPY": 20.8, "CAD": 0.19, "AUD": 0.21, "CHF": 0.13, "ARS": 120 },
    "CAD": { "USD": 0.75, "BRL": 3.75, "EUR": 0.69, "GBP": 0.59, "JPY": 112.3, "CNY": 5.3, "AUD": 1.13, "CHF": 0.67, "ARS": 640 },
    "AUD": { "USD": 0.66, "BRL": 3.4, "EUR": 0.61, "GBP": 0.53, "JPY": 99.5, "CNY": 4.75, "CAD": 0.88, "CHF": 0.59, "ARS": 560 },
    "CHF": { "USD": 1.1, "BRL": 5.5, "EUR": 1.02, "GBP": 0.88, "JPY": 165.2, "CNY": 7.8, "CAD": 1.49, "AUD": 1.69, "ARS": 960 },
    "ARS": { "USD": 0.0012, "BRL": 0.0058, "EUR": 0.0011, "GBP": 0.00093, "JPY": 0.18, "CNY": 0.0083, "CAD": 0.0016, "AUD": 0.0018, "CHF": 0.0010 }
  };

  function converterMoeda() {
    const valor = parseFloat(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;

    if (isNaN(valor) || de === para) {
      document.getElementById('resultadoConversao').textContent = 'Preencha os campos corretamente.';
      return;
    }

    const taxa = taxasFixas[de][para];
    const convertido = valor * taxa;
    document.getElementById('resultadoConversao').textContent = `Resultado: ${valor} ${de} = ${convertido.toFixed(2)} ${para}`;
  }

  function verificarCambio() {
    const moeda = document.getElementById('verificarCambio').value;
    let texto = `Taxas de câmbio para 1 ${moeda} em outras moedas:\n\n`;
    const taxas = taxasFixas[moeda];

    for (const [destino, valor] of Object.entries(taxas)) {
      texto += `1 ${moeda} = ${valor} ${destino}\n`;
    }
    document.getElementById('resultadoCambio').textContent = texto;
  }

  
  function createInfiniteBubbles() {
    const container = document.getElementById("bubbles");
    const numberOfBubbles = 90;
    
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 6 + 4; 
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      const animationDuration = `${7 + Math.random() * 2}s`;
      const animationDelay = `${Math.random() * 5}s`;

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}px`;
      bubble.style.top = `${top}px`;
      bubble.style.animationDuration = animationDuration;
      bubble.style.animationDelay = animationDelay;

      container.appendChild(bubble);
    }
  }


  window.onload = () => {
    createInfiniteBubbles();
  };