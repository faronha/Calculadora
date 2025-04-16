let expressao = "";
const tela = document.getElementById("tela");
function atualizarTela() {
  tela.textContent = expressao || "0";
}
function adicionar(valor) {
  expressao += valor;
  atualizarTela();
}
function limpar() {
  expressao = "";
  atualizarTela();
}
function voltar() {
  expressao = expressao.slice(0, -1);
  atualizarTela();
}
function calcular() {
  try {
    const resultado = eval(expressao);
    expressao = resultado.toString();
  } catch {
    expressao = "Erro";
  }
  atualizarTela();
}

document.querySelector('.check-select').addEventListener('click', function(){
  const choose = document.querySelector('#choose-model');
  if(choose.value == 1) {
    document.querySelector('.area-percent1').style.display = 'block';
    document.querySelector('.area-percent2').style.display = "none";
  } else {
    document.querySelector('.area-percent1').style.display = 'none';
    document.querySelector('.area-percent2').style.display = "block";
  }
});

document.querySelector('.btn-calc').addEventListener('click', function(){
  const n1 = Number(document.querySelector('#percent').value);
  const n2 = Number(document.querySelector('#value-percent').value);
  const calc = (n1 / 100) * n2;
  document.querySelector('.result').innerHTML = calc.toFixed(2);
});

document.querySelector('.btn-clear').addEventListener('click', function(){
  document.querySelector('.result').innerHTML = "--";
  document.querySelector('#percent').value = "";
  document.querySelector('#value-percent').value = "";
});

document.querySelector('.btn-calc2').addEventListener('click', function(){
  const n1 = Number(document.querySelector('#percent2').value);
  const n2 = Number(document.querySelector('#value-percent2').value);
  const calc = (n1 * 100) / n2;
  document.querySelector('.result2').innerHTML = calc.toFixed(2) + ' %';
});

document.querySelector('.btn-clear2').addEventListener('click', function(){
  document.querySelector('.result2').innerHTML = "--";
  document.querySelector('#percent2').value = "";
  document.querySelector('#value-percent2').value = "";
});

function onlynumber(evt) {
  let key = evt.key;
  if (!/[0-9.]/.test(key)) {
    evt.preventDefault();
    alert('Somente números é permitido!');
  }
}

// onlynumber organizado por ia

function toggleAccordion(button) {
  const arrow = button.querySelector('.arrow');
  const content = button.nextElementSibling;

  button.classList.toggle('active');
  content.classList.toggle('open');
}

function rest(){
  window.location.href="restaurante.html"
}
function convert(){
  window.location.href="convert.html"
}

