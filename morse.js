document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    // let input = document.getElementById("morse");
    let input = document.querySelector("#morse");
    // let input = document.querySelector("input[name=codedMessage]");
    console.log(`you added ${input.value} to the input`);

    decoder(input.value);
  });

  // document.querySelector("button").addEventListener("click", decoder);
function decodeMorse(str) {
	const morseCode = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  " ": "NEW_CHR",//characters are separated by single spaces
  "---...": ":",
  ".----.": "'",
  "  ": "NEW_WRD"// words are separated by double spaces
};

message = str.split("  "); //split the input into words
let decodedStr = "";// initialize

for (let i = 0; i < message.length; i++) { // loop through each word and access each by index
  let word = message[i];
  
  word = word.split(" "); // split each word into characters

  for (let j = 0; j < word.length; j++) {//loop through each character, access each by index
    const letter = word[j];

    if (morseCode[letter] === undefined) {
      decodedStr += " "; //handle blank spaces
    } else {
      decodedStr += morseCode[letter]; //append letters to decodedStr
    }
  }
}
 alert(decodedStr.toUpperCase()); 

}
