class HashTable {
  constructor(size=50){
    this.buckets = new Array(size)
  }

  hash(key){
    let hash = 0
    let PRIME = 31
    for(let i = 0; i < key.length; i++){
      hash = (hash * PRIME + key.charCodeAt(i)) % this.buckets.length
    }
    return hash
  }

  set(key,val){
    let index = this.hash(key)
    if(!this.buckets[index]){
      this.buckets[index] = []
    }
    for(let pair of this.buckets[index]){
      if(pair[0] === key){
        pair[1] === val
        return
      }
    }
    return this.buckets[index].push([key,val])
  }

  get(key){
    let index = this.hash(key)
    if(!this.buckets[index]) return undefined
    for(let pair of this.buckets[index]){
      if(pair[0]===key){
        console.log(pair[1])
        return pair[1]
      }
    }
    return undefined
  }

  remove(key){
    let index = this.hash(key)
    if(!this.buckets[index]) return undefined

    for(let i = 0 ; i < this.buckets[index].length; i++){
      if(this.buckets[index][i][0] === key){
        this.buckets[index].splice(i,1)
        return true
      }
    }
    return false
  }

  print(){
    console.log("{")
    this.buckets.forEach((bucket)=>{
      if(bucket && bucket.length > 0){
        for(let pair of bucket){
          console.log(`${pair[0]}:${pair[1]},`)
        }
      }
    })
    console.log("}")
  }
}

const myTable = new HashTable();

myTable.set("age", 20);
myTable.set("name", "faraz");
myTable.set("place", "kasaragod");
myTable.set("phone", 3089987897);
myTable.set("job", "Software developer");
myTable.remove("age");
myTable.get("job")

myTable.print();
