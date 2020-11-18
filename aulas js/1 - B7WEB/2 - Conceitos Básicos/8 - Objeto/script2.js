//objeto {} array []
/* let carro = {
  nome: "Fiat",
  modelo: "Uno",
  peso: "1000kg",
  ligado: false,
  ligar: function () {
    console.log("Ligando o " + this.modelo);
    this.ligado = true;
    console.log("VRUM VRUM");
  },
  acelerar: function () {
    if (this.ligado == true) {
      console.log("BREM BREM");
    } else {
      console.log("O " + this.nome + " " + this.modelo + " não está ligado! ");
    }
  },
};

console.log("Modelo do carro: " + carro.modelo);

carro.ligar();
carro.acelerar(); */

// array [] com objetos {} = { [] }
let carros = [
  { nome: "Fiat", modelo: "Palio" },
  { nome: "Fiat", modelo: "Uno" },
  { nome: "Toyta", modelo: "Corolla" },
  { nome: "Ferrari", modelo: "Spider" },
];

console.log(carros[2].modelo);
