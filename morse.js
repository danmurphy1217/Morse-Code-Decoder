document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    // let input = document.getElementById("morse");
    let input = document.querySelector("#morse");
    // let input = document.querySelector("input[name=codedMessage]");
    console.log(`you added ${input.value} to the input`);

    decoder(input.value);
  });

  // document.querySelector("button").addEventListener("click", decoder);
});
function decoder(str) {
  let morseCode = {
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
    " ": " ",
    "---...": ":",
    ".----.": "'",
    " ": "NEW_WORD",
    "  ": "NEW_CHAR"
  };

  const MORSEKEYS = Object.keys(morseCode);
  var message = ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .";
  message = str.split("  ");
  let first = message[0];
  let letters = first.split(" ");
  let first_letter = letters[0];
  decodedStr = "";
  for (let i = 0; i < message.length; i++) {
    let word = message[i];
    word = word.split(" ");
    for (let k = 0; k < word.length; k++) {
      const letter = word[k];
      if (morseCode[letter] === undefined) {
        decodedStr += " ";
      } else {
        decodedStr += morseCode[letter];
      }
    }
  }
  alert(decodedStr.toUpperCase());
}
