export const concatinate = (word1, word2, word3) => {
    let x = (`Hi, ${word1}, welcome to ${word2}, you are ${word3}`);
    console.log(x);
}
export const convertTemperature = (value, unit) => {
    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        return (value * 9/5) + 32;
    } else if (unit === 'F') {
        // Convert Fahrenheit to Celsius
        return (value - 32) * 5/9;
    } else {
        return "Please specify the unit as 'C' or 'F'";
    }
}

export const mathOperation = (x) => {
        let factorial = 1;
        for (let i = 1; i <= x; i++) {
            factorial *= i;
        }
        return factorial;
   
}

export const power = (base, exponent) => {
    return Math.pow(base, exponent);

}