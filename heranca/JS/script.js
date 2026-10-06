class Veiculo{
    constructor(modelo, marca){
        this.modelo = modelo
        this.marca = marca
        this.velocidade = 0
    
    }

    acelerar(){
        this.velocidade += 10
        console.log(`0 ${this.marca} - ${this.modelo} acelerou e agora está a ${this.velocidade} km/h`)


    }
    
}

// ? A class Moto é filho/derivado de veiculo
class Moto extends Veiculo {
    constructor(modelo,marca,cilindradas){
        // ? já que ele é filho de veiculo, as infos (que o veiculo controla) deixamos para ele [veiculo~]
        // ? chamamos o metodo construtor do pai (veiculo) com a palavra super
        super(modelo,marca)
        this.cilindradas =  cilindradas + "CC"
    }
    empinar(){
        console.log(`A moto ${this.marca} - {this.modelo} está empinando`)
    }
}

class Carro extends Veiculo {
    constructor(modelo,marca,qtdPortas){
        super(modelo,marca)
        this.qtdPortas = qtdPortas

    }
    fazerBaliza(){
        console.log(`O carro ${this.marca} - {this.modelo} está fazendo baliza`)
    }
}
// ? Utilizando as classes criando objetos com herança

let moto1 = new Moto("Fan", "Honda", 150)
let moto2 = new Moto ("CBR", "Honda", 300)

let carro1 = new Carro ("Marea","Fiat", 4)
let carro2 = new Carro ("Monza","Chevrolet",4)

moto1.acelerar()
moto1.acelerar()
moto1.acelerar()

carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()

// ? Usamos métodos especificos das classes filhos

moto2.empinar

carro1.fazerBaliza

// ? Dará erro carro1 empinar
// ? pois o carro não possui o método/função de empinar