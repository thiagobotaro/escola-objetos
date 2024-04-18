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
    },
    {
        rua: 'Dona Clotilde',
        numero: '71',
        complemento: ''
    }]
}

for(let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
}

