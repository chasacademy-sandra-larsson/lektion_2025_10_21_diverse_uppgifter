// Beräkna genomsnittet av alla tal i en array


const numbers = [1,2,3,4,5,6,7,8,9];

let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//   sum = sum + numbers[i];
// }


// Istället för for-loop kan man använda arraymetoden foreach
numbers.forEach(function (item) {
  sum = sum + item;
});


const average = sum / numbers.length;
console.log("medel är", average)