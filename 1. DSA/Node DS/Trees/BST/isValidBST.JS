class TreeNode
{
    constructor(d)
    {
        this.data = d;
        this.right = null;
        this.left = null;
    }
}

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

    isSorted()
    {
        let start = this.head;
        let end = this.head.next;

        while(end)
        {
            if(end.data < start.data)
              return false;
            
            end=end.next;
            start=start.next;
        }
        return true;
    }
}

var isValidBST = function(root) {
    pre(root);
   return ll.isSorted();
};

function pre(root)
{
    if(root==null) return;

    pre(root.left);
    ll.addAtTail(root.data);
    pre(root.right);
}


let node = new TreeNode(0);
node.left = new TreeNode(-1);
let ll = new LinkedList();
 console.log(isValidBST(node));