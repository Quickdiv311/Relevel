class Node{
    constructor(k,v)
    {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class HashMap
{
    constructor()
    {
        this.curSize = 2;
        this.arr = [];
        this.lambda = 0.5;
        this.elements = 0;

        for(let i=0;i<this.curSize;i++)
        {
            this.arr.push(null);
        }
    }

    hash(key)
    {
        let ans = 0;
        let c = 101;
        let m = this.curSize;
        let x = 1;

        for(let i=0;i<key.length;i++)
        {
            ans = ((ans%m) + (key.charCodeAt(i)*x)%m)%m;
            x = x*c;
        }
        return ans;
    }

    insert(k,v)
    {
        let bucketIndex = this.hash(k);
        let newNode = new Node(k,v);
        newNode.next = this.arr[bucketIndex];
        this.arr[bucketIndex] = newNode;
        this.elements++;

        let currLoadFactor = this.elements/this.curSize;
        if(currLoadFactor > this.lambda)
        {
            this.rehash();
        }
    }

    rehash()
    {
        this.elements = 0;
        this.oldSize = this.curSize;
        this.curSize = 2+this.oldSize;
        let oldArray = this.arr;
        this.arr = [];
        for(let i=0;i<oldArray.length;i++)
        {
            let temp = oldArray[i];
            while(temp != null)
            {
                this.insert(temp.key,temp.value);
                temp = temp.next;
            }
        }
    }

    display()
    {
        console.log(this.arr);
    }
}