function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

function caesarCipher (string, shift) {
    //todo
}

function analyzeArray (array) {
    return {
        average: null,
        min: null,
        max: null,
        length: null
    }
}

module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator
}