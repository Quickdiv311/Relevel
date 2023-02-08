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

    removeAtHead()
    {
        if(this.head==null) return;

        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }

    addAtTail(d)
    {
        if(this.head==null)
        {
            this.addAtHead(d);
            return;
        }
        let tail = this.head;
        while(tail.next!=null)
        {
            tail = tail.next;
        }

        let newNode = new Node(d);
        tail.next = newNode;
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
       
       while(tail.next.next!=null)
       {
         tail = tail.next;
       }

       temp.next = null;
    }

    addAt(pos,d)
    {
        if(this.head==null)
        {
            this.addAtHead(d);
            return;
        }

        let temp = this.head;
        for(let i=0;i<pos && temp.next!=null;i++)
        {
            temp = temp.next;
        }

        let newNode = new Node(d);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    removeAt(pos)
    {
      if(this.head==null) return;
      if(pos==0)
      {
        this.removeAtHead();
        return;
      }

      let temp = this.head;
      for(let i=0;i<pos-1 && temp.next!=null;i++)
      {
        temp = temp.next;
      }
     
     let nextNode = temp.next;
     temp.next = temp.next.next;
     nextNode.next = null;
    }

    reverse()
    {
        let cur = this.head;
        let prev = null;
    
      while(cur!=null)
      {
        let next = cur.next;
        cur.next=prev;
        prev = cur;
        cur = next;
      }
      
     this.head = prev;
    }

    display()
    {
        let temp = this.head;
        let arr = [];

        while(temp != null)
        {
            arr.push(temp.data);
            temp = temp.next;
        }
        console.log(arr);
    }
}

let ll = new LinkedList();
ll.addAtHead(3);
ll.addAtTail(2);
ll.addAtTail(1);
ll.display();
