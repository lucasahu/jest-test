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
    let characters = string.split('');
    let encryptedSentence = [];
    for (let i = 0; i < characters.length; i++) {
        let charCode = characters[i].charCodeAt(0);
        let baseShift = shift;
            
        if (charCode <= 90 && charCode >= 65 && charCode + baseShift > 90) {
            baseShift = shift - (91 - charCode)
            charCode = 65
        }
        
        if (charCode <= 122 && charCode >= 97 && charCode + baseShift > 122) {
            baseShift = shift - (123 - charCode)
            charCode = 97
        }

        let encryptedChar = String.fromCharCode(charCode + baseShift);
        encryptedSentence.push(encryptedChar);
    }
    return encryptedSentence.join('')
}

function analyzeArray (array) {
    let total = 0;
    let min = array[0];
    let max = 0;
    let length = array.length;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (array[i] <= min) {
            min = array[i]
        } else if (array[i] >= max) {
            max = array[i]
        }
    }

    let average = Math.round(total / length);


    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator,
    caesarCipher: caesarCipher,
    analyzeArray: analyzeArray
}