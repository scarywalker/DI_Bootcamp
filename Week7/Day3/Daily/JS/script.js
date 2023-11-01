// 1
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(item => typeof item === 'string')) {
          resolve(words.map(str => str.toUpperCase()));
        } else {
          reject(`I can only uppercase strings`);
        }
      });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length <= 4) {
          resolve(words.sort());
        } else {
          reject(`Too many words`);
        }
      });
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
          reject("Morse object is empty");
        } else {
          resolve(morseJS);
        }
      } catch (error) {
        reject("Invalid JSON");
      }
    });
  }

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userSentence = prompt("Please enter a word or sentence:").toLowerCase();
      const morseTranslation = [];  
      for (const char of userSentence) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character '${char}' doesn't exist in Morse object`);
        }
      }  
      resolve(morseTranslation);
    });
  }
  
function joinWords(morseTranslation) {
    const morseCodeDisplay = morseTranslation.join("\n");
    console.log(morseCodeDisplay);
  }

  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.error(error));
  