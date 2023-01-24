class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

let node = new Node(5);
node.left = new Node(1);
node.right = new Node(6);
node.left.left = new Node(2);
node.left.right = new Node(3);
node.right.left = new Node(8);
node.right.right = new Node(9);



 function elFound(x,root)
 {
    if(root == null) return false;
    if(x == root.data) return true;

    let left = elFound(x,root.left);
    if(left) return true;
    let right = elFound(x,root.right);
    if(right) return true;

    return false;
 }

 console.log(elFound(3,node));
