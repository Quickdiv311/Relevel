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
        this.root = null;
    }

    insert(x)
    {
        this.root = this.insertHelper(this.root,x);
    }

    insertHelper(root,x)
    {
        if(root == null)
          return new Node(x);

        if(x < root.data)
        {
            root.left = this.insertHelper(root.left,x);
        }
        else
        {
            root.right = this.insertHelper(root.right,x);
        }
        return root;
    }

    inorder()
    {
        this.inorderHelper(this.root);
    }

    inorderHelper(root)
    {
        if(root==null)
          return;

        this.inorderHelper(root.left);
        console.log(root.data);
        this.inorderHelper(root.right);
    }

    remove(x)
    {
        this.removeHelper(this.root,x);
    }

    removeHelper(root,x)
    {
        if(root==null) return null;
        if(root.data == x)
        {
            if(!root.left && !root.right) return null;
            if(root.left && !root.right) 
            {
                let temp = root.left;
                root.left = null;
                return temp;
            }
            if(!root.left && root.right) 
            {
                let temp = root.right;
                root.right = null;
                return temp;
            }

            let temp = root.left;
            while(temp.right){temp = temp.right;}
            root.data = temp.data;
            root.left = this.removeHelper(root.left,temp.data);
        }

        if(root.data < x)
        {
            root.left = this.removeHelper(root.left,x);
        }
        else
        {
            root.right = this.removeHelper(root.right,x);
        }
        return root;
    }
}

let a = [6,4,8,1,9,5];
let bst = new BST();

for(let i=0;i<a.length;i++)
{
  bst.insert(a[i]);
}
bst.remove(6);
bst.inorder();