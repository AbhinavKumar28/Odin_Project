const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./testing_project.js");

test("capitalize a to equal A", () => {
    expect(capitalize("abhinav")).toBe("Abhinav");
});

test("capitalize string with spaces", () => {
    expect(capitalize("abhinav is a good boy.")).toBe("Abhinav is a good boy.");
});

test("capitalize string having no letters", () => {
    expect(capitalize(")(*!@#$).")).toBe(")(*!@#$).");
});


test("reverse simple string", () => {
    expect(reverseString("abhinav")).toBe("vanihba");
});

test("reverse string with spaces", () => {
    expect(reverseString("abhinav is a good boy")).toBe("yob doog a si vanihba");
});

test("reverse string having no letters", () => {
    expect(reverseString("+_)(*")).toBe("*()_+");
});

test("add numbers", () => {
    expect(calculator.add(3, 4)).toBe(7);
});

test("add negative numbers", () => {
    expect(calculator.add(-3, -4)).toBe(-7);
});

test("add non numbers", () => {
    expect(calculator.add("hello", 3)).toBe("Please provide a number.");
});

test("subtract numbers", () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract negative numbers", () => {
    expect(calculator.subtract(-3, -4)).toBe(1);
});

test("subtract non numbers", () => {
    expect(calculator.subtract("hello", 3)).toBe("Please provide a number.");
});

test("multiply numbers", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
});

test("multiply negative numbers", () => {
    expect(calculator.multiply(-3, -4)).toBe(12);
});

test("multiply negative numbers", () => {
    expect(calculator.multiply(3, -4)).toBe(-12);
});

test("Multiply non numbers", () => {
    expect(calculator.multiply("hello", 3)).toBe("Please provide a number.");
});
test("divide numbers", () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test("divide negative numbers", () => {
    expect(calculator.divide(-8, -4)).toBe(2);
});

test("divide negative numbers", () => {
    expect(calculator.divide(8, -4)).toBe(-2);
});

test("divide non numbers", () => {
    expect(calculator.divide("hello", 3)).toBe("Please provide a number.");
});

test("shift the string", () => {
    expect(caesarCipher("Abhinav", 2)).toBe("Cdjkpcx");
});

test("shift the string without affecting other characters.", () => {
    expect(caesarCipher("Abhinav.()_", 2)).toBe("Cdjkpcx.()_");
});

test("shift the string with spaces", () => {
    expect(caesarCipher("Abhinav Kumar", 2)).toBe("Cdjkpcx Mwoct");
});

test("analyze array with numbers", () => {
    expect(analyzeArray([8, 4])).toEqual({
        average: 6,
        min: 4,
        max: 8,
        length: 2
    });
});
