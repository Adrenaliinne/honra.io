localStorage.setItem('html-financeiro', `
  <h2>Financeiro</h2>
  <input type='number' id='valorFin'>
  <select id='tipoFin'><option>Entrada</option><option>Saída</option></select>
  <button onclick='addMovimentacao()'>Adicionar</button>
  <ul id='listaFin'></ul>
  <p id='saldoFin'>Saldo: R$ 0</p>
`);
let saldo = 0;
window.addMovimentacao = () => {
  const valor = parseFloat(document.getElementById('valorFin').value);
  const tipo = document.getElementById('tipoFin').value;
  const li = document.createElement('li');
  li.textContent = `${tipo}: R$ ${valor.toFixed(2)}`;
  document.getElementById('listaFin').appendChild(li);
  saldo += tipo === 'Entrada' ? valor : -valor;
  document.getElementById('saldoFin').textContent = 'Saldo: R$ ' + saldo.toFixed(2);
};