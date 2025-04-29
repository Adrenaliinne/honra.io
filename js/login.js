function toggleSenha() {
  const senha = document.getElementById('senha');
  senha.type = senha.type === 'password' ? 'text' : 'password';
}
function alternarTema() {
  document.body.classList.toggle('dark');
}
function criarConta() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const permitidos = ['adrenalinnedmc@gmail.com','Vjean2354@gmail.com','brenohenrique9406@gmail.com'];
  if (!permitidos.includes(email)) return alert('E-mail não autorizado.');
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
  usuarios[email] = senha;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert('Conta criada!');
}
function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
  if (usuarios[email] === senha) {
    localStorage.setItem('logado', email);
    location.href = 'dashboard.html';
  } else alert('Login inválido');
}