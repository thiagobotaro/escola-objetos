const calculadora = {

    soma: ((num1, num2) => num1 + num2),
    subtracao: ((num1, num2) => num1 - num2),
    multiplicacao: ((num1, num2) => num1 * num2),
    divisao: ((num1, num2) => num1 / num2),
    media: function(array){
        const soma = array.reduce((total, numero) => total + numero, 0);
        return soma / array.length;
    }
}

const numeros = [2, 2, 2, 4];

const operacao = calculadora.divisao(8,8);
const mediaDeNumeros = calculadora.media(numeros);

console.log(operacao);
console.log(mediaDeNumeros);