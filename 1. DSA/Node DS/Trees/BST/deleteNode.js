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

    removeHelper(x,root)
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
            if(!temp.right)
            {
                root.left = null;
            }
            while(temp.right) {temp = temp.right;}
            root.data = temp.data;
            this.removeHelper(temp.data,root.left);
            return root;
        }

        if(x < root.data)
        {
            root.left = this.removeHelper(x,root.left);
        }

        else
        {
            root.right = this.removeHelper(x,root.right);
        }
    }

    remove(x)
    {
        this.removeHelper(x,this.root);
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

let a = [10,5,45,19,53];
let bst = new BST();

for(let i=0;i<a.length;i++)
{
  bst.insert(a[i]);
}
bst.remove(45);
bst.inorder();

