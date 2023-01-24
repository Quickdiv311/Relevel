class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor()
    {
        this.root = null;
    }

    insertHelper(x,root)
    {
       if(root == null)
       {
         return new Node(x);
       }        

       if(x < root.data) 
       {
        root.left = this.insertHelper(x,root.left);
       }
       else
       {
        root.right = this.insertHelper(x.root.right);
       }

       return root;
    }

    insert(x)
    {
        if(this.root==null){
            this.root = new Node(x);
            return;
        }

        this.insertHelper(x,this.root);
    }

    removeHelper(root,x)
    {
        if(root==null) return null;
        if(root.data==x)
        {
            if(root.left==null && root.right==null) return null;
            if(root.left==null && root.right!==null)
            {
                let temp = root.right;
                root.right = null;;
                return temp;
            }

            if(root.left!==null && root.right==null)
            {
                let temp = root.left;
                root.left = null;
                return temp;
            }

            let temp = root.left;
            while(temp.right != null) 
            {
                temp = temp.right;
            }
            root.data = temp.data;
            this.removeHelper(root.left,temp.data);
            return root;
        }

        if(x < root.data) 
       {
        root.left = this.removeHelper(root.left,x);
       }
       else
       {
        root.right = this.removeHelper(root.right,x);
       }
    }

    preorderHelper(x,root)
    {
        if(root==null) return;
        console.log()
        this.preorderHelper(left);
        this.preorderHelper(right);
    }
}

let arr = [10,3,2,6,12,34];

