class TrieNode {
  constructor() {
    this.children = {};
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(words) {
    let current = this.root;
    for (let char of words) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char];
    }
    current.isEndWord = true;
  }

  autoComplete(prefix) {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }

    const result = [];
    this.collectWords(current, prefix, result);
    return result;
  }

  longestPrefix(word){
    let current = this.root
    let longestPrefix = ""

    for(let char of word){
      if(current.children[char]){
        longestPrefix += char
        current = current.children[char]
      }else{
        break
      }
    }
    return longestPrefix
  }

  collectWords(node, prefix, result) {
    if (node.isEndWord) {
      result.push(prefix);
    }
    for (const char in node.children) {
      this.collectWords(node.children[char], prefix + char, result);
    }
  }

  searchWord(word){
    let current = this.root
    for(let char of word){
      if(!current.children[char]){
        return false
      }
      current = current.children[char]
    }
    return current.isEndWord
  }

  startWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}

let trie = new Trie();

trie.insert("carpet");
trie.insert("car");
trie.insert("cat");
trie.insert("calender");

// console.log("car: ", trie.searchWord("car"));
// console.log("carp: ", trie.searchWord("carp"));
// console.log("calender: ", trie.searchWord("calender"));

// console.log("calen", trie.startWith("calen"));

// console.log(trie.autoComplete("ca"));
console.log(trie.longestPrefix("calendikdfkfkafaf"));
