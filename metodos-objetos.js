const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '11772255331',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511999999998'],
    // enderecos: [{
    //     rua: 'Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto 43'
    // },
    // {
    //     rua: 'Dona Clotilde',
    //     numero: '71',
    //     complemento: null
    // }]
}


const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if(!chavesObjeto.includes('enderecos')){
    console.error('é necessário ter um enderço cadastrado');
}

console.log(Object.entries(estudante));