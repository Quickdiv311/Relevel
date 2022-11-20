class TreeNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let node = new TreeNode(10);
node.left = new TreeNode(1);
node.right = new TreeNode(2);
node.right.left = new TreeNode(4);
node.right.right = new TreeNode(5);

function minDepth(root)
{
    if(!root) return 0;

    if(!root.left) return minDepth(root.right) + 1;
    if(!root.right) return minDepth(root.left) + 1;

    return 1+ Math.min(minDepth(root.left),minDepth(root.right));
}

console.log(minDepth(node));