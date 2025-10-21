// Byt ut vissa element i en array

const colors = ["red", "blue", "yellow", "green"];
const newColor = "purple";

const chosenColor = "red";



// Loopa igenom och när elementet är samma som chosenColor, ändå då dess värde til "purple"

// for(let i = 0; i < colors.length; i++) {
//         if(colors[i] === chosenColor) {
//             colors[i] = newColor;
//         }
// }


colors.forEach(function(item, index) {
    if(item === chosenColor) {
        colors[index] = newColor;
    }
})

// Updated array
console.log(colors);


// == 
// 11 == '11' => true
// // ===.  kollar även att datatypen är korret!
// 11 === "11" => false