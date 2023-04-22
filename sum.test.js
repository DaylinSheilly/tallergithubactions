const multiplicar = require("./mult");

test("mult two numbers", () => {
  expect(multiplicar(1, 2)).toBe(2);
});

const dividir = require("./div");

test("div two numbers", () => {
  expect(dividir(1, 2)).toBe(0.5);
});

const sumar = require("./sum");
test("sums two numbers", () => {
  expect(sumar(1, 2)).toBe(3);
});
