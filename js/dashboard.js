function logout() {
  localStorage.removeItem('logado');
  location.href = 'index.html';
}
function alternarTema() {
  document.body.classList.toggle('dark');
}
function abrirAba(aba) {
  document.getElementById('conteudo').innerHTML = localStorage.getItem(`html-${aba}`) || `<h3>${aba}</h3>`;
}
function limpar() {
  localStorage.clear();
  alert('Dados apagados.');
  logout();
}