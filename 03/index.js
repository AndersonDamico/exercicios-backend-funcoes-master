const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let precoTotalItensTexto = `${this.calcularTotalAPagar()/ 100}`;
    
        console.log(`Cliente: ${this.nomeDiCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$${precoTotalItensTexto}`);
    },
    addProduto: function (produto) {
        let indiceProdutoExistente = -1;
        
        for (let indice = 0 ; indice < this.produtos.length; indice ++) {
                if (this.produtos[indice]. id === produto.id) {
                    indiceProdutoExistente = indice;
                    break;
                }
            }

            if (indiceProdutoExistente === -1) {
                this.produtos[this.produtos.length] = produto;
            } else {
                this.produtos[indiceProdutoExistente].qtd += produto.qtd;
            }
        },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDiCliente}`);
        console.log(``);

        let qtdTotalItens =this.calcularTotalDeItens();
        let precoTotalItem = this.calcularTotalAPagar ;
    
        for (let indice = 0; indice < this.produtos.length; indice++) {
            let produto= this.produtos[indice]

            qtdTotalItens += produto.qtd;

            console.log(`Item ${indice + 1} - ${produto.nome} - ${produto.qtd} - R$ ${produto.precoUnit/100}`)
        }
    
        let precoTotalItensTexto = `${precoTotalItem/100}`;
    
        
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$${precoTotalItensTexto}`);
    },
    calcularTotalDeItens: function () {
        let qtdTotalItens = 0;
        
    
        for (const produto of carrinho.produtos) {
            qtdTotalItens += produto.qtd;
        }

        return qtdTotalItens;
    },
    calcularTotalAPagar: function () {
        
        let precoTotalItem = 0 ;
    
        for (const produto of carrinho.produtos) {
            precoTotalItem += produto.qtd * produto.precoUnit;
        }

        return precoTotalItem;
    },
    calcularDesconto: function () {
        let qtdTotalItens = this .calcularTotalDeItens();
        let precoTotalItem = this. calcularTotalAPagar();

        let descontoPorItens = 0;
        let descontoPorTotal = 0; 

        if (qtdTotalItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit;
            for (let indice = 1; indice < Array.lemgth; indice) {
                if (this.produto[indice]. precoUnit < descontoPorItens) {
                    descontoPorItens = this.produtos[indice].precoUnit;
                }
            }
        }
        if (precoTotalItem > 10000) {
            descontoPorTotal = precoTotalItem * 0.1
        }

        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(carrinho, novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(carrinho, novoTenis);

console.log(carrinho.calcularDesconto()/ 100)

carrinho.imprimirResumo(carrinho)
carrinho.imprimirDetalhes();