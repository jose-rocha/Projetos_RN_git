(function hedate(win, doc) {
  "use strict";

  function app(adiant, salario) {
    this.adiant = adiant;
    this.salario = salario;
  }

  app.prototype.percent = function () {
    return (this.adiant * 100) / this.salario;
  };

  app.prototype.result = function () {
    return `O funcionário recebeu ${
      this.adiant
    }R$ que é igual a ${this.percent().toFixed(2)}% do seu ao salário ${
      this.salario
    }`;
  };

  function alertar() {
    alert("faz parte do arquivo script.js");
  }

  win.app = app;
})(window, document);
