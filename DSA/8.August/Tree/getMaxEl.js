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
node.left.left = new Node(13);
node.right.left = new Node(-11);
node.right.right = new Node(6);
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

let result = getMax(node);
console.log(result);
let res = getMin(node);
console.log(res);

