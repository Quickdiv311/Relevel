class Node
{
    constructor(d)
    {
        this.data = d;
        this.right = null;
        this.left = null;
    }
}

class BST
{
     constructor()
     {
         this.root = null;
     }

     insertHelper(x,root)
     {
          if(root==null) {
            return new Node(x);
          }

          if(x< root.data)
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

    inorderHelper(root)
    {
        if(root==null) return;

        this.inorderHelper(root.left);
        console.log(root.data);
        this.inorderHelper(root.right);
    }

    inorder()
    {
        this.inorderHelper(this.root);
    }
}

let a = [10,5,45,19,3];
let bst = new BST();

for(let i=0;i<a.length;i++)
{
  bst.insert(a[i]);
}
bst.inorder();