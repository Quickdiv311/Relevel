class Node
{
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
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
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

        let temp = this.head;
        while(temp.next) temp = temp.next;

        let newNode = new Node(d);
        temp.next = newNode;
    }

    removeAtHead()
    {
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }

    removeAtTail()
    {
        let temp = this.head;
        while(temp.next.next) temp = temp.next;

        temp.next = null;
    }

    addAt(x,d)
    {
        if(x==0)
        {
            this.addAtHead(d);
            return;
        }
        let temp = this.head;

        for(let i=0;i<x-1 && temp;i++)
        {
            temp = temp.next;
        }

        let newNode = new Node(d);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    removeAt(x)
    {
        if(x==0)
        {
            this.removeAtHead();
            return;
        }

        let temp = this.head;
        for(let i=0;i<x-1 && temp.next;i++)
        {
            temp = temp.next;
        }
        
        let nextNode= temp.next;
        temp.next = temp.next.next;
        nextNode.next = null;
    }

    display()
    {
        let temp = this.head;
        while(temp)
        {
            console.log(temp.data);
            temp = temp.next;
        }
        return;
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

    display()
    {
        this.ll.display();
    }

    isEmpty()
    {
        return !this.ll.head;
    }

    getFront()
    {
        return this.ll.head.data;
    }
}

function firstNeg(arr,k)
{
    let qu = new Queue();
    for(let i=0;i<k;i++)
    {
        if(arr[i] < 0)
        {
            qu.enqueue(i);
        }
    }

    if(!qu.isEmpty())
    {
        console.log(arr[qu.getFront()]);
    }
    else
    {
        console.log(0);
    }

    let i=1;
    let j=k;
    while(j<arr.length)
    {
        if(!qu.isEmpty() && qu.getFront() == i-1)
        {
            qu.dequeue();
        }
        if(arr[j] < 0)
        {
            qu.enqueue(j);
        }
        if(!qu.isEmpty())
        {
            console.log(arr[qu.getFront()]);
        }
        else
        {
            console.log(0);
        }
        i++;
        j++;
    }
}

firstNeg([-4,-6,-7,8,5,0,-3,4,8,-2,-1,-6,5],3);
