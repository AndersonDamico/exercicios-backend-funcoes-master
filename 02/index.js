const carro = {
    ligado : false,
    velocidade : 0,
    devolveStatusTexto: function () {
        return this.ligado ? 'ligado' : 'desligado'
    },
    imprimirStatusEVelocidade: function () {
        console.log(`crro ${this.devolveStatusTexto()}. velocidade: ${this.velocidade}.`);
    },
    ligafo : function () {
        if (this.ligado) {
            console.log("este carro ja estaa ligado.")
        } else {
            this.ligado = true;
            this.imprimirStatusEVelocidade();
        }
    },
    desligar : function () {
        if(!this.ligado) {
            console.log ('Este carro já está desligado.');
        }else {
            this.ligado = false;
            this.velocidade = 0;
            this.imprimirStatusEVelocidade();
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possivel acelerar um carro desligado.");
        } else {
            this. velocidade += 10;
            this.imprimirStatusEVelocidade(); 
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possivel acelerar um carro desligado.");
        } else {
            this. velocidade -= 10;
            this.imprimirStatusEVelocidade();
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
