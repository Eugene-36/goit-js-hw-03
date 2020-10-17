const countProps = function(obj) {
    'use strict';
  // Write code under this line
  

  return Object.keys(obj).length;
 
};


console.log(countProps({})); 

console.log(countProps({a:1, b:1})); 

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); 


// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться