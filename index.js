const inputEL = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");

function meterToFeet(input) {
  return (input * 3.2808).toFixed(2);
}

function feetToMeter(input) {
  return (input * 0.3048).toFixed(2);
}

function literToGallon(input) {
  return (input * 0.264172).toFixed(2);
}

function gallonToLiter(input) {
  return (input * 3.78541).toFixed(2);
}

function kilogramtoPound(input) {
  return (input * 2.20462).toFixed(2);
}

function poundToKilogram(input) {
  return (input * 0.453592).toFixed(2);
}

function rewriteLengthEl(input) {
  let lengthTemplate = `${input} meters = ${meterToFeet(
    input
  )} feet | ${input} feet = ${feetToMeter(input)} meters`;
  lengthEl.textContent = lengthTemplate;
}

function reWriteVolumeEl(input) {
  let volumeTemplate = `${input} liters = ${literToGallon(
    input
  )} gallons | ${input} gallons = ${gallonToLiter(input)} liters`;
  volumeEl.textContent = volumeTemplate;
}

function reWriteMassEl(input) {
  let massTemplate = `${input} kilos = ${kilogramtoPound(
    input
  )} pounds | ${input} pounds = ${poundToKilogram(input)} kilos`;
  massEl.textContent = massTemplate;
}

convertBtn.addEventListener("click", function () {
  let inputValue = inputEL.value;
  rewriteLengthEl(inputValue);
  reWriteVolumeEl(inputValue);
  reWriteMassEl(inputValue);
});
