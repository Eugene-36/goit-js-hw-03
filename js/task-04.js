const countTotalSalary = function(employees) {
    'use strict';
    // Write code under this line
    let sum = 0;
  for(let salary of Object.values(employees)){
      sum += salary;
  }
  return sum;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
      mango: 300,
      poly: 250,
      alfred: 450,
  };
  console.log(countTotalSalary(developers));
  // 1000
  
  const supports = {
    kiwi: 200,
    lux: 150,
    chelsy: 150,
  }
  console.log(countTotalSalary(supports));
  // 500
  