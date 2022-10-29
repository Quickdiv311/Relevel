class Node{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}

class LinkedList{
    constructor()
    {
        this.tail = null;
        this.head = null;
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
        if(this.head == null)
        {
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    addAtTail(d)
    {
        if(this.head == null)
        {
            this.addAtHead(d);
            return;
        }

        let newNode = new Node(d);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeAtHead()
    {
        if(this.head == null) return;

        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;

        if(this.head == null) this.tail = null;
    }

    getFront()
    {
        if(this.head == null) return undefined;

        return this.head.data;
    }
}

class Queue
{
    constructor()
    {
        this.ll = new LinkedList();
    }

    enqueue(d)
    {
        this.ll.addAtTail(d);
    }

    dequeue()
    {
        this.ll.removeAtHead();
    }

    getHead()
    {
        return this.ll.getFront();
    }
}

let que = new Queue();
que.enqueue(2);
que.enqueue(3);
que.dequeue();
console.log(que.getHead());