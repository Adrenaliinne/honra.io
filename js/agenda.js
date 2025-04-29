localStorage.setItem('html-agenda', `
  <h2>Agenda Semanal</h2>
  <input type='date' id='dataAg'>
  <input type='text' id='descAg' placeholder='Descrição'>
  <button onclick='addAgendamento()'>Adicionar</button>
  <ul id='listaAg'></ul>
`);
window.addAgendamento = () => {
  const data = document.getElementById('dataAg').value;
  const desc = document.getElementById('descAg').value;
  const li = document.createElement('li');
  li.textContent = `${data} - ${desc}`;
  document.getElementById('listaAg').appendChild(li);
};