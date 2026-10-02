// ? Classes são representações do mundo real
// ? Servem para que um determinado "objeto" no mundo real existe no código
// ? Muitas vezes utilizados em cadastro .
// ? Não são muito diferentes de 'objetos' do Javascript
// ? Mas possuem  mais possibilidades
class Carro {
// ? O chamado "Método construtor" ele é responsável por construir os objetos  (Os carros cadastrados)
constructor(marca,modelo,ano,cor){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
    this.velocidade = 0
}

// ? Ações são funçoes 
// ? mas aqui não usamos a palavra 'function'

acelerar(){
    this.velocidade += 10
    console.log("O carro " + this.marca + " - " + this.modelo + " acelerou mais 10km/h e agora está a " + this.velocidade + " km/h")
    console.log("-".repeat(20))

    }
}

// ? Gerando objetos da classe carro
// ? Gerando cadastro de carro
// ? Função = método

// ? let variável = new CarroClasse()
let carro1 = new Carro("Fiat", "Marea", "2005", "Prata")
let carro2 =  new Carro("Peugeout", "206", "2003", "Preto")

// ? Mostrando o carro
console.log("Carro 1: " + carro1.marca + " - " + carro1.modelo)

// ? executando uma "Ação"

carro1.acelerar()


