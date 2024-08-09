export function checkPaymentSystem(number) {
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
