for (let index = 1; index <= 20; index++) {
  console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}

cars.forEach(function (car, index) {
  console.log(index);
  console.log(car);
});
