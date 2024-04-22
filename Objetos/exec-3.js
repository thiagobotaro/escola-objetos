const pessoas = [
    {
    nome: 'Thiago',
    idade: 34,
    cidade: 'São José do Rio Preto'
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
    console.log('-----------Lista de Pessoas------------');
    obj.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
    console.log('-----------------FIM--------------------');
}

function filtrarPorCidade(lista, nomeCidade){
    return lista.filter(lista => lista.cidade === nomeCidade);
    };

pessoas.push({nome: 'Helena', idade: 2, cidade: 'São Paulo'});

mostrarInfoPessoa(pessoas);
const pessoasSaoPaulo = filtrarPorCidade(pessoas, 'São Paulo');
console.log(pessoasSaoPaulo);

