function calcularGorjeta() {
    const valorConta = parseFloat(document.getElementById('conta').value);
    const porcentagem = parseFloat(document.getElementById('gorjeta').value);

    if (isNaN(valorConta) || isNaN(porcentagem)) {
      document.getElementById('resultadoGorjeta').textContent = 'Preencha os campos corretamente.';
      return;
    }

    const valorGorjeta = (valorConta * porcentagem) / 100;
    const total = valorConta + valorGorjeta;

    document.getElementById('resultadoGorjeta').textContent = `Gorjeta: R$ ${valorGorjeta.toFixed(2)} | Total: R$ ${total.toFixed(2)}`;
  }

  function dividirConta() {
    const total = parseFloat(document.getElementById('total').value);
    const pessoas = parseInt(document.getElementById('pessoas').value);

    if (isNaN(total) || isNaN(pessoas) || pessoas <= 0) {
      document.getElementById('resultadoDivisao').textContent = 'Preencha os campos corretamente.';
      return;
    }

    const valorPorPessoa = total / pessoas;

   document.getElementById('resultadoDivisao').textContent = `Cada pessoa paga: R$ ${valorPorPessoa.toFixed(2)}`;
  }

  function voltar(){
    window.location.href="calc.html"
  }
  