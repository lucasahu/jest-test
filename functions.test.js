const functions = require('./functions');

test('Capitalize first letter', () => {
    expect(functions.capitalize('hello')).toBe('Hello');
});

test ('String is reveresed', () => {
    expect(functions.reverseString('1234')).toBe('4321');
});

test ('Calculator adds numbers correctly', () => {
    expect(functions.calculator.add(1, 3)).toBe(4);
})

test ('Calculator substracts correctly', () => {
    expect(functions.calculator.subtract(10, 5)).toBe(5);
})

test ('Calculator multiplies numbers correctly', () => {
    expect(functions.calculator.multiply(1, 3)).toBe(3);
})

test ('Calculator divides numbers correctly', () => {
    expect(functions.calculator.divide(15, 3)).toBe(5);
})