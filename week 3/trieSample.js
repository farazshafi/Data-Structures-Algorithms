class TreeNode {
  constructor() {
    this.children = {};
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TreeNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TreeNode();
      }
      current = current.children[char];
    }
    current.isEndWord = true;
  }

  searchWord(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return current.isEndWord;
  }

  autoComp(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) return [];
      current = current.children[char];
    }
    let result = [];
    this.collectWord(current, word, result);
    return result;
  }

  collectWord(node, word, result) {
    if (node.isEndWord) {
      result.push(word);
    }
    for (let char in node.children) {
      this.collectWord(node.children[char], word + char, result);
    }
  }

  longestPre(word){
    let current = this.root
    let prefix = ""
    for(let char of word){
      if(current.children[char]){
        prefix += char
        current = current.children[char]
      }else{
        break
      }
    }
    console.log(prefix)
    return prefix
  }

  print() {
    console.log(this.root);
  }
}

let trie = new Trie();

trie.insert("Amazon");
trie.insert("Amazing");
trie.insert("Dog");

// console.log(trie.searchWord("Dog"));
let result = trie.autoComp("Ama")
// console.log(result)
let prefix = trie.longestPre("amazion")
console.log(prefix)