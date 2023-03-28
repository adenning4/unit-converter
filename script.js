//define the conversion constants
const metersToFeetConversion = 3.28084;
const feetToMetersConversion = 1 / metersToFeetConversion;
const litersToGallonsConversion = 0.26417;
const gallonsToLitersConversion = 1 / litersToGallonsConversion;
const kilogramsToPoundsConversion = 2.20462;
const poundsToKilogramsConversion = 1 / kilogramsToPoundsConversion;

//grab input value, this will be a string
const inputEl = document.getElementById("input");

//grab the button element
const btnEl = document.getElementById("convert-btn");

//grab the output elements
const lengthOutputEl = document.getElementById("length-output");
const volumeOutputEl = document.getElementById("volume-output");
const massOutputel = document.getElementById("mass-output");

//upon button press, grab the input value and pass it to the sentence constructor
btnEl.addEventListener("click", function () {
  const inputVal = inputEl.value;

  sentenceConstructor(inputVal);
});

//call the sentence constructor with the default value, this will populate upon page opening or refresh
sentenceConstructor(inputEl.value);

//define sentence contructor
function sentenceConstructor(value) {
  lengthOutputEl.innerHTML = `${value} meters = ${metersToFeet(
    value
  )} feet | ${value} feet = ${feetToMeters(value)} meters`;
  volumeOutputEl.innerHTML = `${value} liters = ${litersToGallons(
    value
  )} gallons | ${value} gallons = ${gallonsToLiters(value)} liters`;
  massOutputel.innerHTML = `${value} kilograms = ${kilogramsToPounds(
    value
  )} pounds | ${value} pounds = ${poundsToKilograms(value)} kilograms`;
}

//define function to round a number to 3 decimals
function roundToThree(input) {
  //accepts numbers, and strings in the format of a number
  return Math.round(input * 1000) / 1000;
}

//accepts meters, returns the value in feet, rounded to 3 decimals
function metersToFeet(meters) {
  return roundToThree(meters * metersToFeetConversion);
}

//accepts feet, returns the value in meters;
function feetToMeters(feet) {
  return roundToThree(feet * feetToMetersConversion);
}

//accepts liters, returns the value in gallons
function litersToGallons(liters) {
  return roundToThree(liters * litersToGallonsConversion);
}

//accepts gallons, returns the value in liters
function gallonsToLiters(gallons) {
  return roundToThree(gallons * gallonsToLitersConversion);
}

//accepts kilograms, returns the value in pounds
function kilogramsToPounds(kilograms) {
  return roundToThree(kilograms * kilogramsToPoundsConversion);
}

//accepts pounds, returns the value in kilograms
function poundsToKilograms(pounds) {
  return roundToThree(pounds * poundsToKilogramsConversion);
}
