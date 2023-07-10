const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saudo += valor;
        this.historicos[this.historicos.lengh] = {
            tipo: "deposito",
            valor:valor
        }

        console.log(`Deposito de R$ ${valor / 100} realizado para o cliente ${this.nome}.`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: %{this.name}.`)
        }

        this.saldo -= valor;
        this.historicos[this.historicos.length] = {
            tipo: "saque",
            valor: valor
        }
        console.log(`Saque de R$ ${valor / 100} realizado para o cliente ${this.nome}.`);
    },
    extrato: function () {
        console.log(`extrato de R$ ${this.name} - Saldo${this.saldo}.`);
        console.log('Historico:');
        for (const historico of this.historicos) {
            console.log(`${historico.tipo} de R$ ${historico.valor /100}`)
        }
    }
}

contaBancaria.depositar(30000)
contaBancaria.sacar(50000)
contaBancaria.extrato();
