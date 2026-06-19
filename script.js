

// Alterna entre seções do site
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');

  secoes.forEach(secao => {
    secao.classList.remove('ativa');
  });

  document.getElementById(id).classList.add('ativa');
}

// Mensagem dinâmica
function trocarMensagem() {
  const mensagens = [
    "O campo e a cidade trabalham juntos para alimentar o mundo 🌎",
    "A natureza e a tecnologia podem viver em equilíbrio 🌱",
    "Cada alimento na sua mesa vem dessa conexão incrível 🍞"
  ];

  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
}

// Curiosidade dinâmica
function mostrarFato() {
  const fatos = [
    "Mais de 70% dos alimentos consumidos nas cidades vêm do campo.",
    "A tecnologia ajuda o campo a produzir mais com menos impacto ambiental.",
    "A logística conecta fazendas a supermercados em poucas horas."
  ];

  const aleatorio = fatos[Math.floor(Math.random() * fatos.length)];
  document.getElementById("fato").innerText = aleatorio;
}
