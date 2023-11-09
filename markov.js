class MarkovMachine {
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  makeChains() {
    this.chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!this.chains[word]) {
        this.chains[word] = [];
      }

      this.chains[word].push(nextWord);
    }
  }

  makeText(numWords = 100) {
    let words = Object.keys(this.chains);
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let result = [];
    
    for (let i = 0; i < numWords; i++) {
      result.push(randomWord);
      let nextWords = this.chains[randomWord];
      randomWord = nextWords[Math.floor(Math.random() * nextWords.length)];
      
      if (randomWord === null) {
        randomWord = words[Math.floor(Math.random() * words.length)];
      }
    }

    return result.join(' ');
  }
}

// EXAMPLE
let mm = new MarkovMachine("the cat in the hat");
console.log(mm.makeText());
console.log(mm.makeText(50)); 


module.exports = { MarkovMachine };