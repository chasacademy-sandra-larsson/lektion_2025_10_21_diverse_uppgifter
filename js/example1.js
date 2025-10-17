
// Hitta det största talet i en array

const numbers = [2, 3, 67, 7, 8, 33, 199];

// Sätt första elementet till max 
let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {

    if(numbers[i] > max) {
      max = numbers[i];
      //console.log(max);
    }
}

console.log("Det största talet är " + max);
// Snabbsätt  
//Math.max(...numbers);

