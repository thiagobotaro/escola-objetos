const pessoa = {
    nome: 'Thiago Botaro',
    idade: 34,
    solteiro: false,
    hobbies: ['eletrônica','games', 'codar']
}

function mostrarInfoPessoa(obj){
    console.log('Nome: ', obj.nome);
    console.log('Idade: ', obj.idade);
    console.log('Solteiro: ', obj.solteiro);
    console.log('Hobbies: ', obj.hobbies.join(', '));
    console.log('Endereço: ', obj.endereco);
}

pessoa.endereco = {
    rua: 'dos Brasões',
    cidade: 'São Paulo',
    estado: 'São Paulo'
}

mostrarInfoPessoa(pessoa);