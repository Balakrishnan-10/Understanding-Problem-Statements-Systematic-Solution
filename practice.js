//* 1. Find the difference of two integers :

function differenceOfTwoIntegers(num1, num2) {
  console.log(num1, num2);
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 - num2;
}
console.log(differenceOfTwoIntegers(5, 3));
console.log(differenceOfTwoIntegers(5, "8"));
console.log(differenceOfTwoIntegers("12", 3));

//! ---------------------------------------------------------------------

//* 2. Check if a number is even or odd.

function evenOrOdd(num) {
  console.log(num);
  num = Number(num);
  if (num % 2 == 0) {
    return "Even Number";
  } else return "Odd Number";
}
console.log(evenOrOdd(12));
console.log(evenOrOdd(7));
console.log(evenOrOdd("23"));
console.log(evenOrOdd(-6));

//! ---------------------------------------------------------------------
