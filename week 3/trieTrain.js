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

  autoCompletion(word){
    let current = this.root
    for(let char of word){
      if(!current.children[char]){
        return []
      }
      current = current.children[char]
    }
    let result = []
    this.collectWord(current,word,result)
    return result
  }

  collectWord(node, word, result){
    if(node.isEndWord){
      result.push(word)
    }
    for(let char in node.children){
      this.collectWord(node.children[char], word + char, result)
    }
  }
}


let trie = new Trie()

trie.insert("Abbas")
trie.insert("Apple")
trie.insert("App")
trie.insert("Apple fruit")
trie.insert("Apple phone")


// console.log(trie.searchWord("Abbas"))
console.log(trie.autoCompletion("Apple"))
