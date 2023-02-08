class Node 
{
    constructor(d)
    {
        this.data = d;
        this.next = null;
        this.flag = false;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.start = null;
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
        newNode.next = this.head;
        this.head = newNode;
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

    reorder()
    {
         this.start = this.head;
        this.folder(this.head);
    }

    folder(cur)
    {
        if(!cur)return;

        this.folder(cur.next);

        if(this.flag) return;

        if(this.start==cur || this.start.next == cur)
        {
            cur.next = null;
            this.flag = true;
            return;
        }

            let temp = this.start.next;
            this.start.next = cur;
            cur.next = temp;
            this.start = temp;
    }
}

let ll = new LinkedList();
ll.addAtTail(1);
ll.addAtTail(2);
ll.addAtTail(3);
ll.addAtTail(4);
ll.display();
ll.reorder();
ll.display();

