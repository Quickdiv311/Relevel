class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

let node = new Node(10);
node.left = new Node(1);
node.right = new Node(2);
node.left.left = new Node(3);
node.left.right = new Node(4);
node.right.left = new Node(5);
node.right.right = new Node(6);

function pre(n)
{
    if(n == null) return;
    console.log(n.data);
    pre(n.left);
    pre(n.right);
}


pre(node);
