function capitalize(str) {
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    const ch = str.split("");

    const re = ch.reverse();

    const reversedStr = re.join("");

    return reversedStr;
}

const calculator = {
    add: function add(a, b) {
        if ((typeof a === "number") && (typeof b === "number")) {
            return a + b;
        } else {
            return "Please provide a number.";
        }
    },
    subtract: function subtract(a, b) {
        if ((typeof a === "number") && (typeof b === "number")) {
            return a - b;
        } else {
            return "Please provide a number.";
        }
    },
    multiply: function multiply(a, b) {
        if ((typeof a === "number") && (typeof b === "number")) {
            return a * b;
        } else {
            return "Please provide a number.";
        }
    },
    divide: function divide(a, b) {
        if ((typeof a === "number") && (typeof b === "number")) {
            console.log(a / b);
            return a / b;
        } else {
            return "Please provide a number.";
        }
    }
};

function caesarCipher(str, shiftFactor) {
    let result = "";
    const alphLen = 26;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= "a" && char <= "z") {

            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - "a".charCodeAt(0) + shiftFactor) % alphLen);

            result += String.fromCharCode(shiftedCharCode + "a".charCodeAt(0));
        } else if (char >= "A" && char <= "Z") {

            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - "A".charCodeAt(0) + shiftFactor) % alphLen);

            result += String.fromCharCode(shiftedCharCode + "A".charCodeAt(0));
        } else {

            result += char;
        }
    }
    return result;
}
function analyzeArray(nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / nums.length;
    const l = nums.length;
    const mini = Math.min(...nums);
    const maxi = Math.max(...nums);

    return {
        average: avg,
        min: mini,
        max: maxi,
        length: l
    };
}
module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator,
    caesarCipher: caesarCipher,
    analyzeArray: analyzeArray
};
