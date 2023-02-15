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

    removeAtTail()
    {
        if(this.head==null) return;
        if(this.head.next == null)
        {
            this.head = null;
            return;
        }

        let temp = this.head;
        let start = this.head;

        while(start.next!=null)
        {
            temp = start;
            start = start.next;
        }

        temp.next = null;
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

class Stack
{
    constructor()
    {
        this.ll = new LinkedList();
    }

    push(d)
    {
        this.ll.addAtTail(d)
    }

    pop()
    {
        this.ll.removeAtTail();
    }

    top()
    {
        if(this.ll.head)
        {
            let temp = this.ll.head;

            while(temp.next!=null)
            {
                temp = temp.next;
            }
       return temp;

        }
    }

    isEmpty()
    {
        return !this.ll?.head;
    }
   
    getStack()
    {
        this.ll.display();
    }
}

class QueueUsingStack
{
    constructor()
    {
        this.st = new Stack();
    }

    enqueue(d)
    {
        this.st.push(d);
    }

    dequeue()
    {
        let stack = new Stack();

         if(!this.st.isEmpty())
         {
            while(!this.st.isEmpty())
            {
                let temp = this.st.top().data;
                stack.push(temp);
                this.st.pop();
            }
            stack.pop();

            while(!stack.isEmpty())
            {
               let temp = stack.top().data;
               this.st.push(temp);
               stack.pop();
            }
         }
       
    }

    display()
    {
        this.st.getStack();
    }
}

let queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.display();










