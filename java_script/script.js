// Programa para calcular situação do aluno

function analisarAluno() {
    // Entrada de dados
    let numeroAulas = parseInt(prompt("Informe o número de aulas no semestre:"));
    let faltas = parseInt(prompt("Informe a quantidade de faltas do aluno:"));
    let p1 = parseFloat(prompt("Informe a nota da primeira prova (P1):"));
    let p2 = parseFloat(prompt("Informe a nota da segunda prova (P2):"));

    // Cálculo da frequência
    let frequencia = ((numeroAulas - faltas) / numeroAulas) * 100;

    // Cálculo da média
    let media = (p1 + p2) / 2;
    let recuperacao = null;
    let situacao = "";

    // Verificação das condições
    if (frequencia < 75) {
        situacao = "Reprovado por falta";
    } else {
        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5 && media < 7) {
            recuperacao = parseFloat(prompt("Aluno em recuperação. Informe a nota da recuperação:"));
            let novaMedia = (media + recuperacao) / 2;
            if (novaMedia >= 5) {
                situacao = "Aprovado na recuperação";
            } else {
                situacao = "Reprovado após recuperação";
            }
        } else {
            situacao = "Reprovado por nota";
        }
    }

    // Exibição dos resultados
    console.log("Número de aulas do semestre: " + numeroAulas);
    console.log("Número de faltas do aluno: " + faltas);
    console.log("Percentual de presença do aluno: " + frequencia.toFixed(2) + "%");
    console.log("Primeira nota (P1): " + p1);
    console.log("Segunda nota (P2): " + p2);
    if (recuperacao !== null) {
        console.log("Nota da recuperação: " + recuperacao);
    }
    console.log("Situação final do aluno: " + situacao);
}

// Executa o programa
analisarAluno();
