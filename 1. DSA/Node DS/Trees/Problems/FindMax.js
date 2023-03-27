class TreeNode
{
    constructor(d)
    {
        this.data = d;
        this.right = null;
        this.left = null;
    }
}

let node = new TreeNode(2);
node.left = new TreeNode(8);
node.right = new TreeNode(4);
node.left.left = new TreeNode(5);
node.left.left.left = new TreeNode(9);
node.right.right = new TreeNode(7);

function findMax(node)
{
    let qu = [];
    let max = -Infinity;
    qu.push(node);

    while(qu.length>0)
    {
          let temp = qu.shift();

          if(max < temp.data)
          {
            max = temp.data;
          }

          if(temp.left)
          {
            qu.push(temp.left);
          }

          if(temp.right)
          {
            qu.push(temp.right);
          }
    }

  return max;
}

console.log(findMax(node));
