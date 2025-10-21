// Beräkna genomsnittet av alla tal i en array


const numbers = [1,2,3,4,5,6,7,8,9];

//mean = num1 + num2  + num3 / 3

function calculateAverage(array) {
    let sum = 0;

    // forEach är bra eftersom vi ska iterera genom varje element
    numbers.forEach(function(item) {
        sum = sum + item;
    })

    const average = sum / numbers.length;

    return average;
}

const average = calculateAverage(numbers);

console.log(`Genomsnittet är ${average}`);