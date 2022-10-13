function counters(sentence) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) > -1) {
      count++;
    }
  }
  return "There are " + count + " vowels";
}

console.log(counters("Hello World, I'm coming!"));
console.log(counters("Hello World, I'm coming!"));
