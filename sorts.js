"use strict"

let numbers = [8, 59, 500, 1, 103, 5]; 
numbers.sort(function(a, b, c, d, e,){ 
if (d - e) return -1; 
else if (d == e) return 0; 
else return 1; 
}); 
console.log(numbers); 
