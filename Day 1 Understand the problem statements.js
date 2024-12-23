//* 1. Define if a number is positive and negative :

function checkNumber(num) {
  if (typeof num === "number") {
    return num < 0
      ? "Negative"
      : num > 0
      ? "Positive"
      : num == 0
      ? "Zero"
      : num;
  }
  return -1;
}
console.log(checkNumber(0));
console.log(checkNumber(2));
console.log(checkNumber(-5));
console.log(checkNumber("7"));
console.log(checkNumber(NaN));
console.log(NaN == 5);
console.log(NaN > 5);
console.log(NaN < 5);

//* How to find the Nan.
//* NaN - type is number but it has no specific value.
console.log(Number.isNaN(NaN));

//! ---------------------------------------------------------------------

//* 2. Find the sum of two integers :

function sumOfTwoIntegers(num1, num2) {
  console.log(num1, num2);
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
}
console.log(sumOfTwoIntegers(2, 3));
console.log(sumOfTwoIntegers(5, "27"));
console.log(sumOfTwoIntegers("202", "8"));

//! ---------------------------------------------------------------------

//* 3. Identify the maximum and minium of three numbers :

// function maxAndMin(num1, num2, num3) {
//   console.log(num1, num2, num3);
//   num1 = Number(num1);
//   num2 = Number(num2);
//   num3 = Number(num3);
//   let min = Math.min(num1,num2,num3);
//   let max = Math.max(num1,num2,num3);
//   return [min,max]
// }

// function maxAndMin(num1, num2, num3) {
//   console.log(num1, num2, num3);
//   num1 = Number(num1);
//   num2 = Number(num2);
//   num3 = Number(num3);
//   const min = num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
//   const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
//   return [min,max];

// }
function maxMidMin(num1, num2, num3) {
  console.log(num1, num2, num3);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  const min =
    num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
  const max =
    num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
  const mid = num1 + num2 + num3 - min - max; // One method

  //   <-- Another method :
  // const mid = num1 !== min && num1 !== max
  //      ? num1
  //       : num2 !== min && num2 !== max
  //       ? num2
  //        : num3; -->
  return [min, mid, max];
}
console.log(maxMidMin(2, 8, 1));
console.log(maxMidMin(21, 0, "10"));
console.log(maxMidMin(-8, "-5", -19));

//! ---------------------------------------------------------------------

//* 4. Count a digits in a number :

function countDigits(num) {
  console.log(num);
  num = Number(num);
  if (isNaN(num)) {
    return "Invalid Number";
  }
  if (num < 0) {
    num = -num;
  }
  num = parseInt(num);
  let count = 0;
  while (num > 0) {
    count++;
    num = parseInt(num / 10);
  }
  return count;
}
console.log(countDigits(254678));
console.log(countDigits("254000"));
console.log(countDigits("000254678"));
console.log(countDigits("25467p0000"));

//! ---------------------------------------------------------------------

//* 5. Check if a string contains only alphabets :

function isAlphabets (string) {
    if (string == "") return false;
    for (ind = 0; ind < string.length; ind++) 
        if(string[ind] >= "a" && string[ind] <= "z" ||
            string[ind] >= "A" && string[ind] <= "Z" 
        ) continue;
        else return false;
        return true;
}
console.log(isAlphabets("Bala"));
console.log(isAlphabets("Bala123"));
console.log(isAlphabets("Bala krish"));
console.log(isAlphabets(""));

//! ---------------------------------------------------------------------

//* 6. Calcuate the area of circle with a given Radius (r) :

function areaOfCircle(radius) {
console.log(radius);
return (Math.PI * radius * radius).toFixed(2);
}
console.log(areaOfCircle(5));
console.log(areaOfCircle(2.5));

//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
