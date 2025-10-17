// Multiplicera alla tal i en array med 2. Skapa en ny array för det.
// Använd push() för att lägga till i slutet av arrayen

const numbers = [1,2,3,4,5];

const doubledNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
    console.log("iteration: ", i);
    console.log("doubled", doubledNumbers);
}

console.log("numbers", numbers);
console.log("doubledNumbers", doubledNumbers)


// map