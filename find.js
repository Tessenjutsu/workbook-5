"use strict";

let numbers = [5, 15, 30, 80, 100, 120, 150, 200];

function isOver100(arrayValue) {
  if (arrayValue = 100) {
    return true;
  } else {
    return false;
  }
}

let firstValueOver100 = numbers.filter(isOver100);
console.log(firstValueOver100);