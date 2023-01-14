const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 7.9
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'João',
        nota: 9.6
    }, {
        nome: 'Bia',
        nota: 9.1
    }]
}] 

const getNotaAlunos = a => a.nota
const getnotaTurma = turma => turma.alunos.map(getNotaAlunos)

const notas1 = escola.map(getnotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getnotaTurma)
console.log(notas2)