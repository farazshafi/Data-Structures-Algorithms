class HashTable {
  constructor(size){
      this.items = new Array(size).fill(null)
      this.size = size
      this.count = 0
  }
  
  hash(key){
      let hash = 0
      let PRIME = 31
      for(let i = 0 ; i < key.length; i++){
          hash = (hash * PRIME + key.charCodeAt(i)) % this.size
      }
      return hash
  }
  
  loadFactor(){
    return this.count / this.size
  }
  
  rehash(){
      console.log("Rehashing...")
      let oldItems = this.items
      this.size *= 2
      this.items = new Array(this.size).fill(null)
      this.count = 0
      
     for(let item of oldItems){
         if(item !== null){
             this.set(item[0], item[1], false)
         }
     }
     
      console.log("Rehashed")
      return true
      
  }
  
  isFull(){
      return this.size === this.count
  }
  
  set(key,value,checkLoadFactor = true){
      if(checkLoadFactor && this.loadFactor() > 0.75){
          this.rehash()
      }
      
      let index = this.hash(key)
      
      while(this.items[index] !== null && this.items[index][0] !== key){
          index = (index + 1) % this.size
      }
      
      if(this.items[index] === null){
          this.items[index] = [key,value]
          this.count ++
      }else{
          // already value
          if(this.items[index][0]===key){
              this.items[index][1] = value
          }
      }
  }
  
  remove(key){
      let index = this.hash(key)
      let lastIndex = index
      while(this.items[index] !== null){
          if(this.items[index][0] === key){
              this.items[index] = null
              this.count --
              return true
          }else{
              index = (index + 1) % this.size
              if(index === lastIndex) break
          }
          
      }
  }
  
  get(key){
      let index = this.hash(key)
      let lastIndex = index
      
      while(this.items[index] !== null){
          if(this.items[index][0] === key){
              console.log(this.items[index][1])
              return true
          }
          index = (index + 1) % this.size
          if(index === lastIndex) break
      }
  }
  
  hasKey(key){
      let index = this.hash(key)
      let lastIndex = index
      
      while(this.items[index] !== null){
          if(this.items[index][0] === key){
              console.log("True")
              return true
          }else{
              index = (index + 1) % this.size
              if(index === lastIndex) break
          }
      }
      console.log("False")
      return false
  }
  
  clear(){
      this.count = 0
      this.items = new Array(this.size).fill(null)
  }
  
  print(){
      console.log("{")
      for(let i = 0 ;i < this.size;i ++){
          if(this.items[i] !== null){
              console.log(`${this.items[i][0]} : ${this.items[i][1]}`)
          }
      }
      console.log("}")
  }
  
  
}

let ht = new HashTable(4)
ht.set("phone",123456789)
ht.set("name", "faraz shafi")
ht.set("age", 20)
ht.set("place", "kasaragod")
ht.set("job", "software developer")
// ht.hasKey("age")
ht.print()

