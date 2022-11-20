class Node{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
    } 

    removeAtHead()
    {
        if(this.head == null) return;

        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;

        if(this.head == null) this.tail = null;
    }

    getHead(){
        if(this.head == null) return undefined;

        return this.head.data;
    }

    isEmpty()
    {
        return this.head == null;
    }
}

class Stack
{
    constructor()
    {
        this.ll = new LinkedList();
    }

    addAtTop(d)
    {
        this.ll.addAtHead(d);
    }

    removeFromTop()
    {
        this.ll.removeAtHead();
    }

    getTopElement()
    {
        return this.ll.getHead();
    }

    isEmpty()
    {
        return this.ll.isEmpty();
    }
}