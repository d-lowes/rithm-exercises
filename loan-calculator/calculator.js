//  TODO: add "use strict;" to javascript files

"use strict";

// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");

const monthlyPaymentResults = document.getElementById("calc-monthly-payment");

// TODO: rename variables to make a distinction between DOM element and number values
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");



/** Get form values and return as `{amount, years, rate}`.
 *
 * Example output: `{"amount": 10000, "years": 10, "rate": 4.5}`.
 *
 * */

// TODO: rename variables
function getFormValues() {
  const amount = Number(loanAmount.value);
  const years = Number(loanYears.value);
  const rate = Number(loanRate.value);

  return { amount, years, rate };
}


/** Calculate monthly payment and return exact amount. */

function calcMonthlyPayment(amount, years, rate) {
  const i = ((rate / 100) / 12);
  const n = (years * 12);
  const P = amount;
  const monthlyPayment = ((P * i) / (1 - ((1 + i) ** (-n))));

  return monthlyPayment;
}


/** Get form values, calculate, convert to 2-decimal places, and update UI. */
// TODO: remove number()
// TODO: toFixed(); for decimal places

function getFormValuesAndDisplayResults() {
  const formValues = getFormValues();

  const formAmount = formValues.amount;
  const formYears = formValues.years;
  const formRate = formValues.rate;

  const result = calcMonthlyPayment(formAmount, formYears, formRate);
  const resultTwoDecimals = (Math.round(result * 100) / 100);

  monthlyPaymentResults.innerText = resultTwoDecimals;
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  loanAmount.value = 10000;
  loanYears.value = 10;
  loanRate.value = 4.5;

  getFormValuesAndDisplayResults();
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
