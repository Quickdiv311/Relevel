class Node
{
    constructor(d)
    {
        this.data = d;
        this.right = null;
        this.left = null;
    }
}


let node = new Node(2);
node.left = new Node(3);
node.right = new Node(4);
node.left.left = new Node(5);
node.left.left.left = new Node(6);
node.right.right = new Node(7);
inOrder(node);

//pre order
function pre(n)
{
    if(n==null) return;

    console.log(n.data);
    pre(n.left);
    pre(n.right);
}

//in order
function inOrder(n)
{
    if(n==null) return;

    inOrder(n.left);
    console.log(n.data);
    inOrder(n.right);
}

//post order
function post(n)
{
    if(n==null) return;

    pre(n.left);
    pre(n.right);
    console.log(n.data);
}

