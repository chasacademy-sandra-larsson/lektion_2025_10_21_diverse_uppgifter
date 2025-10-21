// Räkna antalet gånger ett visst element finns i en array

const fruits  = ["orange", "kiwi", "banana", "kiwi", "orange"];

let count = 0;

const found = "kiwi";

// for(let i = 0; i < fruits.length; i++) {

//     // När "found" finns på ett visst index, öka count
//     if(fruits[i] === found)  {
//         count += 1;
//     } 
// }

// forEach itererar kring varje värde (item)
fruits.forEach(function(item) {
         // När "found" finns på ett visst index, öka count
    if(item === found)  {
        count += 1;
    } 
})


console.log(`Antaler ${found} är ${count}`);
