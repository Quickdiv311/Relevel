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

        if(temp.next == null) 
        {
            this.removeAtHead();
            return;
        }
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

 class Stack
 {
    constructor()
    {
        this.ll = new LinkedList();
    }

    push(d)
    {
        this.ll.addAtHead(d);
    }

    pop()
    {
        this.ll.removeAtHead();
    }

    isEmpty()
    {
        return !this.ll.head;
    }

    top()
    {
        return this.ll.head.data;
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

    enqueueFromFront(d)
    {
        this.ll.addAtHead(d);
    }

    dequeue()
    {
        this.ll.removeAtHead();
    }

    dequeueFromEnd()
    {
        this.ll.removeAtTail();
    }

    isEmpty()
    {
        return !this.ll.head;
    }

    front()
    {
        return this.ll.head.data;
    }

    last()
    {
        let temp = this.ll.head;

        while(temp.next)
        {
            temp = temp.next;
        }

        return temp.data;
    }
 }


function slidingWindow(arr,k)
{
    let qu = new Queue();
    let result = [];
    let max = 0;
    for(let i=1;i<k;i++)
    {
       if(arr[i] > arr[max])
       {
         max = i;
       }
    }

    result.push(arr[max]);
    qu.enqueue(max);

    let i=1;
    let j=k;
    while(j<arr.length)
    {
        if(!qu.isEmpty() && qu.front() == i-1)
        {
            qu.dequeue();

            if(i<k)
            {
               let max2 = i;
               let j = i+1;

               while(j<k)
               {
                  if(arr[j] > arr[max2])
                  {
                     max2 = j;
                  }
                  j++;
               }
                qu.enqueueFromFront(max2);
            }
        }
        
        while(!qu.isEmpty() && arr[j] > arr[qu.last()])
        {
           qu.dequeueFromEnd();
        }
        qu.enqueue(j);

        result.push(arr[qu.front()]);
        i++;
        j++;
    }

    return result;
}


let a = [6,5,2,-7,-5,-8,6,9];

console.log(slidingWindow(a,3));


