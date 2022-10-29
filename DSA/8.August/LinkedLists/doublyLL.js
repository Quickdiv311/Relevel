class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null;
        // this.tail = null;
    }

    addAtHead(data) {
         let newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
            return;
        }
		newNode.next = this.head; 
        this.head.prev = newNode;
		this.head = newNode; 
    }

    // addAtTail(data)
    // {
    //     let newNode = new Node(data);

    //     if(this.head == null)
    //     {
    //         this.addAtHead(data);
    //         return;
    //     } 

    //     this.tail.next = newNode;
    //     newNode.prev = this.tail;
    //     this.tail = newNode;
    // }

    removeAtHead()
    {
        if(this.head == null) return;

        let temp = this.head.next;
        temp.prev = null;
        this.head.next = null;
        this.head = temp;
    }

    // removeAtTail()
    // {
    //     if(this.head == null) return;

    //     let temp = this.tail.prev;
    //     this.tail.prev = null;
    //     temp.next = null;
    //     this.tail = temp;
    // }

    getList()
    {
        let temp = this.head;
        let arr = [];

        while(temp!= null)
        {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
}

let dl = new DLL();
dl.addAtHead(2);
dl.addAtHead(3);
dl.addAtHead(5);
console.log(dl.getList());
