localStorage.setItem('html-checklist', `
  <h2>Checklist</h2>
  <input type='text' id='nomeCheck' placeholder='Nome do Cliente'>
  <button onclick='marcarEntrada()'>Entrada</button>
  <button onclick='marcarSaida()'>Saída</button>
  <ul id='listaCheck'></ul>
`);
window.marcarEntrada = () => {
  const nome = document.getElementById('nomeCheck').value;
  const li = document.createElement('li');
  li.textContent = `${nome} entrou às ${new Date().toLocaleTimeString()}`;
  document.getElementById('listaCheck').appendChild(li);
};
window.marcarSaida = () => {
  const nome = document.getElementById('nomeCheck').value;
  const li = document.createElement('li');
  li.textContent = `${nome} saiu às ${new Date().toLocaleTimeString()}`;
  document.getElementById('listaCheck').appendChild(li);
};