let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  let nombre = input.value;
  if (!nombre.trim()) {
    alert('El nombre no puede estar vacío.');
    return;
  }
  nombre = nombre.trim();
  const lowerNames = amigos.map(n => n.toLowerCase());
  if (lowerNames.includes(nombre.toLowerCase())) {
    alert('Este nombre ya existe.');
    return;
  }
  amigos.push(nombre);
  input.value = '';
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(function(amigo) {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }
  if (amigos.length < 2) {
    alert('Se necesitan al menos 2 amigos para sortear.');
    return;
  }
  const index = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[index];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '<div class="sorteado">Tu amigo secreto es: ' + amigoSecreto + '</div>';
}

function reiniciarSorteo() {
  amigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
  alert('Lista limpiada. Puedes comenzar un nuevo sorteo.');
}