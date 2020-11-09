import ClassJob from "./ClassJob.js";

export default class ClassPerson extends ClassJob {
  //Não tem necessidade de colocar function
  constructor() {
    super();
  }

  setPerson(name, age) {
    this.name = name;
    this.age = age;
  }

  getData() {
    return ` ${super.getFunc()}`;
  }
}
