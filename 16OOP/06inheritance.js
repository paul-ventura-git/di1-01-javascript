// Inheritance example
class person {
  constructor(name) {
      this.name = name;
  }
  // method to return the string
  toString(name) {    
    return (`Mi nombre es : ${this.name}`);
  }
}

class student extends person {
  constructor(name, id) {
      // super keyword for calling the above 
      // class constructor
      super(name); // this.name = name // person.constructor(name)
      this.id = id;
  }
  toString() {
      return (`${super.toString()}, Student ID: ${this.id}`);
  }
}

let student1 = new student('Mukul', 22);
console.log(student1.toString());