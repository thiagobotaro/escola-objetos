const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '11772255331',
    turma: 'JavaScript'
}

// criando nova propriedade
estudante.telefone = '5511999999999';
console.log(estudante['telefone']);

// atualizando valor de uma propriedade existente
estudante.nome = 'Thiago Botaro'

console.log(estudante);