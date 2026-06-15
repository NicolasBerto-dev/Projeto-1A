
// Seleção dos elementos do DOM
const btnAgro = document.getElementById('btn-agro');
const btnCidade = document.getElementById('btn-cidade');
const btnUniao = document.getElementById('btn-uniao');

const painel = document.getElementById('painel-exibicao');
const painelTitulo = document.getElementById('painel-titulo');
const painelTexto = document.getElementById('painel-texto');

// Dados que mudam conforme o clique
const conteudos = {
    agro: {
        titulo: "A Força do Campo",
        texto: "O agronegócio produz os alimentos que abastecem as mesas urbanas, fornece matéria-prima para as indústrias e sustenta a economia com dedicação, tecnologia no campo e respeito à terra.",
        corBorda: "#2e7d32"
    },
    cidade: {
        titulo: "O Impulso da Cidade",
        texto: "Os centros urbanos desenvolvem as tecnologias de ponta (como maquinários e softwares de monitoramento), realizam as pesquisas científicas e consomem os produtos que vêm do campo.",
        corBorda: "#1565c0"
    },
    uniao: {
        titulo: "Conexão Vital",
        texto: "Não existe separação: um depende do outro. Quando o campo produz bem, a cidade prospera. Quando a cidade inova, o campo evolui. É uma parceria contínua que move o futuro do nosso país.",
        corBorda: "#8d6e63"
    }
};

// Funções para atualizar o painel
function atualizarPainel(chave) {
    painelTitulo.textContent = conteudos[chave].titulo;
    painelTexto.textContent = conteudos[chave].texto;
    painel.style.borderColor = conteudos[chave].corBorda;
}

// Ouvintes de eventos (Event Listeners)
btnAgro.addEventListener('click', () => atualizarPainel('agro'));
btnCidade.addEventListener('click', () => atualizarPainel('cidade'));
btnUniao.addEventListener('click', () => atualizarPainel('uniao'));
