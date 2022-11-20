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

    size()
    {
        let c = 0;
        while(ll.getHead()!=null)
        {
            ll.dequeue();
            c++;
        }
        return c;
    }
}

class Stack
{
    constructor()
    {
        this.ll = new LinkedList();
    }

    addAtHead(d)
    {
      this.ll.addAtHead(d);
    }

    removeAtHead()
    {
       this.ll.removeAtHead();
    }

    top()
    {
        this.ll.getFront();
    }

    // size()
    // {
    //     let c = 0;
    //     while(st.top()!=null)
    //     {
    //         st.removeAtHead();
    //         c++;
    //     }
    //     return c;
    // }
}

let que = new Queue();
let st = new Stack();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.enqueue(4);
que.enqueue(5);
que.enqueue(6);
que.enqueue(7);
que.enqueue(8);
que.enqueue(9);
que.enqueue(10);
console.log(que.size());

function reverseFirstK(k)
{
    let j =k;
    while(k>0)
    {
        let top = que.getHead();
        st.addAtHead(top);
        que.dequeue();
        k--;
    }

    while(j>0)
    {
        let top = st.top();
        que.addAtTail(top);
        st.removeAtHead();
        j--;
    }

    // for(let i=0;i<que.length-j;i++)
    // {
        
    // }
}