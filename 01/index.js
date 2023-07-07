const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
const corrigirProva = (prova) => {
 let questoesCorretas = 0;
 
    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++
        }
    }

    let valorPorQuestao = prova.valor / prova.questoes.length;

    let notaDaProva = valorPorQuestao * questoesCorreta;

   console.log (`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${notaDaProva}`)
}
