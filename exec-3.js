const pessoas = [
    {
    nome: 'Thiago',
    idade: 34,
    cidade: 'São Paulo'
    },
    {
        nome: 'Eduardo',
        idade: 24,
        cidade: 'São Paulo'
    },
    {
        nome: 'Tathiana',
        idade: 33,
        cidade: 'São Paulo'
    }
]

function mostrarInfoPessoa(obj){
    console.log(pessoas[obj]);
}

function filtrarPorCidade(obj, city){
    obj.filter((city) => city === this.cidade);
}

pessoas.push({nome: 'Helena', idade: 2, cidade: 'São Paulo'});

// mostrarInfoPessoa(3);
filtrarPorCidade(pessoas, 'São Paulo');