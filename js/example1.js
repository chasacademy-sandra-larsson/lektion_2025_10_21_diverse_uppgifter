
// Hitta det största talet i en array

const numbers = [2, 3, 677, 7, 8, 33, 199];

let max = 0;

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] > max) {
        max = numbers[i];
        //console.log(`Största talet är ${max}`);
    }
}

console.log(`Största talet är ${max}`);

// Finns en metod för att hitta max i en array
//console.log(Math.max(...numbers));

// Man kan använda en sort-metod och välja första
