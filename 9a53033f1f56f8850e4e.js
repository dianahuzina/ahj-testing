export function validateCardNumber(number) {
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