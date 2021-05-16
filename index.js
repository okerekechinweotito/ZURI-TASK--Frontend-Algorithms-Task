/* QUESTION 1 
 Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. */

function convertFahrToCelsius(fahrenheit) {
  let checkType = Object.prototype.toString.call(fahrenheit).slice(8, -1);
  let stringContainsNumber = /^\d+$/.test(fahrenheit);

  if (checkType === "Number") {
    celsius = fahrenheit - 32;
    celsius = celsius / 1.8;
    celsius = celsius.toFixed(4);
    return celsius;
  } else if (checkType === "String" && stringContainsNumber) {
    stringToNumber = parseFloat(fahrenheit);
    celsius = stringToNumber - 32;
    celsius = celsius / 1.8;
    celsius = celsius.toFixed(4);
    return celsius;
  } else {
    let stringifyFahrenheit = JSON.stringify(fahrenheit);

    return `${stringifyFahrenheit} is not a valid number but a/an ${checkType}`;
  }
}

/* QUESTION 2
Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.
 */

function checkYuGiOh(n) {
  let checkType = Object.prototype.toString.call(n).slice(8, -1);
  let stringContainsNumber = /^\d+$/.test(n);

  if (checkType === Number || stringContainsNumber) {
    let generateArray = Array.from(Array(n), (x, index) => index + 1);
    let solutionArray = generateArray.map((number) => {
      switch (true) {
        case number % 2 === 0 && number % 3 === 0 && number % 5 === 0:
          return (number = "yu-gi-oh");

        case number % 2 === 0 && number % 3 === 0:
          return (number = "yu-gi");

        case number % 2 === 0 && number % 5 === 0:
          return (number = "yu-oh");

        case number % 3 === 0 && number % 5 === 0:
          return (number = "gi-oh");
        case number % 2 === 0:
          return (number = "yu");

        case number % 3 === 0:
          return (number = "gi");

        case number % 5 === 0:
          return (number = "oh");
        default:
          return number;
      }
    });
    console.log(solutionArray);
    return solutionArray;
  } else {
    let stringifyN = JSON.stringify(n);
    return `Invalid Parameter: ${stringifyN}`;
  }
}
checkYuGiOh("fizzbuzz is meh");
