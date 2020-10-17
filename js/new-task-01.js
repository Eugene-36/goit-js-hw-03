function arithmetic(a, b, operator){
    //your code here!
    switch(operator) {
        case "add": {
          return a + b;
        }
        case "subtract": {
          return a - b;
        }
        case "multiply": {
          return a * b;
        }
        case "divide": {
          return a / b;
        }
    }
  }










// Учитывая два числа и арифметический оператор (его имя в виде строки), 
// верните результат двух чисел, для которых используется этот оператор.

// a и b оба будут положительными целыми числами,
//  причем a всегда будет первым числом в операции, 
// а b всегда вторым.

// Четыре оператора - это «сложение», «вычитание», «деление», «умножение».

// Несколько примеров:

console.log(arithmetic(5, 2, "add"))
// 7      
console.log(arithmetic(5, 2, "subtract")) 
//  3
console.log(arithmetic(5, 2, "multiply"))  
//  10
console.log(arithmetic(5, 2, "divide"))   
//  2.5