/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/validator.js
function validateCardNumber(number) {
  const cardNumber = number.toString();
  let sum = 0;
  const parity = cardNumber.length % 2;
  for (let i = 0; i < cardNumber.length; i += 1) {
    let digit = Number(cardNumber[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/payment.js
function checkPaymentSystem(number) {
  const cardNumber = number.toString();
  let firstDigit = Number(cardNumber[0]);
  let secondDigit = Number(cardNumber[1]);
  if (firstDigit === 2) {
    return "mir";
  }
  if (firstDigit === 3) {
    if (secondDigit === 7) {
      return "amex";
    } else if (secondDigit === 0 || secondDigit === 6) {
      return "diners";
    } else if (secondDigit === 5) {
      return "jcb";
    }
  }
  if (firstDigit === 4) {
    return "visa";
  }
  if (firstDigit === 5) {
    return "mastercard";
  }
  if (firstDigit === 6) {
    return "discover";
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector(".form-input");
  const cards = document.querySelectorAll(".card");
  input.addEventListener("input", () => {
    const cardNumber = input.value;
    if (validateCardNumber(cardNumber)) {
      const cardSystem = checkPaymentSystem(cardNumber);
      cards.forEach(card => {
        if (!card.classList.contains(cardSystem)) {
          card.classList.add("disabled");
        } else {
          card.classList.remove("disabled");
        }
      });
    } else {
      cards.forEach(card => {
        card.classList.remove("disabled");
      });
    }
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const valid = document.querySelector(".valid");
    const payment = document.querySelector(".payment");
    const cardNumber = input.value;
    if (validateCardNumber(cardNumber)) {
      form.classList.add("validForm");
      form.classList.remove("invalidForm");
      valid.textContent = "Your card number is valid";
      payment.textContent = "Payment system is " + checkPaymentSystem(cardNumber);
    } else {
      form.classList.add("invalidForm");
      form.classList.remove("validForm");
      valid.textContent = "Card number is invalid";
      payment.textContent = "";
    }
  });
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;