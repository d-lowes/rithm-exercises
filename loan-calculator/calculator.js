"use strict";

// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const monthlyPaymentResults = document.getElementById("calc-monthly-payment");
const loanAmountElement = document.getElementById("loan-amount");
const loanYearsElement = document.getElementById("loan-years");
const loanRateElement = document.getElementById("loan-rate");



/** Get form values and return as `{amount, years, rate}`. */

function getFormValues() {
  const amount = Number(loanAmountElement.value);
  const years = Number(loanYearsElement.value);
  const rate = Number(loanRateElement.value);

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
// TODO: toFixed(); for decimal places

function getFormValuesAndDisplayResults() {
  const formValues = getFormValues();

  const formAmount = formValues.amount;
  const formYears = formValues.years;
  const formRate = formValues.rate;

  const result = calcMonthlyPayment(formAmount, formYears, formRate);

  monthlyPaymentResults.innerText = result.toFixed(2);
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  loanAmountElement.value = 10000;
  loanYearsElement.value = 10;
  loanRateElement.value = 4.5;

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
