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

test ('Shifts strings', () => {
    expect(functions.caesarCipher('hello', 3)).toBe('khoor');
})

test ('Shift wraps correctly upper case chars', () => {
    expect(functions.caesarCipher('HELLO', 25)).toBe('GDKKN');
})

test ('Shift wraps correctly lower case chars', () => {
    expect(functions.caesarCipher('hello', 25)).toBe('gdkkn');
})

test ('Analyze array works', () => {
    expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})