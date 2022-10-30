// JavaScript Loops - Lab 10
// Meruyert Togaibekova

// Data Collection
let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 8, 10, 10, 10, 0];
let lab6 = [5, 5, 10, 5, 5, 10];
let quiz1 = 38;

// Calculate sum of each lab
function get_sum(lab) {
    let sum = 0;
    for (let i = 0; i < lab.length; i++) {
      sum += lab[i];
    }
    return sum;
}

// Main function that takes labs as arguments and returns the results object
function main(lab1, lab2, lab3, lab4_5, lab6) {
    const obj = {
            lab1: lab1,
            lab2: lab2,
            lab3: lab3,
            lab4_5: lab4_5,
            lab6: lab6,
            quiz1: quiz1,
            sums: [get_sum(lab1), get_sum(lab2), get_sum(lab3), get_sum(lab4_5), get_sum(lab6)],
            total_score: ((quiz1*40)/40) + (((get_sum(lab1) + get_sum(lab2) + get_sum(lab3) + get_sum(lab4_5) + get_sum(lab6))*60)/240),
    }
    return obj;
}

let results = main(lab1, lab2, lab3, lab4_5, lab6)
console.log(results)
