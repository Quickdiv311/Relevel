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

    addAtTail(d)
    {
        let newNode = new Node(d);

        if(this.head==null)
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        else
        {
            let temp = this.head;
            while(temp.next)
            {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    removeAtHead()
    {
        if(this.head==null) return;

        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }

    display()
    {
        let a = [];
        if(this.head)
        {
            while(this.head!=null)
            {   
                a.push(this.head.data);
                this.head = this.head.next;
            }
            console.log(a);
        }

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
        this.ll.addAtTail(d)
    }

    dequeue()
    {
        this.ll.removeAtHead();
    }
   
    getHead()
    {
        return this.ll.head;
    }
}

class StackUsingQueue
{
  constructor()
  {
    this.qu = new Queue();
  }

  push(d)
  {
    this.qu.enqueue(d);
  }

  pop()
  {
    let que = new Queue();
    if(this.qu.getHead())
    {
        while(this.qu.getHead().next != null)
        {
            let temp = this.qu.getHead().data;
            this.qu.dequeue();
            que.enqueue(temp);
        }
    
        this.qu.dequeue();
    
        if(que.getHead())
        {
            while(que.getHead())
            {
                let temp = que.getHead().data;
                que.dequeue();
                this.qu.enqueue(temp);   
            }
        }
    }
  }

  displayQueue()
  {
    let a = [];
    let start = this.qu.getHead();
    if(start)
    {
    while(start!=null)
    {
        a.push(start.data);
        start = start.next;
    }
    return a;
    }
  }
}

let st = new StackUsingQueue();
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.pop();
st.pop();
console.log(st.displayQueue());



