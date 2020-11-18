function prototype() {
  "use strict";

  function person(name) {
    this.name = name;
  }
  let obj = new person("José");
  console.log(obj);
}

export default prototype;
