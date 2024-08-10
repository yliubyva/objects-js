'use strict';

class Fraction {
    constructor({ numerator, denominator }){
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

let methodsOfWorkingWithFractions = {
    
    greatestCommonDenominator (num1, num2) {
        while (num2 != 0) {
            let remainder = num1 % num2;
            num1 = num2;
            num2 = remainder;
        }

        return num1;
    },

    leastCommonMultiple (num1, num2) {
        let commonDenominator = this.greatestCommonDenominator(num1, num2);
        let commonMultiple = num1 * num2 / commonDenominator;
        return commonMultiple;
    },

    addFractions (numerator1, denominator1, numerator2, denominator2) {
        let numeratorResult;
        let commonDenominator;
        if (denominator1 !== denominator2) {
            commonDenominator = this.leastCommonMultiple(denominator1, denominator2);
            numerator1 = (commonDenominator / denominator1) * numerator1;
            numerator2 = (commonDenominator / denominator2) * numerator2;
            numeratorResult = numerator1 + numerator2;        
        } else { 
            numeratorResult = numerator1 + numerator2;
            commonDenominator = denominator1;
        }

        return `${numeratorResult}/${commonDenominator}`;
    },

    differenceFractions (numerator1, denominator1, numerator2, denominator2) {
        let numeratorResult;
        let commonDenominator;
        if (denominator1 !== denominator2) {
            commonDenominator = this.leastCommonMultiple(denominator1, denominator2);
            numerator1 = (commonDenominator / denominator1) * numerator1;
            numerator2 = (commonDenominator / denominator2) * numerator2;
            numeratorResult = numerator1 - numerator2;
        } else { 
            numeratorResult = numerator1 - numerator2;
            commonDenominator = denominator1;
        }

        if (numeratorResult === 0) {
            return numeratorResult;
        }

        return `${numeratorResult}/${commonDenominator}`;
    },

    multiplicationFractions (numerator1, denominator1, numerator2, denominator2) {
        let numeratorResult = numerator1 * numerator2;
        let commonDenominator = denominator1 * denominator2;
        return `${numeratorResult}/${commonDenominator}`;
        
    },

    divisionFractions (numerator1, denominator1, numerator2, denominator2) {
        let numeratorResult = numerator1 * denominator2;
        let commonDenominator = denominator1 * numerator2;
        return `${numeratorResult}/${commonDenominator}`;
    },

    reducingFractions (numerator, denominator) {
        let commonDenominator = this.greatestCommonDenominator(numerator, denominator);
        let numeratorResult = numerator / commonDenominator;
        let denominatorResult = denominator / commonDenominator;
        return `${numeratorResult}/${denominatorResult}`;
    },
}


let fraction1 = new Fraction({
    numerator: 14,
    denominator: 21,
});
let fraction2 = new Fraction({
    numerator: 8,
    denominator: 18,
});

console.log(methodsOfWorkingWithFractions.addFractions(
    fraction1.numerator, 
    fraction1.denominator, 
    fraction2.numerator, 
    fraction2.denominator
));

console.log(methodsOfWorkingWithFractions.differenceFractions(
    fraction1.numerator, 
    fraction1.denominator, 
    fraction2.numerator, 
    fraction2.denominator
));

console.log(methodsOfWorkingWithFractions.multiplicationFractions(
    fraction1.numerator, 
    fraction1.denominator, 
    fraction2.numerator, 
    fraction2.denominator
));

console.log(methodsOfWorkingWithFractions.divisionFractions(
    fraction1.numerator, 
    fraction1.denominator, 
    fraction2.numerator, 
    fraction2.denominator
));

console.log(methodsOfWorkingWithFractions.reducingFractions(
    fraction1.numerator, 
    fraction1.denominator
));

console.log(methodsOfWorkingWithFractions.reducingFractions(
    fraction2.numerator, 
    fraction2.denominator
));