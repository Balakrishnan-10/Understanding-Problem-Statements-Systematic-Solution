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

function evenOrOdd1(arr) {
  console.log(arr);
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return { even, odd };
}
console.log(evenOrOdd1([1, 2, 3, 4, 5, 6,78, 10, 7]));

//! ---------------------------------------------------------------------

//* 3. Calculate the perimeter of the Rectangle.

function perimeterOfRectangle(length, width) {
  console.log(length, width);
  length = Number(length);
  width = Number(width);
  return "Perimeter of a Rectangle P = " + 2 * (length + width);
}
console.log(perimeterOfRectangle(5, 6));
console.log(perimeterOfRectangle("8", 7));
console.log(perimeterOfRectangle("-4", 2));

//! ---------------------------------------------------------------------

//* 4. Find the Largest number of four Numbers.

function largestNumber(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  num4 = Number(num4);
  // let largestNumber = Math.max(num1,num2,num3,num4);
  // return largestNumber;

  let max =
    num1 > num2
      ? num1 > num3
        ? num1 > num4
          ? num1
          : num4
        : num3 > num4
        ? num3
        : num4
      : num2 > num3
      ? num2 > num4
        ? num2
        : num4
      : num3 > num4
      ? num3
      : num4;
  return max;
}
console.log(largestNumber(22, 8, 102, 16));
console.log(largestNumber(22, 8, "365", 16));
console.log(largestNumber(-22, -8, -102, -16));

//! ---------------------------------------------------------------------

//* 5. Calculate the Average of three numbers.

function calculateAverage(num1, num2, num3) {
  console.log(num1, num2, num3);
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  let A = ((num1 + num2 + num3) / 3).toFixed(2);
  return "Average of three numbers = " + A;
}
console.log(calculateAverage(2, 4, 8));
console.log(calculateAverage(-2, -1, 0));
console.log(calculateAverage("-2", -1, 8));

//! ---------------------------------------------------------------------

//* 6. Identify if a number is divisible by both 3 and 5.

function divisibleByBothNumbers(num) {
  console.log(num);
  num = Number(num);
  if (num % 3 == 0 && num % 5 == 0) {
    return "If a number is divisible by both 3 and 5";
  } else return "If a number is not divisible by both 3 and 5";
}
console.log(divisibleByBothNumbers(15));
console.log(divisibleByBothNumbers("15"));
console.log(divisibleByBothNumbers(10));

//! ---------------------------------------------------------------------

//* 7. Find the square of the number.

function calculateSquare(num) {
  console.log(num);
  num = Number(num);
  return "Square of the number is : " + num * num;
}
console.log(calculateSquare(20));
console.log(calculateSquare("-202"));
console.log(calculateSquare(-4));

//! ---------------------------------------------------------------------

//* 8. Count the number of vowels in a string.

function countVowels(str) {
  console.log(str);
  let vowels = 0;
  for (let i = 0; i < str.length; i++)
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      vowels++;
    }
  return vowels;
}
console.log(countVowels("Balakrishnan"));
console.log(countVowels("aeipouAeioubcnjhf"));

//! ---------------------------------------------------------------------

//* 9. Determine if a character is a uppercase letter.

function isUppercase(char) {
  console.log(char);
  //* One Method
  // return char.length === 1 && char === char.toUpperCase();

  //* Another Method :
  return /^[A-Z]$/.test(char);
}
console.log(isUppercase("A"));
console.log(isUppercase("@"));
console.log(isUppercase("e"));
console.log(isUppercase("B"));

//! ---------------------------------------------------------------------

//* 10. Print the reverse of a string.

function reversedString(str) {
  console.log(str);

  // let reverse = str.split("").reverse().join("");
  // return reverse;

  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reversedString("Hello World"));
console.log(reversedString("Hi Bala"));

//! ---------------------------------------------------------------------
