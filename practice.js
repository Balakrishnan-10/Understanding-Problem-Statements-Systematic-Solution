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

//* 4. Find the Largest number of four Numbers.

function largestNumber (num1,num2,num3,num4) {
  console.log(num1,num2,num3,num4);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  num4 = Number(num4);
  // let largestNumber = Math.max(num1,num2,num3,num4);
  // return largestNumber;

  let max = num1 > num2 ? (num1 > num3 ? (num1 > num4 ? num1 : num4) : (num3 > num4 ? num3 :num4)) : (num2 > num3 ? (num2 > num4 ? num2 : num4) : (num3 > num4 ? num3 : num4));
  return max;
}
console.log(largestNumber(22,8,102,16));
console.log(largestNumber(22,8,"365",16));
console.log(largestNumber(-22,-8,-102,-16));

//! ---------------------------------------------------------------------

//* 5. Calculate the Average of three numbers.

function calculateAverage (num1,num2,num3){
  console.log(num1,num2,num3);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  let A = ((num1 + num2 + num3)/3).toFixed(2)
  return "Average of three numbers = " + A ;

}
console.log(calculateAverage(2,4,8));
console.log(calculateAverage(-2,-1,0));
console.log(calculateAverage("-2",-1,8));

//! ---------------------------------------------------------------------


