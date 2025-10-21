
// Lägg till alla färgerna i listan "myList"

const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", 
    "Purple", "Pink", "Brown", "Black", "White",
    "Gray", "Cyan", "Magenta", "Lime", "Indigo",
    "Violet", "Turquoise", "Gold", "Silver", "Maroon"
  ];


const ul = document.getElementById("myList");

let html = "";

colors.forEach(function(item) {
    html += `<li>${item}</li>`
})

console.log(html);

ul.innerHTML = html;
