import { validateCardNumber } from "./validator";
import { checkPaymentSystem } from "./payment";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector(".form-input");
  const cards = document.querySelectorAll(".card");

  input.addEventListener("input", () => {
    const cardNumber = input.value;
    if (validateCardNumber(cardNumber)) {
      const cardSystem = checkPaymentSystem(cardNumber);
      cards.forEach((card) => {
        if (!card.classList.contains(cardSystem)) {
          card.classList.add("disabled");
        } else {
          card.classList.remove("disabled");
        }
      });
    } else {
      cards.forEach((card) => {
        card.classList.remove("disabled");
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = document.querySelector(".valid");
    const payment = document.querySelector(".payment");
    const cardNumber = input.value;
    if (validateCardNumber(cardNumber)) {
      form.classList.add("validForm");
      form.classList.remove("invalidForm");
      valid.textContent = "Your card number is valid";
      payment.textContent =
        "Payment system is " + checkPaymentSystem(cardNumber);
    } else {
      form.classList.add("invalidForm");
      form.classList.remove("validForm");
      valid.textContent = "Card number is invalid";
      payment.textContent = "";
    }
  });
});
