import { checkPaymentSystem } from "../payment";

test("should return mir", () => {
  expect(checkPaymentSystem(2200000000000000)).toBe("mir");
});

test("should return amex", () => {
  expect(checkPaymentSystem(371449635398431)).toBe("amex");
});

test("should return diners with 30... number", () => {
  expect(checkPaymentSystem(30569309025904)).toBe("diners");
});

test("should return diners with 36.... number", () => {
  expect(checkPaymentSystem(36893024064467)).toBe("diners");
});

test("should return jcb", () => {
  expect(checkPaymentSystem(3545642575127217)).toBe("jcb");
});

test("should return visa", () => {
  expect(checkPaymentSystem(4485336008567129)).toBe("visa");
});

test("should return mastercard", () => {
  expect(checkPaymentSystem(5380756492250176)).toBe("mastercard");
});

test("should return discover", () => {
  expect(checkPaymentSystem(6011111111111117)).toBe("discover");
});
