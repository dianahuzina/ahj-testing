import { validateCardNumber } from "../validator";

test("should return true for valid card number", () => {
  expect(validateCardNumber(371449635398431)).toBe(true);
});

test("should return false for invalid card number", () => {
  expect(validateCardNumber(371449635398439)).toBe(false);
});
