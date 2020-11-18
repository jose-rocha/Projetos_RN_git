import ClassPerson from "./ClassPerson.js";

export default class ClassBaby extends ClassPerson {
  constructor() {
    super();
  }

  chorar() {
    return super.comeu() + 'e chorou!';
  }
}
