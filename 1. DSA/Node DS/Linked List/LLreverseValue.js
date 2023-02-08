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
    this.start = null;
    this.flag = true;
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

  iterate(cur)
  {
    if(!cur.next)
    {
        [this.start.data,cur.data] = [cur.data,this.start.data];
        this.start = this.start.next;
        return;
    }

    this.iterate(cur.next);
    if(this.start==cur || cur.next==this.start)
    {
        this.flag=false;
    }

    if(this.flag)
    {
        [this.start.data,cur.data] = [cur.data,this.start.data];
        this.start = this.start.next;
    }

  }

  reverseValue()
  {
    this.start = this.head;
    this.iterate(this.head);
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
ll.addAtTail(1);
ll.addAtTail(2);
ll.addAtTail(3);
ll.addAtTail(4);
ll.reverseValue();
ll.display();