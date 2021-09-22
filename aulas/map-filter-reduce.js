const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);
