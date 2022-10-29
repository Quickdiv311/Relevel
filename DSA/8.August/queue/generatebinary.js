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

   removeAtHead()
   {
     if(this.head ==null) return;

     let temp = this.head.next;
     this.head.next = null;
     this.head = temp;

     if(this.head === null) {
        this.tail = null;
     }
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

   getHead()
   {
    if(this.head == null) return undefined;

    return this.head.data;
   }
}

class Queue
{
  constructor()
  {
     this.link = new LinkedList();
  }

  enqueue(d)
  {
    this.link.addAtTail(d);
  }

  dequeue()
  {
     this.link.removeAtHead();
  }

  getFront()
  {
      return this.link.getHead();
  }
}

let que = new Queue();

// console.log(que.getFront());

function generaterBinary(n)
{
  let num = "1";
  que.enqueue(num);
  let arr = [];

  while(n--)
  {
    let first = que.getFront();
    arr.push(first);
    que.dequeue();
    que.enqueue(first+"0");
    que.enqueue(first+"1");
  }

  return arr;
}

console.log(generaterBinary(5));