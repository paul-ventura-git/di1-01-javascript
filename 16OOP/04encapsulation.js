// Encapsulation example
class person {
  constructor(name, id) {
      this.name = name;
      this.id = id;
  }
  setAddress(address) {
      this.address = address;
  }
  getDetails() {
      console.log(`Name is ${this.name},
      Address is: ${this.address}`);
  }
}

let person1 = new person('Mukul', 21);
person1.setAddress('Delhi');
person1.setAddress('Lima');
person1.getDetails();
