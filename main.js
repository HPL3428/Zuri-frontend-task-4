function convertFahrToCelsius(fahrenheit) {
  let chevkType = Object.prototype.toString.call(fahrenheit).slice(8, -1);
  let stringContainsNumber = /^\d+$/.test(fahrenheit);

  if (checkType === "number") {
    celsius = fahrenheit - 32;
    celsius = celsius / 1.8;
    celcius = celsius.toFixed(4);
    return celsius;
  } else if (checkType === "string" && stringContainsNumber) {
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

convertFahrToCelsius(0)
  

/* Question 2 */

