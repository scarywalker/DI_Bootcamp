let [a,b,c,d] = ['Moon starer','Astronomer','dfsf','sgfsgs']

function anagram (string1,string2) {
  return string1.toLowerCase().split(" ").join("").split("").sort().join("") === string2.toLowerCase().split(" ").join("").split("").sort().join("")
}

console.log(anagram(a,b))
console.log(anagram(c,d))