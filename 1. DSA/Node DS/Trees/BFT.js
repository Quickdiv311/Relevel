class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST
{
    constructor()
    {
        this.root=null;
    }

    insertHelper(x,root)
    {
        if(root==null) 
        {
            return new Node(x);
        }

        if(x < root.data)
        {
            root.left = this.insertHelper(x,root.left);
        }
        else
        {
            root.right = this.insertHelper(x,root.right);
        }
        return root;
    }

    insert(x)
    {
        if(this.root==null)
        {
            this.root = new Node(x);
            return;
        }
        this.insertHelper(x,this.root);
    }

  levelOrderHelper(root)
  {
     let qu = [];
     let result = "";
     qu.push(root);
     qu.push(null);

     while(qu.length>0)
     {
        let cur = qu[0];
        qu.shift();
        if(cur==null)
        {
            if(qu.length==0) break;

            result += '\n';
            qu.push(null);
        }
        else
        {
            result += cur.data + " ";
            if(cur.left) qu.push(cur.left);
            if(cur.right) qu.push(cur.right);
        }
     }
     console.log(result);
  }

  levelOrder()
  {
    this.levelOrderHelper(this.root);
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(11);
bst.insert(9);
bst.insert(7);
bst.levelOrder();