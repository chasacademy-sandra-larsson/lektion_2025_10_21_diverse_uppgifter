// Rensa upp en CSV-sträng (komma-separerad sträng)
// Exampel: "mjölk, papper ,   ost , ägg" => "mjölk, papper, ost, ägg"

// Metoder: 
// string.split(",") - splittar en sträng till en array vid ","  - string => array, vad delar man med?
// string.join(" ") - slår ihop en array till en sträng med delare " " - array till en sträng och separotor däremellan

const csvText = "mjölk, papper ,   ost , ägg";
// till detta formatconst  =>. arr = ["mjölk", "papper", "ost", "ägg"];

console.log("orginal", csvText);

const words = csvText.split(",");

// Man kan göra så här....
// words.forEach(function(item, index) {
//     words[index] = item.trim();
// });

// Men best practice när man vill göra en operation på varje element, använder man map
const trimmedWords = words.map(function(item) {
    return item.trim();
});

const cleanedWords = trimmedWords.join(", ");
 

console.log("trimmedWords", trimmedWords);
//console.log(typeof(trimmedWords));
console.log("cleanedWords", cleanedWords);
//console.log(typeof(cleanedWords));

