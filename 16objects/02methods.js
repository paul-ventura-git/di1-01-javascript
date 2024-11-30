const persona_uno = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return "Nombre: " + this.firstName + ". Apellido: " + this.lastName;
  }
};

let name1 = person.fullName();

console.log(name1)
