//* 1. Find the difference of two integers.

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

//* 3. Calculate the perimeter of the Rectangle.

function perimeterOfRectangle (length,width) {
    console.log(length,width);
    length = Number(length);
    width = Number(width);
    return "Perimeter of a Rectangle P = " + 2 * (length+width);

}
console.log(perimeterOfRectangle(5,6));
console.log(perimeterOfRectangle("8",7));
console.log(perimeterOfRectangle("-4",2));

//! ---------------------------------------------------------------------


