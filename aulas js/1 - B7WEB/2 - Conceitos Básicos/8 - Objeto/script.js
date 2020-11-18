//objeto
let carro = {
  nome: "Fiat",
  modelo: "Uno",
  peso: "1000kg",
  ligar: function () {
    console.log("VRUM VRUM");
  },
  acelerar: function () {
    console.log("BREM BREM");
  },
};

console.log("Modelo do carro: " + carro.modelo);

carro.ligar();

carro.acelerar();
