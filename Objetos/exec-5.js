
const contaBancaria = {
    titular: 'Thiago Botaro',
    saldo: 1000,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    },
}

const cliente = {
    nome: contaBancaria.titular,
    conta: contaBancaria,
}

function mostrarSaldo(obj){
    console.log('Nome: ', obj.nome);
    console.log('Saldo: ', obj.conta.saldo);

}

mostrarSaldo(cliente);

cliente.conta.depositar(500);
console.log('Novo Saldo(deposito): ', cliente.conta.saldo);
cliente.conta.sacar(200);
console.log('Novo Saldo(saque): ', cliente.conta.saldo);