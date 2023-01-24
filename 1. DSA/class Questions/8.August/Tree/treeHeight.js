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

function height(node)
{
    if(node == null)
    {
        return -1;
    }

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return 1 + Math.max(leftHeight,rightHeight);
}

console.log(height(node));

