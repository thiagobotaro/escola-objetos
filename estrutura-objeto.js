const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '11772255331',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(estudante['cpf']);