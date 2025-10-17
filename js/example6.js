// Byt ut vissa element i en array

const colors = ["red", "blue", "yellow", "green"];
const newColor = "purple";

// "yellow" => "purple"

for(let i = 0; i < colors.length; i++) {

      if(colors[i] === "yellow") {
        colors[i] = newColor;
      }
}

console.log(colors);