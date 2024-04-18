const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '11772255331',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999999998'],
    enderecos: [{
        rua: 'Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}


estudante.enderecos.push({
    rua: 'Dona Clotilde',
    numero: '71',
    complemento: ''
})


function exibirTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}


// evitar chumbar a o registro do array no objeto
exibirTelefones(estudante.telefones[0],estudante.telefones[1]);

// maneira mais comum usando o spread operator
exibirTelefones(...estudante.telefones);


const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);