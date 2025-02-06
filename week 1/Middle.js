class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class SinlglyLinkedList{
    constructor(){
        this.head = null
    }
    append(data){
        if(!this.head){
            this.head = new Node(data)
            return
        }else{
            let current = this.head
            let newNode = new Node(data)
            while(current && current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
    appendMiddle(data){
        if(!this.head){
            append(data)
            return
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        let newNode = new Node(data)
        prev.next = newNode
        newNode.next = slow
    }
    deleteMiddle(){
        if(!this.head){
            console.log("Nothing to delete")
            return
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        console.log("fast",fast)
        console.log("slow",slow)
        console.log("prev",prev)
        console.log("head",this.head)
        prev.next = slow.next
    }
    removePervEven(){
        if(!this.head){
            console.log("nothing to remove")
            return
        }else{
            let current = this.head
            while(current){
                let prev = current
                if(current?.next?.next?.data % 2===0){
                    prev.next = prev.next.next
                }
                current = current.next
            }
        }
    }
    removeAtIndex(index){
        if(!this.head){
            console.log("nothing to remove")
            return
        }else{
            if(index ===0){
                this.head = this.head.next
                return
            }
            let current = this.head
            let count = 0
            while(current.next && count === index){
                current = current.next
                index ++
            }
            current.next = current.next.next
        }
    }
    removeOcc(data){
        if(!this.head){
            console.log("Nothing to remove")
            return
        }else{
            while (this.head && this.head.data === data) {
                this.head = this.head.next;
            }

            let current = this.head
            while(current && current.next){
                if(current.next.data === data){
                    current.next = current.next.next
                }else{
                    current = current.next
                }
            }
        }
    }
    print(){
        let str = ""
        let current = this.head
        while(current){
            str += `${current.data} => `
            current = current.next
        }
        str += "null"
        console.log(str)
    }
}

let sl = new SinlglyLinkedList()
sl.append(1)
sl.append(80)
sl.append(20)
sl.append(20)
sl.append(23)
sl.append(80)
sl.appendMiddle(24)
sl.appendMiddle(25)
sl.append(80)
sl.removeOcc(80)
// sl.removeAtIndex(3)
// sl.print()
// sl.removePervEven()
// sl.deleteMiddle(28)
sl.print()
