// 1. for ARRAYS
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];

// "destructuring" the first two elements into to variables "one" and "two"
// then the rest into one variable "rest"
const [one, two, ...rest] = numbers;
console.log(one, two, rest);

// 2. for OBJECTS
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  //repeated properties are overwritten
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)