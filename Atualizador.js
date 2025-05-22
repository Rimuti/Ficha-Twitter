// Função para calcular a idade em anos, meses e dias
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let anos = hoje.getFullYear() - dataNascimento.getFullYear();
    let meses = hoje.getMonth() - dataNascimento.getMonth();
    let dias = hoje.getDate() - dataNascimento.getDate();

    if (dias < 0) {
        meses--;
        const mesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias };
}

// Função para calcular o número de dias vividos desde 02 de julho de 2001
function calcularDiasDeVida(dataInicio) {
    const dataAtual = new Date();
    const inicio = new Date(dataInicio);

    // Calcula a diferença entre as duas datas em milissegundos
    const diferencaEmMs = dataAtual - inicio;

    // Converte a diferença de milissegundos para dias
    return Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));
}

// Função para atualizar o EXP e Level, com zeragem do EXP no dia 02 de julho
function atualizarExpELevel() {
    const dataNascimento = new Date('2001-07-02');
    const dataAtual = new Date();

    // Calcular a idade
    const idade = calcularIdade(dataNascimento);

    // Calcular os dias de vida desde 02 de julho de 2001 até a data atual
    const diasDeVida = calcularDiasDeVida(dataNascimento);

    // Inicializando as variáveis de EXP e Level
    let exp = 0;
    let level = idade.anos;

    // Verifica se o dia atual é 02 de julho e, se for, zera o EXP
    if (dataAtual.getDate() === 2 && dataAtual.getMonth() === 6) {
        exp = 0;  // Zera o EXP no dia 02 de julho
    } else {
        // Caso contrário, o EXP é o número total de dias vividos no ano
        exp = diasDeVida % 365; // Isso faz o EXP resetar a cada ano
    }

    // Atualiza o level a cada ano completo desde 2001
    level = Math.floor(diasDeVida / 365); // Considerando anos completos desde 2001

    // Atualiza os elementos na página
    document.getElementById('level').textContent = level;
    document.getElementById('exp-counter').textContent = exp + " dias vividos";

    // Atualizar a descrição com a idade atual
    document.getElementById('descricao').textContent = `Sou um homem de ${idade.anos} anos com autismo e tenho um senso de justiça muito grande, ou seja,
        detesto pessoas que cometem injustiças ao ponto de surtar. No entanto, posso acabar
        sendo um pouco hipócrita algumas vezes...`;
}

// Chama a função para atualizar o EXP e Level ao carregar a página
window.onload = atualizarExpELevel;
