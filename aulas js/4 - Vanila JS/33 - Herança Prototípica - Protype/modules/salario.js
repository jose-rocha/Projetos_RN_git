function salarios() {
  "use strict";

  function person(names) {
    this.names = "José";
    /*  this.salario = function () {
      return salario;

      //   console.log(salario);
    }; */
  }
  person.prototype.salarios = function () {
    return salarios;
  };

  let obj = new person();
  let obj2 = new person();
  console.log(obj);
  console.log(obj2);
}

export default salarios;
