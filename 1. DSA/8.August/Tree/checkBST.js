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
node.right = new Node(12);
node.left.left = new Node(3);
node.left.right = new Node(4);
node.right.left = new Node(15);
node.right.left = new Node(6);

let minEl = Infinity;
let maxEl = -Infinity;

function getMin(node)
{
   if(node == null) return;
   if(node.data < minEl)
   {
     minEl = node.data;
   }

   getMin(node.left);
   getMin(node.right);
   return minEl;
}

function getMax(node)
{
    if(node == null) return;
    if(node.data > maxEl) 
    {
        maxEl = node.data;
    }

    getMax(node.left);
    getMax(node.right);
    return maxEl;
}

function checkBST(n)
{
   if(n == null) return;
   checkBST(n.left);
   checkBST(n.right);
   let leftMin = getMin(n.left);
   let rightMax = getMax(n.right);

   if(n.data < leftMin || n.data > rightMax) return false;

   return true;
}

console.log(checkBST(node));