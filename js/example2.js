// Räkna antalet gånger ett visst element finns i en array

const fruits  = ["orange", "apple", "banana", "kiwi", "orange"];

let count = 0;

const found = "kiwi";

for(let i = 0; i < fruits.length; i++) {
      if(fruits[i] === found) {
        count += 1;
      } 
} 

console.log(`Antalet ${found} är ${count}`);