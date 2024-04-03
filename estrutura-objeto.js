const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '11772255331',
    turma: 'JavaScript'
}
// notação de ponto
console.log(`O nome do(a) estudante é ${estudante.nome}`);
console.log(`A idade do(a) estudante é ${estudante.idade}`);
console.log(`Os três primeiros digitos do CPF são: ${estudante.cpf.substring(0, 3)}`);