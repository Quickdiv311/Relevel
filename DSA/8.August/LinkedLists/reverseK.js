class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        // this.tail = null;
    }

    addAtHead(data) {
         let newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
            return;
        }
		newNode.next = this.head; 
        this.head.prev = newNode;
		this.head = newNode; 
    }

    addAtTail(data)
    {
        let newNode = new Node(data);

        if(this.head == null)
        {
            this.addAtHead(data);
            return;
        } 

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    removeAtHead()
    {
        if(this.head == null) return;

        let temp = this.head.next;
        temp.prev = null;
        this.head.next = null;
        this.head = temp;
    }

    // removeAtTail()
    // {
    //     if(this.head == null) return;

    //     let temp = this.tail.prev;
    //     this.tail.prev = null;
    //     temp.next = null;
    //     this.tail = temp;
    // }

    getList()
    {
        let temp = this.head;
        let arr = [];

        while(temp!= null)
        {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
}

let root = new DLL();
root.addAtHead(2);
root.addAtHead(3);
root.addAtHead(5);

function reverse(root,k)
{
    let cur = root;
    let start = cur;
    let prev;
    let next;
    
    while(k>0)
        {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            k--;
        }
    start.next=cur;
    let pre = prev;
    prev = start;
    
    return pre;
}


var reverseKGroup = function(head, k) {
    let c = k;
    let ct=0;
    let root;
    while(head)
        {
            head = head.next;
            
            if(c--)
                {
                  root = reverse(head,k);
                  if(ct<1) 
                  {
                      start = root;
                      ct++;
                  }
                  c=k;
                }
        }
    return start;
};