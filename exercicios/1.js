// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

const pessoa = {
    nome: 'Thiago Botaro',
    notas: [10, 8, 7, 5],

    calcularMediaNotas: function(){
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2);
    },
    classificarDesempenho: function(){
        const media = this.calcularMediaNotas();

        if(media >= 9){
            return 'Desempenho excelente';
        }else if(media >= 7.5 && media <= 8.9){
            return 'Bom desempenho';
        }else if(media >= 6 && media < 7.5){
            return 'Desempenho regular';
        }else{
            return 'Desempenho insuficiente';
        }
    }
}

// Calculando e exibindo a média de notas
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(mediaCalculada);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(categoriaDesempenho);