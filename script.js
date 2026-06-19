

// Lista de itens para o jogo educativo de adivinhação
const itensJogo = [
    { nome: "🍎 Maçã Fresca", origem: "campo" },
    { nome: "🚜 Trator com GPS", origem: "cidade" },
    { nome: "🥛 Leite Integral", origem: "campo" },
    { nome: "📱 Smartphone / Aplicativo do Tempo", origem: "cidade" },
    { nome: "🌽 Milho Verde", origem: "campo" },
    { nome: "🧪 Fertilizantes Científicos", origem: "cidade" }
];

let itemAtualIndex = 0;

// Função que verifica a resposta do usuário
function verificarOrigem(escolhaUsuario) {
    const itemAtual = itensJogo[itemAtualIndex];
    const feedbackElemento = document.getElementById("resultado-feedback");

    if (escolhaUsuario === itemAtual.origem) {
        feedbackElemento.style.color = "#2e7d32"; // Verde para acerto
        feedbackElemento.innerText = "Parabéns! Você acertou! 🎉";
    } else {
        feedbackElemento.style.color = "#c62828"; // Vermelho para erro
        if (itemAtual.origem === "campo") {
            feedbackElemento.innerText = "Quase lá! Este item vem da dedicação da terra e do produtor rural (Campo).";
        } else {
            feedbackElemento.innerText = "Quase lá! Este item nasce da tecnologia, pesquisa e fábricas (Cidade).";
        }
    }

    // Avança para o próximo item após 2.5 segundos
    setTimeout(() => {
        itemAtualIndex = (itemAtualIndex + 1) % itensJogo.length; // Cicla entre os itens
        document.getElementById("game-item").innerText = itensJogo[itemAtualIndex].nome;
        feedbackElemento.innerText = ""; // Limpa o feedback
    }, 2500);
}
