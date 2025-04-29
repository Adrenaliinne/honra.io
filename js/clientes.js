localStorage.setItem('html-clientes', `
  <h2>Clientes</h2>
  <input type='text' id='nomeCli' placeholder='Nome'>
  <button onclick='addCliente()'>Adicionar</button>
  <ul id='listaCli'></ul>
`);
window.addCliente = () => {
  const nome = document.getElementById('nomeCli').value;
  const li = document.createElement('li');
  li.textContent = nome + ' ';
  const btn = document.createElement('button');
  btn.textContent = 'Remover';
  btn.onclick = () => li.remove();
  li.appendChild(btn);
  document.getElementById('listaCli').appendChild(li);
};