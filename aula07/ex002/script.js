const notas = [
    [8, 9, 5],
    [6, 8, 4],
    [10, 10, 10],
    [6, 4, 7]
];

const alunos = ["Aluno A", "Aluno B", "Aluno C", "Aluno D"];
const resultados = [];

for (let i = 0; i < notas.length; i++) {
    const notasAluno = notas[i];
    const somasNotas = notasAluno.reduce((soma, nota) => soma + nota, 0);
    const media = somasNotas / notasAluno.length;
    const situacao = media >= 7 ? "Aprovado" : "Reprovado";

    resultados.push({
        nome: alunos[i], // Corrected variable name
        media: media.toFixed(1),
        situacao: situacao,
        notas: notasAluno
    });
}

// Step 2: Generate the HTML table
let tabelaHTML = `
    <table>
        <thead>
            <tr>
                <th>Aluno</th>
                <th>Prova 1</th>
                <th>Prova 2</th>
                <th>Prova 3</th>
                <th>Média</th>
                <th>Situação</th>
            </tr>
        </thead>
        <tbody>
`;

resultados.forEach(aluno => {
    const situacaoClass = aluno.situacao === "Aprovado" ? "aprovado" : "reprovado";
    tabelaHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.notas[0]}</td>
            <td>${aluno.notas[1]}</td>
            <td>${aluno.notas[2]}</td>
            <td>${aluno.media}</td>
            <td class="${situacaoClass}">${aluno.situacao}</td>
        </tr>
    `;
});

tabelaHTML += `
        </tbody>
    </table>
`;

// Step 3: Insert the generated HTML into the DOM
document.getElementById("tabela-notas-container").innerHTML = tabelaHTML;